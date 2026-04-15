/**
 * 本地存储模块
 * 使用 LocalStorage 存储学习数据
 */

const StorageModule = {
    // 存储键前缀
    PREFIX: 'englearn_',
    
    // 存储键名
    KEYS: {
        VOCABULARY_PROGRESS: 'vocabulary_progress',      // 单词学习进度
        REVIEW_SCHEDULE: 'review_schedule',              // 复习计划
        LEARNING_HISTORY: 'learning_history',           // 学习历史
        USER_SETTINGS: 'user_settings',                 // 用户设置
        FAVOURITES: 'favourites',                       // 收藏的单词
        STATISTICS: 'statistics',                       // 学习统计
        UNIT_PROGRESS: 'unit_progress'                  // 单元进度
    },
    
    // 初始化
    init() {
        // 确保数据结构存在
        this.ensureDataStructure();
    },
    
    // 确保数据结构存在
    ensureDataStructure() {
        if (!localStorage.getItem(this.PREFIX + this.KEYS.VOCABULARY_PROGRESS)) {
            localStorage.setItem(this.PREFIX + this.KEYS.VOCABULARY_PROGRESS, JSON.stringify({}));
        }
        if (!localStorage.getItem(this.PREFIX + this.KEYS.REVIEW_SCHEDULE)) {
            localStorage.setItem(this.PREFIX + this.KEYS.REVIEW_SCHEDULE, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.PREFIX + this.KEYS.LEARNING_HISTORY)) {
            localStorage.setItem(this.PREFIX + this.KEYS.LEARNING_HISTORY, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.PREFIX + this.KEYS.USER_SETTINGS)) {
            localStorage.setItem(this.PREFIX + this.KEYS.USER_SETTINGS, JSON.stringify(this.getDefaultSettings()));
        }
        if (!localStorage.getItem(this.PREFIX + this.KEYS.STATISTICS)) {
            localStorage.setItem(this.PREFIX + this.KEYS.STATISTICS, JSON.stringify(this.getDefaultStatistics()));
        }
        if (!localStorage.getItem(this.PREFIX + this.KEYS.UNIT_PROGRESS)) {
            localStorage.setItem(this.PREFIX + this.KEYS.UNIT_PROGRESS, JSON.stringify({}));
        }
    },
    
    // 获取默认设置
    getDefaultSettings() {
        return {
            ttsRate: 0.85,
            theme: 'light',
            showPhonetic: true,
            autoPlay: true,
            dailyGoal: 10,           // 每日学习目标（单词数）
            reminderTime: '20:00'    // 每日提醒时间
        };
    },
    
    // 获取默认统计
    getDefaultStatistics() {
        return {
            totalWordsLearned: 0,
            totalReviewsDone: 0,
            streakDays: 0,
            lastStudyDate: null,
            wordsPerDay: {},
            accuracyHistory: []
        };
    },
    
    // ==================== 通用方法 ====================
    
    // 保存数据
    save(key, data) {
        try {
            localStorage.setItem(this.PREFIX + key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('保存数据失败:', e);
            return false;
        }
    },
    
    // 读取数据
    get(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(this.PREFIX + key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('读取数据失败:', e);
            return defaultValue;
        }
    },
    
    // 删除数据
    remove(key) {
        localStorage.removeItem(this.PREFIX + key);
    },
    
    // 保存设置
    saveSetting(key, value) {
        const settings = this.get(this.KEYS.USER_SETTINGS, this.getDefaultSettings());
        settings[key] = value;
        return this.save(this.KEYS.USER_SETTINGS, settings);
    },
    
    // 获取设置
    getSetting(key, defaultValue = null) {
        const settings = this.get(this.KEYS.USER_SETTINGS, this.getDefaultSettings());
        return settings.hasOwnProperty(key) ? settings[key] : defaultValue;
    },
    
    // ==================== 单词进度 ====================
    
    // 获取单词进度
    getWordProgress(wordKey) {
        const progress = this.get(this.KEYS.VOCABULARY_PROGRESS, {});
        return progress[wordKey] || null;
    },
    
    // 保存单词进度
    saveWordProgress(wordKey, progressData) {
        const progress = this.get(this.KEYS.VOCABULARY_PROGRESS, {});
        progress[wordKey] = {
            ...progressData,
            lastUpdated: new Date().toISOString()
        };
        return this.save(this.KEYS.VOCABULARY_PROGRESS, progress);
    },
    
    // 获取所有单词进度
    getAllWordProgress() {
        return this.get(this.KEYS.VOCABULARY_PROGRESS, {});
    },
    
    // 获取单元的单词进度
    getUnitWordProgress(unitId) {
        const allProgress = this.getAllWordProgress();
        const unitProgress = {};
        for (const key in allProgress) {
            if (key.startsWith(unitId + '_')) {
                unitProgress[key] = allProgress[key];
            }
        }
        return unitProgress;
    },
    
    // 获取单元学习完成度
    getUnitCompletion(unitId, totalWords) {
        const unitProgress = this.getUnitWordProgress(unitId);
        const learnedCount = Object.keys(unitProgress).filter(key => 
            unitProgress[key].status === 'learned' || unitProgress[key].status === 'mastered'
        ).length;
        return totalWords > 0 ? Math.round((learnedCount / totalWords) * 100) : 0;
    },
    
    // ==================== 复习计划 ====================
    
    // 获取复习计划
    getReviewSchedule() {
        return this.get(this.KEYS.REVIEW_SCHEDULE, []);
    },
    
    // 添加复习任务
    addReviewTask(task) {
        const schedule = this.getReviewSchedule();
        schedule.push({
            ...task,
            id: Date.now().toString(),
            createdAt: new Date().toISOString()
        });
        return this.save(this.KEYS.REVIEW_SCHEDULE, schedule);
    },
    
    // 更新复习任务
    updateReviewTask(taskId, updates) {
        const schedule = this.getReviewSchedule();
        const index = schedule.findIndex(t => t.id === taskId);
        if (index !== -1) {
            schedule[index] = { ...schedule[index], ...updates };
            return this.save(this.KEYS.REVIEW_SCHEDULE, schedule);
        }
        return false;
    },
    
    // 删除复习任务
    removeReviewTask(taskId) {
        const schedule = this.getReviewSchedule();
        const filtered = schedule.filter(t => t.id !== taskId);
        return this.save(this.KEYS.REVIEW_SCHEDULE, filtered);
    },
    
    // 获取今日需要复习的单词
    getTodayReviews() {
        const schedule = this.getReviewSchedule();
        const today = new Date().toDateString();
        
        return schedule.filter(task => {
            const reviewDate = new Date(task.nextReview).toDateString();
            return reviewDate <= today;
        });
    },
    
    // 获取需要复习的单词数量
    getReviewCount() {
        return this.getTodayReviews().length;
    },
    
    // ==================== 学习历史 ====================
    
    // 添加学习记录
    addLearningRecord(record) {
        const history = this.get(this.KEYS.LEARNING_HISTORY, []);
        history.push({
            ...record,
            id: Date.now().toString(),
            timestamp: new Date().toISOString()
        });
        // 只保留最近100条记录
        if (history.length > 100) {
            history.shift();
        }
        return this.save(this.KEYS.LEARNING_HISTORY, history);
    },
    
    // 获取学习历史
    getLearningHistory(limit = 20) {
        const history = this.get(this.KEYS.LEARNING_HISTORY, []);
        return history.slice(-limit).reverse();
    },
    
    // 获取指定日期的学习记录
    getHistoryByDate(date) {
        const history = this.get(this.KEYS.LEARNING_HISTORY, []);
        const targetDate = new Date(date).toDateString();
        return history.filter(record => 
            new Date(record.timestamp).toDateString() === targetDate
        );
    },
    
    // ==================== 收藏 ====================
    
    // 获取收藏列表
    getFavourites() {
        return this.get(this.KEYS.FAVOURITES, []);
    },
    
    // 添加收藏
    addFavourite(wordKey, wordData) {
        const favourites = this.getFavourites();
        if (!favourites.find(f => f.wordKey === wordKey)) {
            favourites.push({
                wordKey,
                ...wordData,
                addedAt: new Date().toISOString()
            });
            return this.save(this.KEYS.FAVOURITES, favourites);
        }
        return false;
    },
    
    // 取消收藏
    removeFavourite(wordKey) {
        const favourites = this.getFavourites();
        const filtered = favourites.filter(f => f.wordKey !== wordKey);
        return this.save(this.KEYS.FAVOURITES, filtered);
    },
    
    // 检查是否已收藏
    isFavourite(wordKey) {
        const favourites = this.getFavourites();
        return favourites.some(f => f.wordKey === wordKey);
    },
    
    // ==================== 统计 ====================
    
    // 获取统计信息
    getStatistics() {
        return this.get(this.KEYS.STATISTICS, this.getDefaultStatistics());
    },
    
    // 更新统计
    updateStatistics(updates) {
        const stats = this.getStatistics();
        return this.save(this.KEYS.STATISTICS, { ...stats, ...updates });
    },
    
    // 增加学习单词数
    incrementWordsLearned(count = 1) {
        const stats = this.getStatistics();
        stats.totalWordsLearned += count;
        
        // 记录每日学习数量
        const today = new Date().toDateString();
        stats.wordsPerDay[today] = (stats.wordsPerDay[today] || 0) + count;
        
        // 检查连续学习天数
        this.updateStreak();
        
        return this.save(this.KEYS.STATISTICS, stats);
    },
    
    // 增加复习次数
    incrementReviewsDone(count = 1) {
        const stats = this.getStatistics();
        stats.totalReviewsDone += count;
        return this.save(this.KEYS.STATISTICS, stats);
    },
    
    // 更新连续学习天数
    updateStreak() {
        const stats = this.getStatistics();
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (stats.lastStudyDate) {
            const lastDate = new Date(stats.lastStudyDate);
            if (lastDate.toDateString() === today.toDateString()) {
                // 今天已经学习，不更新
            } else if (lastDate.toDateString() === yesterday.toDateString()) {
                // 昨天学习了，连续天数+1
                stats.streakDays += 1;
            } else {
                // 中断了，重置为1
                stats.streakDays = 1;
            }
        } else {
            stats.streakDays = 1;
        }
        
        stats.lastStudyDate = today.toISOString();
        return this.save(this.KEYS.STATISTICS, stats);
    },
    
    // 获取连续学习天数
    getStreakDays() {
        const stats = this.getStatistics();
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (stats.lastStudyDate) {
            const lastDate = new Date(stats.lastStudyDate);
            if (lastDate.toDateString() !== today.toDateString() && 
                lastDate.toDateString() !== yesterday.toDateString()) {
                // 已中断，返回0
                return 0;
            }
        }
        
        return stats.streakDays || 0;
    },
    
    // 获取今日学习单词数
    getTodayWordsLearned() {
        const stats = this.getStatistics();
        const today = new Date().toDateString();
        return stats.wordsPerDay[today] || 0;
    },
    
    // ==================== 单元进度 ====================
    
    // 获取单元进度
    getUnitProgress(unitId) {
        const allProgress = this.get(this.KEYS.UNIT_PROGRESS, {});
        return allProgress[unitId] || {
            wordsLearned: 0,
            sentencesLearned: 0,
            dialoguesLearned: 0,
            exercisesDone: 0,
            completed: false
        };
    },
    
    // 更新单元进度
    updateUnitProgress(unitId, updates) {
        const allProgress = this.get(this.KEYS.UNIT_PROGRESS, {});
        allProgress[unitId] = {
            ...allProgress[unitId],
            ...updates,
            lastUpdated: new Date().toISOString()
        };
        return this.save(this.KEYS.UNIT_PROGRESS, allProgress);
    },
    
    // 标记单元为已完成
    completeUnit(unitId) {
        return this.updateUnitProgress(unitId, { completed: true, completedAt: new Date().toISOString() });
    },
    
    // 获取已完成的单元列表
    getCompletedUnits() {
        const allProgress = this.get(this.KEYS.UNIT_PROGRESS, {});
        return Object.keys(allProgress).filter(unitId => allProgress[unitId].completed);
    },
    
    // ==================== 数据管理 ====================
    
    // 清除所有学习数据
    clearAllData() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(this.PREFIX + key);
        });
        this.ensureDataStructure();
    },
    
    // 导出数据
    exportData() {
        const data = {};
        Object.keys(this.KEYS).forEach(key => {
            data[key] = this.get(this.KEYS[key]);
        });
        return data;
    },
    
    // 导入数据
    importData(data) {
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                if (this.KEYS.hasOwnProperty(key)) {
                    this.save(this.KEYS[key], data[key]);
                }
            });
            return true;
        }
        return false;
    }
};

// 简化调用接口
const Storage = {
    save: (key, data) => StorageModule.save(key, data),
    get: (key, defaultValue) => StorageModule.get(key, defaultValue),
    saveSetting: (key, value) => StorageModule.saveSetting(key, value),
    getSetting: (key, defaultValue) => StorageModule.getSetting(key, defaultValue),
    getWordProgress: (wordKey) => StorageModule.getWordProgress(wordKey),
    saveWordProgress: (wordKey, data) => StorageModule.saveWordProgress(wordKey, data),
    getReviewSchedule: () => StorageModule.getReviewSchedule(),
    addReviewTask: (task) => StorageModule.addReviewTask(task),
    getTodayReviews: () => StorageModule.getTodayReviews(),
    addLearningRecord: (record) => StorageModule.addLearningRecord(record),
    getStatistics: () => StorageModule.getStatistics(),
    getStreakDays: () => StorageModule.getStreakDays(),
    getTodayWordsLearned: () => StorageModule.getTodayWordsLearned(),
    init: () => StorageModule.init()
};

// 初始化存储模块
StorageModule.init();

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StorageModule, Storage };
}
