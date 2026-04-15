/**
 * 记忆曲线算法模块
 * 实现艾宾浩斯遗忘曲线复习计划
 * 采用简化版 FSRS (Free Spaced Repetition Scheduler) 算法
 */

const MemoryModule = {
    // 配置
    config: {
        // 艾宾浩斯复习间隔（分钟）
        intervals: [
            5,           // 第1次：5分钟后
            30,          // 第2次：30分钟后
            720,         // 第3次：12小时后
            1440,        // 第4次：1天后
            2880,        // 第5次：2天后
            5760,        // 第6次：4天后
            10080,       // 第7次：7天后
            21600,       // 第8次：15天后
            43200,       // 第9次：30天后
            86400        // 第10次：60天后
        ],
        
        // 记忆状态
        STATES: {
            NEW: 'new',                 // 新单词
            LEARNING: 'learning',       // 学习中
            REVIEW: 'review',           // 复习中
            MASTERED: 'mastered',       // 已掌握
            FORGOTTEN: 'forgotten'      // 已遗忘
        },
        
        // 掌握阈值（答对几次认为已掌握）
        MASTER_THRESHOLD: 4,
        
        // 重置阈值（连续答错几次需要重新学习）
        RESET_THRESHOLD: 2
    },
    
    // ==================== 复习计划 ====================
    
    /**
     * 创建新单词的复习计划
     * @param {string} wordKey - 单词唯一标识
     * @param {object} wordData - 单词数据
     * @returns {object} 复习任务对象
     */
    createReviewTask(wordKey, wordData) {
        const now = new Date();
        const firstReview = new Date(now.getTime() + this.config.intervals[0] * 60 * 1000);
        
        return {
            wordKey,
            word: wordData.word,
            chinese: wordData.chinese,
            unitId: wordData.unitId,
            moduleId: wordData.moduleId,
            easeFactor: 2.5,          // 初始难度因子
            interval: 0,               // 当前间隔（天）
            repetitions: 0,             // 重复次数
            nextReview: firstReview.toISOString(),
            status: this.config.STATES.NEW,
            history: []
        };
    },
    
    /**
     * 计算下次复习时间
     * @param {object} task - 当前复习任务
     * @param {number} quality - 回答质量 (0-5)
     *   0: 完全忘记
     *   1: 错误，但看到答案后想起
     *   2: 错误，但很容易想起
     *   3: 正确，但有些犹豫
     *   4: 正确，稍有犹豫
     *   5: 完全正确，立即想起
     * @returns {object} 更新后的任务
     */
    calculateNextReview(task, quality) {
        const now = new Date();
        let newTask = { ...task };
        
        // 记录历史
        newTask.history = [...(task.history || []), {
            date: now.toISOString(),
            quality,
            interval: task.interval
        }];
        
        // 遗忘 - 需要重新学习
        if (quality < 2) {
            newTask.repetitions = 0;
            newTask.interval = 0;
            newTask.nextReview = new Date(now.getTime() + 5 * 60 * 1000).toISOString(); // 5分钟后重试
            newTask.status = this.config.STATES.LEARNING;
            
            // 如果连续遗忘，增加状态标记
            if (task.forgotCount !== undefined) {
                newTask.forgotCount = task.forgotCount + 1;
            } else {
                newTask.forgotCount = 1;
            }
            
            // 降低难度因子
            newTask.easeFactor = Math.max(1.3, task.easeFactor - 0.2);
        } 
        // 记住了
        else {
            // 重置遗忘计数
            newTask.forgotCount = 0;
            
            // 增加重复次数
            newTask.repetitions += 1;
            
            // 根据质量调整难度因子
            const qualityBonus = (quality - 3) * 0.1;
            newTask.easeFactor = Math.max(1.3, task.easeFactor + qualityBonus);
            
            // 计算新间隔（使用简化版 SM-2 算法）
            if (newTask.repetitions === 1) {
                newTask.interval = 1; // 1天
            } else if (newTask.repetitions === 2) {
                newTask.interval = 3; // 3天
            } else {
                newTask.interval = Math.round(task.interval * newTask.easeFactor);
            }
            
            // 确保间隔不超过最大值（60天）
            newTask.interval = Math.min(60, newTask.interval);
            
            // 计算下次复习时间
            const nextTime = now.getTime() + newTask.interval * 24 * 60 * 60 * 1000;
            newTask.nextReview = new Date(nextTime).toISOString();
            
            // 更新状态
            if (newTask.repetitions >= this.config.MASTER_THRESHOLD) {
                newTask.status = this.config.STATES.MASTERED;
            } else {
                newTask.status = this.config.STATES.REVIEW;
            }
        }
        
        // 更新最后复习时间
        newTask.lastReview = now.toISOString();
        
        return newTask;
    },
    
    /**
     * 处理用户回答
     * @param {object} task - 当前复习任务
     * @param {boolean} isCorrect - 是否正确
     * @param {number} responseTime - 响应时间（毫秒）
     * @returns {object} 更新后的任务
     */
    processAnswer(task, isCorrect, responseTime = 0) {
        // 质量评分
        let quality;
        if (!isCorrect) {
            // 回答错误
            if (responseTime < 2000) {
                quality = 1; // 看错了
            } else {
                quality = 0; // 真忘了
            }
        } else {
            // 回答正确
            if (responseTime < 1000) {
                quality = 5; // 太快了，太熟练
            } else if (responseTime < 2000) {
                quality = 4; // 正常速度
            } else if (responseTime < 4000) {
                quality = 3; // 稍慢
            } else {
                quality = 2; // 犹豫
            }
        }
        
        return this.calculateNextReview(task, quality);
    },
    
    /**
     * 获取单词的复习状态描述
     * @param {object} task - 复习任务
     * @returns {string} 状态描述
     */
    getStatusDescription(task) {
        if (!task || !task.status) return '新单词';
        
        switch (task.status) {
            case this.config.STATES.NEW:
                return '新单词';
            case this.config.STATES.LEARNING:
                return '学习中';
            case this.config.STATES.REVIEW:
                return `复习中 (${task.repetitions}/${this.config.MASTER_THRESHOLD})`;
            case this.config.STATES.MASTERED:
                return '已掌握';
            case this.config.STATES.FORGOTTEN:
                return '已遗忘';
            default:
                return '未知状态';
        }
    },
    
    /**
     * 获取距离下次复习的时间描述
     * @param {string} nextReview - 下次复习时间 (ISO string)
     * @returns {string} 时间描述
     */
    getTimeUntilReview(nextReview) {
        const now = new Date();
        const reviewDate = new Date(nextReview);
        const diff = reviewDate - now;
        
        if (diff <= 0) {
            return '现在可以复习';
        }
        
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (days > 0) {
            return `${days}天后`;
        } else if (hours > 0) {
            return `${hours}小时后`;
        } else {
            return `${minutes}分钟后`;
        }
    },
    
    /**
     * 检查是否需要立即复习
     * @param {string} nextReview - 下次复习时间
     * @returns {boolean}
     */
    isDueForReview(nextReview) {
        const now = new Date();
        const reviewDate = new Date(nextReview);
        return reviewDate <= now;
    },
    
    /**
     * 获取复习建议
     * @param {number} quality - 回答质量
     * @returns {string} 建议文本
     */
    getSuggestion(quality) {
        if (quality >= 4) {
            return '很好！继续保持！';
        } else if (quality >= 2) {
            return '不错，但可以再多练习一下';
        } else if (quality >= 1) {
            return '试着回忆一下它的发音和用法';
        } else {
            return '多听几遍，试着理解它的意思';
        }
    },
    
    // ==================== 复习任务管理 ====================
    
    /**
     * 添加单词到复习计划
     * @param {string} wordKey - 单词标识
     * @param {object} wordData - 单词数据
     */
    scheduleReview(wordKey, wordData) {
        const task = this.createReviewTask(wordKey, wordData);
        StorageModule.addReviewTask(task);
        
        // 同时更新单词进度
        StorageModule.saveWordProgress(wordKey, {
            status: task.status,
            nextReview: task.nextReview,
            easeFactor: task.easeFactor,
            interval: task.interval,
            repetitions: task.repetitions
        });
        
        return task;
    },
    
    /**
     * 更新复习任务
     * @param {object} task - 更新后的任务
     */
    updateReviewTask(task) {
        StorageModule.updateReviewTask(task.id, task);
        
        // 更新单词进度
        StorageModule.saveWordProgress(task.wordKey, {
            status: task.status,
            nextReview: task.nextReview,
            easeFactor: task.easeFactor,
            interval: task.interval,
            repetitions: task.repetitions
        });
    },
    
    /**
     * 获取今日复习任务
     * @param {number} limit - 限制数量
     * @returns {array} 复习任务列表
     */
    getTodayReviewTasks(limit = 20) {
        const allReviews = StorageModule.getTodayReviews();
        
        // 按紧急程度排序
        allReviews.sort((a, b) => {
            return new Date(a.nextReview) - new Date(b.nextReview);
        });
        
        return limit ? allReviews.slice(0, limit) : allReviews;
    },
    
    /**
     * 获取单元的复习任务
     * @param {string} unitId - 单元ID
     * @returns {array} 复习任务列表
     */
    getUnitReviewTasks(unitId) {
        const allTasks = StorageModule.getReviewSchedule();
        return allTasks.filter(task => task.unitId === unitId);
    },
    
    /**
     * 获取复习统计数据
     * @returns {object} 统计数据
     */
    getReviewStats() {
        const allTasks = StorageModule.getReviewSchedule();
        const todayReviews = this.getTodayReviewTasks();
        
        const stats = {
            totalWords: allTasks.length,
            dueToday: todayReviews.length,
            mastered: allTasks.filter(t => t.status === this.config.STATES.MASTERED).length,
            learning: allTasks.filter(t => t.status === this.config.STATES.LEARNING).length,
            new: allTasks.filter(t => t.status === this.config.STATES.NEW).length,
            review: allTasks.filter(t => t.status === this.config.STATES.REVIEW).length
        };
        
        // 计算掌握率
        stats.masterRate = stats.totalWords > 0 
            ? Math.round((stats.mastered / stats.totalWords) * 100) 
            : 0;
        
        return stats;
    },
    
    /**
     * 获取今日需要复习的单词数量
     * @returns {number} 需要复习的单词数量
     */
    getReviewCount() {
        return this.getTodayReviewTasks().length;
    },
    
    /**
     * 生成复习报告
     * @param {array} results - 复习结果
     * @returns {object} 报告数据
     */
    generateReviewReport(results) {
        const total = results.length;
        const correct = results.filter(r => r.isCorrect).length;
        const wrong = total - correct;
        
        const avgResponseTime = results.reduce((sum, r) => sum + r.responseTime, 0) / total;
        
        // 分类统计
        const byUnit = {};
        results.forEach(r => {
            if (!byUnit[r.unitId]) {
                byUnit[r.unitId] = { total: 0, correct: 0 };
            }
            byUnit[r.unitId].total++;
            if (r.isCorrect) byUnit[r.unitId].correct++;
        });
        
        return {
            date: new Date().toISOString(),
            total,
            correct,
            wrong,
            accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
            avgResponseTime: Math.round(avgResponseTime),
            byUnit,
            suggestions: this.getImprovementSuggestions(results)
        };
    },
    
    /**
     * 获取改进建议
     * @param {array} results - 复习结果
     * @returns {array} 建议列表
     */
    getImprovementSuggestions(results) {
        const suggestions = [];
        
        // 分析错误类型
        const wrongResults = results.filter(r => !r.isCorrect);
        
        if (wrongResults.length > 0) {
            suggestions.push('建议多听几遍这些单词的正确发音');
        }
        
        // 分析响应时间
        const slowResults = results.filter(r => r.responseTime > 3000);
        if (slowResults.length > results.length * 0.3) {
            suggestions.push('试着加快反应速度，看到单词就能想起意思');
        }
        
        // 总体建议
        const accuracy = results.filter(r => r.isCorrect).length / results.length;
        if (accuracy >= 0.9) {
            suggestions.push('太棒了！继续保持，你学得很好！');
        } else if (accuracy >= 0.7) {
            suggestions.push('做得不错，但还有进步空间');
        } else {
            suggestions.push('别灰心，多练习几次就会越来越好');
        }
        
        return suggestions;
    }
};

// 简化调用接口
const Memory = {
    scheduleReview: (wordKey, wordData) => MemoryModule.scheduleReview(wordKey, wordData),
    processAnswer: (task, isCorrect, responseTime) => MemoryModule.processAnswer(task, isCorrect, responseTime),
    getTodayReviewTasks: (limit) => MemoryModule.getTodayReviewTasks(limit),
    getReviewStats: () => MemoryModule.getReviewStats(),
    getReviewCount: () => MemoryModule.getReviewCount(),
    getStatusDescription: (task) => MemoryModule.getStatusDescription(task),
    getTimeUntilReview: (nextReview) => MemoryModule.getTimeUntilReview(nextReview),
    isDueForReview: (nextReview) => MemoryModule.isDueForReview(nextReview),
    getSuggestion: (quality) => MemoryModule.getSuggestion(quality),
    generateReviewReport: (results) => MemoryModule.generateReviewReport(results)
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MemoryModule, Memory };
}
