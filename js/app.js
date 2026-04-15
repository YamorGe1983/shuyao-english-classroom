/**
 * 英语学习应用 - 主逻辑
 * 小学三年级牛津英语下册学习工具
 */

// 应用状态
const AppState = {
    currentModule: null,
    currentUnit: null,
    currentView: 'home',       // home, modules, unit, vocabulary, sentences, dialogue, review, settings
    learningMode: null,         // vocabulary, sentences, dialogue, review
    currentCardIndex: 0,
    currentCards: [],
    reviewResults: [],
    isReviewMode: false,
    sessionStartTime: null,
    cardStartTime: null
};

// 应用实例
const App = {
    // DOM 元素缓存
    elements: {},
    
    // 初始化应用
    async init() {
        console.log('🚀 初始化英语学习应用...');
        
        try {
            // 初始化存储
            StorageModule.init();
            console.log('✓ 存储模块初始化完成');
            
            // 加载用户设置
            TTSModule.loadSettings();
            console.log('✓ TTS设置加载完成');
            
            // 初始化 TTS（设置超时，避免卡住）
            const ttsPromise = TTSModule.init();
            const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(false), 2000));
            const ttsResult = await Promise.race([ttsPromise, timeoutPromise]);
            console.log('✓ TTS初始化完成:', ttsResult);
            
            // 缓存 DOM 元素
            this.cacheElements();
            console.log('✓ DOM元素缓存完成');
            
            // 绑定事件
            this.bindEvents();
            console.log('✓ 事件绑定完成');
            
            // 渲染首页
            this.renderHome();
            console.log('✓ 首页渲染完成');
            
            // 检查是否有待复习单词
            this.checkReviewReminder();
            
            console.log('✅ 应用初始化完成');
        } catch (error) {
            console.error('❌ 应用初始化失败:', error);
            // 即使出错也尝试渲染首页
            this.cacheElements();
            this.renderHome();
            this.showToast('应用加载完成（部分功能可能受限）');
        }
    },
    
    // 缓存 DOM 元素
    cacheElements() {
        this.elements = {
            app: document.getElementById('app'),
            nav: document.getElementById('nav'),
            content: document.getElementById('content'),
            modal: document.getElementById('modal'),
            toast: document.getElementById('toast')
        };
    },
    
    // 绑定事件
    bindEvents() {
        // 底部导航
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.navigateTo(view);
            });
        });
        
        // 模态框关闭
        document.getElementById('modal-close')?.addEventListener('click', () => {
            this.closeModal();
        });
        
        // 点击模态框背景关闭
        document.getElementById('modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                this.closeModal();
            }
        });
    },
    
    // 导航到指定视图
    navigateTo(view, params = {}) {
        // 更新状态
        AppState.currentView = view;
        
        // 更新导航高亮
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.view === view);
        });
        
        // 渲染对应视图
        switch (view) {
            case 'home':
                this.renderHome();
                break;
            case 'review':
                this.renderReview();
                break;
            case 'progress':
                this.renderProgress();
                break;
            case 'settings':
                this.renderSettings();
                break;
            default:
                this.renderHome();
        }
    },
    
    // ==================== 渲染函数 ====================
    
    // 渲染首页
    renderHome() {
        const stats = StorageModule.getStatistics();
        const reviewStats = MemoryModule.getReviewStats();
        const todayWords = StorageModule.getTodayWordsLearned();
        const streakDays = StorageModule.getStreakDays();
        const reviewCount = MemoryModule.getReviewCount();
        
        // 计算考试倒计时
        const now = new Date();
        const midExam = new Date(now.getFullYear(), 3, 30); // 4月30日
        const finalExam = new Date(now.getFullYear(), 5, 15); // 6月15日
        const summerVacation = new Date(now.getFullYear(), 6, 1); // 7月1日
        
        const daysToMid = Math.max(0, Math.ceil((midExam - now) / (1000 * 60 * 60 * 24)));
        const daysToFinal = Math.max(0, Math.ceil((finalExam - now) / (1000 * 60 * 60 * 24)));
        const daysToSummer = Math.max(0, Math.ceil((summerVacation - now) / (1000 * 60 * 60 * 24)));
        
        // 计算本周进度（假设每天学3个新词）
        const dailyGoal = 3;
        const weekGoal = dailyGoal * 7;
        
        const html = `
            <div class="home-page">
                <!-- 欢迎区域 -->
                <div class="welcome-card">
                    <div class="welcome-icon">👧</div>
                    <h1>欢迎来到葛舒窈的小课堂</h1>
                    <p class="welcome-subtitle">今天也要加油学习哦！</p>
                    
                    <div class="stats-row">
                        <div class="stat-item">
                            <span class="stat-number">${streakDays}</span>
                            <span class="stat-label">连续学习</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${todayWords}</span>
                            <span class="stat-label">今日单词</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${stats.totalWordsLearned || 0}</span>
                            <span class="stat-label">已学单词</span>
                        </div>
                    </div>
                </div>
                
                <!-- 学习日历 -->
                <div class="calendar-card">
                    <div class="section-title">
                        <span>📅</span> 学习日历
                    </div>
                    <div class="calendar-items">
                        <div class="calendar-item">
                            <span class="calendar-label">期中考试</span>
                            <span class="calendar-days ${daysToMid <= 7 ? 'urgent' : ''}">${daysToMid}天</span>
                        </div>
                        <div class="calendar-item">
                            <span class="calendar-label">期末考试</span>
                            <span class="calendar-days">${daysToFinal}天</span>
                        </div>
                        <div class="calendar-item">
                            <span class="calendar-label">暑假</span>
                            <span class="calendar-days summer">${daysToSummer}天</span>
                        </div>
                    </div>
                </div>
                
                <!-- 今日磨耳朵 -->
                <div class="morning-listen-card" onclick="App.showMorningListenSetup()">
                    <div class="morning-icon">🌅</div>
                    <div class="morning-content">
                        <strong>今日磨耳朵</strong>
                        <p>早餐时间，听力磨耳朵</p>
                    </div>
                    <div class="morning-arrow">▶️</div>
                </div>
                
                <!-- 复习提醒 -->
                ${reviewCount > 0 ? `
                    <div class="review-reminder" onclick="App.navigateTo('review')">
                        <div class="reminder-icon">🔔</div>
                        <div class="reminder-content">
                            <strong>今日复习</strong>
                            <p>你有 ${reviewCount} 个单词需要复习</p>
                        </div>
                        <div class="reminder-arrow">→</div>
                    </div>
                ` : ''}
                
                <!-- 学习模块 -->
                <div class="section-title">
                    <span>📖</span> 选择学习内容
                </div>
                
                <div class="modules-grid">
                    ${TEXTBOOK_DATA.modules.map(mod => `
                        <div class="module-card" onclick="App.renderModuleDetail('${mod.id}')">
                            <div class="module-icon">${this.getModuleIcon(mod.id)}</div>
                            <h3>${mod.name}</h3>
                            <p class="module-name-cn">${mod.nameCN}</p>
                            <span class="module-units">${mod.units.length}个单元</span>
                        </div>
                    `).join('')}
                </div>
                
                <!-- 快速开始 -->
                <div class="section-title">
                    <span>⚡</span> 快速开始
                </div>
                
                <div class="quick-actions">
                    <button class="quick-btn primary" onclick="App.startVocabularyReview()">
                        <span class="quick-icon">📝</span>
                        <span>复习单词</span>
                    </button>
                    <button class="quick-btn secondary" onclick="App.startRandomReview()">
                        <span class="quick-icon">🎲</span>
                        <span>随机练习</span>
                    </button>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 渲染模块详情
    renderModuleDetail(moduleId) {
        const module = TEXTBOOK_DATA.modules.find(m => m.id === moduleId);
        if (!module) return;
        
        const completedUnits = StorageModule.getCompletedUnits();
        
        const html = `
            <div class="module-detail-page">
                <button class="back-btn" onclick="App.renderHome()">
                    ← 返回首页
                </button>
                
                <div class="page-header">
                    <h1>${module.name}</h1>
                    <p class="page-subtitle">${module.nameCN}</p>
                </div>
                
                <div class="units-list">
                    ${module.units.map(unit => {
                        const unitData = TEXTBOOK_DATA.units[unit.id];
                        const wordCount = unitData?.vocabulary?.length || 0;
                        const isCompleted = completedUnits.includes(unit.id);
                        const completion = StorageModule.getUnitCompletion(unit.id, wordCount);
                        
                        return `
                            <div class="unit-card">
                                <div class="unit-header" onclick="App.renderUnitDetail('${unit.id}')">
                                    <div class="unit-info">
                                        <span class="unit-number">${unit.id.replace('unit', 'U')}</span>
                                        <div class="unit-text">
                                            <h3>${unit.name}</h3>
                                            <p>${unit.nameCN}</p>
                                        </div>
                                    </div>
                                    <div class="unit-arrow">→</div>
                                </div>
                                
                                <div class="unit-progress-bar">
                                    <div class="progress-fill" style="width: ${completion}%"></div>
                                </div>
                                <div class="unit-progress-text">${completion}% 完成</div>
                                
                                <div class="unit-actions">
                                    <button class="unit-action-btn" onclick="App.startUnitVocabulary('${unit.id}')">
                                        📚 单词
                                    </button>
                                    <button class="unit-action-btn" onclick="App.startUnitSentences('${unit.id}')">
                                        💬 句子
                                    </button>
                                    <button class="unit-action-btn" onclick="App.startUnitExercises('${unit.id}')">
                                        ✏️ 练习
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 渲染单元详情
    renderUnitDetail(unitId) {
        const unit = TEXTBOOK_DATA.units[unitId];
        if (!unit) return;
        
        const module = TEXTBOOK_DATA.modules.find(m => m.id === unit.module);
        
        const html = `
            <div class="unit-detail-page">
                <button class="back-btn" onclick="App.renderModuleDetail('${unit.module}')">
                    ← 返回${module?.nameCN || '模块'}
                </button>
                
                <div class="page-header">
                    <h1>Unit ${unitId.replace('unit', '')}: ${unit.name}</h1>
                    <p class="page-subtitle">${unit.nameCN}</p>
                    <p class="unit-topic">${unit.topic}</p>
                </div>
                
                <!-- 学习选项 -->
                <div class="learning-options">
                    <!-- 单词学习 -->
                    <div class="learning-option-card" onclick="App.startUnitVocabulary('${unitId}')">
                        <div class="option-icon">📚</div>
                        <div class="option-content">
                            <h3>单词学习</h3>
                            <p>学习 ${unit.vocabulary?.length || 0} 个单词</p>
                        </div>
                        <div class="option-arrow">→</div>
                    </div>
                    
                    <!-- 句子学习 -->
                    <div class="learning-option-card" onclick="App.startUnitSentences('${unitId}')">
                        <div class="option-icon">💬</div>
                        <div class="option-content">
                            <h3>句子学习</h3>
                            <p>学习 ${unit.sentences?.length || 0} 个句子</p>
                        </div>
                        <div class="option-arrow">→</div>
                    </div>
                    
                    <!-- 对话练习 -->
                    <div class="learning-option-card" onclick="App.startUnitDialogue('${unitId}')">
                        <div class="option-icon">🎭</div>
                        <div class="option-content">
                            <h3>对话练习</h3>
                            <p>${unit.dialogues?.length || 0} 个情景对话</p>
                        </div>
                        <div class="option-arrow">→</div>
                    </div>
                    
                    <!-- 跟读练习 -->
                    <div class="learning-option-card" onclick="App.startUnitExercises('${unitId}')">
                        <div class="option-icon">🎤</div>
                        <div class="option-content">
                            <h3>跟读练习</h3>
                            <p>${unit.exercises?.length || 0} 道练习题</p>
                        </div>
                        <div class="option-arrow">→</div>
                    </div>
                </div>
                
                <!-- 单元词汇预览 -->
                <div class="vocab-preview">
                    <h3>📝 词汇预览</h3>
                    <div class="vocab-tags">
                        ${(unit.vocabulary || []).slice(0, 8).map(v => `
                            <span class="vocab-tag">${v.word}</span>
                        `).join('')}
                        ${(unit.vocabulary?.length || 0) > 8 ? `<span class="vocab-tag more">+${unit.vocabulary.length - 8}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // ==================== 学习功能 ====================
    
    // 开始单元单词学习
    startUnitVocabulary(unitId) {
        const unit = TEXTBOOK_DATA.units[unitId];
        if (!unit || !unit.vocabulary) return;
        
        AppState.currentUnit = unitId;
        AppState.learningMode = 'vocabulary';
        AppState.currentCards = unit.vocabulary.map((v, i) => ({
            ...v,
            index: i,
            unitId: unitId,
            moduleId: unit.module
        }));
        AppState.currentCardIndex = 0;
        AppState.sessionStartTime = Date.now();
        
        this.renderVocabularyCard();
    },
    
    // 渲染单词卡片
    renderVocabularyCard() {
        const card = AppState.currentCards[AppState.currentCardIndex];
        if (!card) {
            this.showLearningComplete();
            return;
        }
        
        const total = AppState.currentCards.length;
        const progress = Math.round((AppState.currentCardIndex / total) * 100);
        const wordKey = `${card.unitId}_${card.word}`;
        const isFavourite = StorageModule.isFavourite(wordKey);
        const wordProgress = StorageModule.getWordProgress(wordKey);
        
        const html = `
            <div class="vocabulary-page">
                <div class="learning-header">
                    <button class="back-btn" onclick="App.confirmExit()">← 退出</button>
                    <div class="learning-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${AppState.currentCardIndex + 1} / ${total}</span>
                    </div>
                    <button class="fav-btn ${isFavourite ? 'active' : ''}" onclick="App.toggleFavourite('${wordKey}', ${JSON.stringify(card).replace(/"/g, '&quot;')})">
                        ${isFavourite ? '❤️' : '🤍'}
                    </button>
                </div>
                
                <div class="word-card" id="word-card">
                    <div class="word-main">
                        <h1 class="word-text">${card.word}</h1>
                        <p class="word-phonetic">${card.phonetic || ''}</p>
                        <p class="word-chinese">${card.chinese}</p>
                    </div>
                    
                    <button class="speak-btn" onclick="App.speakWord('${card.word}')">
                        🔊 点击发音
                    </button>
                </div>
                
                <div class="card-actions">
                    <button class="action-btn secondary" onclick="App.previousCard()">
                        ← 上一个
                    </button>
                    <button class="action-btn primary" onclick="App.nextCard()">
                        下一个 →
                    </button>
                </div>
                
                <div class="card-info">
                    ${wordProgress ? `
                        <span class="status-tag ${wordProgress.status}">${MemoryModule.getStatusDescription(wordProgress)}</span>
                    ` : '<span class="status-tag new">新单词</span>'}
                </div>
            </div>
        `;
        
        this.setContent(html);
        
        // 自动发音
        setTimeout(() => {
            TTS.speakWord(card.word);
        }, 500);
    },
    
    // 发音
    speakWord(word) {
        TTS.speakWord(word);
    },
    
    // 发音整个句子
    speakSentence(sentence) {
        TTS.speakSentence(sentence);
    },
    
    // 下一个单词
    nextCard() {
        // 记录学习
        const card = AppState.currentCards[AppState.currentCardIndex];
        StorageModule.addLearningRecord({
            type: 'vocabulary',
            word: card.word,
            unitId: card.unitId,
            moduleId: card.moduleId
        });
        
        // 安排复习
        const wordKey = `${card.unitId}_${card.word}`;
        if (!StorageModule.getWordProgress(wordKey)) {
            MemoryModule.scheduleReview(wordKey, {
                word: card.word,
                chinese: card.chinese,
                unitId: card.unitId,
                moduleId: card.moduleId
            });
        }
        
        StorageModule.incrementWordsLearned();
        
        AppState.currentCardIndex++;
        
        if (AppState.currentCardIndex >= AppState.currentCards.length) {
            this.showLearningComplete();
        } else {
            this.renderVocabularyCard();
        }
    },
    
    // 上一个单词
    previousCard() {
        if (AppState.currentCardIndex > 0) {
            AppState.currentCardIndex--;
            this.renderVocabularyCard();
        }
    },
    
    // 切换收藏
    toggleFavourite(wordKey, wordData) {
        if (StorageModule.isFavourite(wordKey)) {
            StorageModule.removeFavourite(wordKey);
            this.showToast('已取消收藏');
        } else {
            StorageModule.addFavourite(wordKey, wordData);
            this.showToast('已添加到收藏');
        }
        this.renderVocabularyCard();
    },
    
    // 显示学习完成
    showLearningComplete() {
        const unit = TEXTBOOK_DATA.units[AppState.currentUnit];
        const sessionTime = Math.round((Date.now() - AppState.sessionStartTime) / 1000 / 60);
        
        const html = `
            <div class="complete-page">
                <div class="complete-icon">🎉</div>
                <h1>太棒了！</h1>
                <p class="complete-message">你已经完成了 ${unit?.name || '本次'} 学习</p>
                
                <div class="complete-stats">
                    <div class="complete-stat">
                        <span class="stat-num">${AppState.currentCards.length}</span>
                        <span class="stat-label">学习单词</span>
                    </div>
                    <div class="complete-stat">
                        <span class="stat-num">${sessionTime || '<1'}</span>
                        <span class="stat-label">分钟</span>
                    </div>
                </div>
                
                <div class="complete-actions">
                    <button class="action-btn primary" onclick="App.renderUnitDetail('${AppState.currentUnit}')">
                        返回单元
                    </button>
                    <button class="action-btn secondary" onclick="App.startUnitVocabulary('${AppState.currentUnit}')">
                        再学一遍
                    </button>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 确认退出
    confirmExit() {
        this.showModal('确认退出', '你确定要退出学习吗？进度不会丢失。', [
            { text: '取消', type: 'secondary', onClick: () => this.closeModal() },
            { text: '确定', type: 'primary', onClick: () => {
                this.closeModal();
                this.renderUnitDetail(AppState.currentUnit);
            }}
        ]);
    },
    
    // ==================== 句子学习 ====================
    
    // 开始单元句子学习
    startUnitSentences(unitId) {
        const unit = TEXTBOOK_DATA.units[unitId];
        if (!unit || !unit.sentences) return;
        
        AppState.currentUnit = unitId;
        AppState.learningMode = 'sentences';
        AppState.currentCards = unit.sentences.map((s, i) => ({
            ...s,
            index: i,
            unitId: unitId
        }));
        AppState.currentCardIndex = 0;
        AppState.sessionStartTime = Date.now();
        
        this.renderSentenceCard();
    },
    
    // 渲染句子卡片
    renderSentenceCard() {
        const card = AppState.currentCards[AppState.currentCardIndex];
        if (!card) {
            this.showSentenceComplete();
            return;
        }
        
        const total = AppState.currentCards.length;
        const progress = Math.round((AppState.currentCardIndex / total) * 100);
        
        const html = `
            <div class="sentence-page">
                <div class="learning-header">
                    <button class="back-btn" onclick="App.confirmSentenceExit()">← 退出</button>
                    <div class="learning-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${AppState.currentCardIndex + 1} / ${total}</span>
                    </div>
                </div>
                
                <div class="sentence-card" id="sentence-card">
                    <div class="sentence-content">
                        <h2 class="sentence-english">${card.english}</h2>
                        <p class="sentence-chinese">${card.chinese}</p>
                    </div>
                    
                    <div class="sentence-actions">
                        <button class="speak-btn large" onclick="App.speakSentence('${card.english.replace(/'/g, "\\'")}')">
                            🔊 听发音
                        </button>
                        <button class="speak-btn outline" onclick="App.repeatSentence()">
                            🔄 跟读模仿
                        </button>
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="action-btn secondary" onclick="App.previousSentence()">
                        ← 上一个
                    </button>
                    <button class="action-btn primary" onclick="App.nextSentence()">
                        下一个 →
                    </button>
                </div>
            </div>
        `;
        
        this.setContent(html);
        
        // 自动发音
        setTimeout(() => {
            TTS.speakSentence(card.english);
        }, 500);
    },
    
    // 重复句子（用于跟读）
    repeatSentence() {
        const card = AppState.currentCards[AppState.currentCardIndex];
        TTS.speakSentence(card.english);
    },
    
    // 下一个句子
    nextSentence() {
        StorageModule.addLearningRecord({
            type: 'sentence',
            sentence: AppState.currentCards[AppState.currentCardIndex].english,
            unitId: AppState.currentUnit
        });
        
        AppState.currentCardIndex++;
        
        if (AppState.currentCardIndex >= AppState.currentCards.length) {
            this.showSentenceComplete();
        } else {
            this.renderSentenceCard();
        }
    },
    
    // 上一个句子
    previousSentence() {
        if (AppState.currentCardIndex > 0) {
            AppState.currentCardIndex--;
            this.renderSentenceCard();
        }
    },
    
    // 确认退出句子学习
    confirmSentenceExit() {
        this.showModal('确认退出', '你确定要退出句子学习吗？', [
            { text: '取消', type: 'secondary', onClick: () => this.closeModal() },
            { text: '确定', type: 'primary', onClick: () => {
                this.closeModal();
                this.renderUnitDetail(AppState.currentUnit);
            }}
        ]);
    },
    
    // 显示句子学习完成
    showSentenceComplete() {
        const html = `
            <div class="complete-page">
                <div class="complete-icon">👏</div>
                <h1>句子学完啦！</h1>
                <p class="complete-message">继续保持，多说多练！</p>
                
                <div class="complete-actions">
                    <button class="action-btn primary" onclick="App.renderUnitDetail('${AppState.currentUnit}')">
                        返回单元
                    </button>
                    <button class="action-btn secondary" onclick="App.startUnitSentences('${AppState.currentUnit}')">
                        再学一遍
                    </button>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // ==================== 对话学习 ====================
    
    // 开始单元对话学习
    startUnitDialogue(unitId) {
        const unit = TEXTBOOK_DATA.units[unitId];
        if (!unit || !unit.dialogues) return;
        
        const dialogue = unit.dialogues[0];
        if (!dialogue) return;
        
        AppState.currentUnit = unitId;
        AppState.learningMode = 'dialogue';
        AppState.currentDialogue = dialogue;
        AppState.currentLineIndex = 0;
        
        this.renderDialogue();
    },
    
    // 渲染对话
    renderDialogue() {
        const dialogue = AppState.currentDialogue;
        const lines = dialogue.lines;
        
        const html = `
            <div class="dialogue-page">
                <div class="learning-header">
                    <button class="back-btn" onclick="App.renderUnitDetail('${AppState.currentUnit}')">← 返回</button>
                </div>
                
                <div class="dialogue-header">
                    <h2>${dialogue.title}</h2>
                </div>
                
                <div class="dialogue-content">
                    ${lines.map((line, i) => `
                        <div class="dialogue-line ${i === AppState.currentLineIndex ? 'current' : ''} ${i < AppState.currentLineIndex ? 'done' : ''}">
                            <span class="speaker">${line.speaker}:</span>
                            <p class="line-text">${line.text}</p>
                            <p class="line-chinese">${line.text}</p>
                            <button class="line-speak-btn" onclick="App.speakLine(${i})">🔊</button>
                        </div>
                    `).join('')}
                </div>
                
                <div class="dialogue-controls">
                    ${AppState.currentLineIndex > 0 ? `
                        <button class="action-btn secondary" onclick="App.previousLine()">← 上句</button>
                    ` : ''}
                    
                    ${AppState.currentLineIndex < lines.length - 1 ? `
                        <button class="action-btn primary" onclick="App.playAndNextLine()">
                            🔊 听 → 下句
                        </button>
                    ` : `
                        <button class="action-btn primary" onclick="App.finishDialogue()">
                            完成 ✓
                        </button>
                    `}
                </div>
            </div>
        `;
        
        this.setContent(html);
        
        // 自动发音当前行
        if (AppState.currentLineIndex === 0) {
            setTimeout(() => {
                this.speakLine(0);
            }, 500);
        }
    },
    
    // 发音指定行
    speakLine(index) {
        const line = AppState.currentDialogue.lines[index];
        TTS.speakSentence(line.text);
    },
    
    // 播放并下一行
    playAndNextLine() {
        const line = AppState.currentDialogue.lines[AppState.currentLineIndex];
        TTS.speakSentence(line.text);
        
        setTimeout(() => {
            AppState.currentLineIndex++;
            this.renderDialogue();
        }, 2000);
    },
    
    // 上一行
    previousLine() {
        if (AppState.currentLineIndex > 0) {
            AppState.currentLineIndex--;
            this.renderDialogue();
        }
    },
    
    // 完成对话
    finishDialogue() {
        StorageModule.addLearningRecord({
            type: 'dialogue',
            dialogue: AppState.currentDialogue.title,
            unitId: AppState.currentUnit
        });
        
        this.showToast('太棒了！对话学习完成！');
        this.renderUnitDetail(AppState.currentUnit);
    },
    
    // ==================== 练习功能 ====================
    
    // 开始单元练习
    startUnitExercises(unitId) {
        const unit = TEXTBOOK_DATA.units[unitId];
        if (!unit || !unit.exercises) return;
        
        AppState.currentUnit = unitId;
        AppState.learningMode = 'exercises';
        AppState.currentCards = unit.exercises;
        AppState.currentCardIndex = 0;
        AppState.reviewResults = [];
        AppState.sessionStartTime = Date.now();
        
        this.renderExercise();
    },
    
    // 渲染练习
    renderExercise() {
        const exercise = AppState.currentCards[AppState.currentCardIndex];
        if (!exercise) {
            this.showExerciseComplete();
            return;
        }
        
        const total = AppState.currentCards.length;
        const progress = Math.round((AppState.currentCardIndex / total) * 100);
        
        let exerciseHtml = '';
        
        switch (exercise.type) {
            case 'choice':
                exerciseHtml = this.renderChoiceExercise(exercise);
                break;
            case 'fill':
                exerciseHtml = this.renderFillExercise(exercise);
                break;
            case 'listen_select':
                exerciseHtml = this.renderListenSelectExercise(exercise);
                break;
            default:
                exerciseHtml = this.renderChoiceExercise(exercise);
        }
        
        const html = `
            <div class="exercise-page">
                <div class="learning-header">
                    <button class="back-btn" onclick="App.confirmExerciseExit()">← 退出</button>
                    <div class="learning-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${AppState.currentCardIndex + 1} / ${total}</span>
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-question">
                        <h2>${exercise.question}</h2>
                    </div>
                    
                    ${exerciseHtml}
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 渲染选择题
    renderChoiceExercise(exercise) {
        return `
            <div class="exercise-options">
                ${exercise.options.map((opt, i) => `
                    <button class="option-btn" onclick="App.checkAnswer('${opt}', '${exercise.answer}')">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        `;
    },
    
    // 渲染填空题
    renderFillExercise(exercise) {
        return `
            <div class="exercise-options">
                ${exercise.options.map((opt, i) => `
                    <button class="option-btn" onclick="App.checkAnswer('${opt}', '${exercise.answer}')">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        `;
    },
    
    // 渲染听力选择题
    renderListenSelectExercise(exercise) {
        return `
            <button class="speak-btn large listen-btn" onclick="App.playExerciseAudio('${exercise.audio}')">
                🔊 点击听音
            </button>
            <div class="exercise-options">
                ${exercise.options.map((opt, i) => `
                    <button class="option-btn" onclick="App.checkAnswer('${opt}', '${exercise.answer}')">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        `;
    },
    
    // 播放练习音频
    playExerciseAudio(audioKey) {
        // 使用TTS朗读答案（这里简化处理）
        TTS.speak(audioKey.replace(/_/g, ' '));
    },
    
    // 检查答案
    checkAnswer(selected, correct) {
        const isCorrect = selected === correct;
        const exercise = AppState.currentCards[AppState.currentCardIndex];
        
        // 记录结果
        AppState.reviewResults.push({
            question: exercise.question,
            selected,
            correct,
            isCorrect,
            type: exercise.type,
            unitId: AppState.currentUnit
        });
        
        // 显示结果
        this.showAnswerResult(isCorrect, correct);
    },
    
    // 显示答案结果
    showAnswerResult(isCorrect, correct) {
        const html = `
            <div class="answer-result ${isCorrect ? 'correct' : 'wrong'}">
                <div class="result-icon">${isCorrect ? '✅' : '❌'}</div>
                <h3>${isCorrect ? '回答正确！' : '回答错误'}</h3>
                ${!isCorrect ? `<p>正确答案是: <strong>${correct}</strong></p>` : ''}
                
                <button class="action-btn primary next-btn" onclick="App.nextExercise()">
                    ${AppState.currentCardIndex < AppState.currentCards.length - 1 ? '下一题 →' : '查看结果'}
                </button>
            </div>
        `;
        
        // 替换选项区域
        const optionsContainer = document.querySelector('.exercise-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = html;
        }
        
        // 如果答对，播放鼓励音效
        if (isCorrect) {
            TTS.speak('Great!');
        } else {
            TTS.speak('Try again next time!');
        }
    },
    
    // 下一题
    nextExercise() {
        AppState.currentCardIndex++;
        this.renderExercise();
    },
    
    // 确认退出练习
    confirmExerciseExit() {
        this.showModal('确认退出', '你确定要退出练习吗？当前进度不会保存。', [
            { text: '取消', type: 'secondary', onClick: () => this.closeModal() },
            { text: '确定', type: 'primary', onClick: () => {
                this.closeModal();
                this.renderUnitDetail(AppState.currentUnit);
            }}
        ]);
    },
    
    // 显示练习完成
    showExerciseComplete() {
        const results = AppState.reviewResults;
        const correctCount = results.filter(r => r.isCorrect).length;
        const total = results.length;
        const accuracy = Math.round((correctCount / total) * 100);
        
        const report = MemoryModule.generateReviewReport(results);
        
        const html = `
            <div class="complete-page">
                <div class="complete-icon">${accuracy >= 80 ? '🏆' : accuracy >= 60 ? '👍' : '💪'}</div>
                <h1>${accuracy >= 80 ? '太棒了！' : accuracy >= 60 ? '做得不错！' : '继续加油！'}</h1>
                
                <div class="complete-stats">
                    <div class="complete-stat">
                        <span class="stat-num">${correctCount}/${total}</span>
                        <span class="stat-label">正确数</span>
                    </div>
                    <div class="complete-stat">
                        <span class="stat-num">${accuracy}%</span>
                        <span class="stat-label">正确率</span>
                    </div>
                </div>
                
                ${report.suggestions.length > 0 ? `
                    <div class="suggestions">
                        ${report.suggestions.map(s => `<p>💡 ${s}</p>`).join('')}
                    </div>
                ` : ''}
                
                <div class="complete-actions">
                    <button class="action-btn primary" onclick="App.renderUnitDetail('${AppState.currentUnit}')">
                        返回单元
                    </button>
                    <button class="action-btn secondary" onclick="App.startUnitExercises('${AppState.currentUnit}')">
                        再练一遍
                    </button>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // ==================== 复习功能 ====================
    
    // 渲染复习页面
    renderReview() {
        const todayTasks = MemoryModule.getTodayReviewTasks(20);
        const stats = MemoryModule.getReviewStats();
        
        if (todayTasks.length === 0) {
            const html = `
                <div class="review-page empty">
                    <div class="empty-icon">🎉</div>
                    <h1>今日复习完成！</h1>
                    <p>太棒了！今天没有需要复习的单词了。</p>
                    <p class="empty-hint">明天继续加油哦！</p>
                    
                    <div class="review-stats">
                        <div class="stat-card">
                            <span class="stat-num">${stats.mastered}</span>
                            <span class="stat-label">已掌握</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-num">${stats.learning}</span>
                            <span class="stat-label">学习中</span>
                        </div>
                    </div>
                    
                    <button class="action-btn primary" onclick="App.startRandomReview()">
                        🎲 随机练习
                    </button>
                </div>
            `;
            this.setContent(html);
            return;
        }
        
        const html = `
            <div class="review-page">
                <div class="page-header">
                    <h1>📝 今日复习</h1>
                    <p class="page-subtitle">共 ${todayTasks.length} 个单词待复习</p>
                </div>
                
                <div class="review-stats">
                    <div class="stat-card">
                        <span class="stat-num">${stats.totalWords}</span>
                        <span class="stat-label">总单词</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-num">${stats.mastered}</span>
                        <span class="stat-label">已掌握</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-num">${stats.masterRate}%</span>
                        <span class="stat-label">掌握率</span>
                    </div>
                </div>
                
                <button class="start-review-btn" onclick="App.startReviewSession()">
                    🔔 开始复习
                </button>
                
                <div class="review-preview">
                    <h3>即将复习的单词：</h3>
                    <div class="preview-tags">
                        ${todayTasks.slice(0, 10).map(task => `
                            <span class="preview-tag ${task.status}">${task.word}</span>
                        `).join('')}
                        ${todayTasks.length > 10 ? `<span class="preview-tag more">+${todayTasks.length - 10}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 开始复习会话
    startReviewSession() {
        const tasks = MemoryModule.getTodayReviewTasks(20);
        if (tasks.length === 0) {
            this.showToast('没有需要复习的单词');
            return;
        }
        
        AppState.learningMode = 'review';
        AppState.currentCards = tasks;
        AppState.currentCardIndex = 0;
        AppState.reviewResults = [];
        AppState.sessionStartTime = Date.now();
        AppState.isReviewMode = true;
        
        this.renderReviewCard();
    },
    
    // 渲染复习卡片
    renderReviewCard() {
        const task = AppState.currentCards[AppState.currentCardIndex];
        if (!task) {
            this.showReviewComplete();
            return;
        }
        
        const total = AppState.currentCards.length;
        const progress = Math.round((AppState.currentCardIndex / total) * 100);
        
        const html = `
            <div class="review-card-page">
                <div class="learning-header">
                    <button class="back-btn" onclick="App.confirmReviewExit()">← 退出</button>
                    <div class="learning-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${AppState.currentCardIndex + 1} / ${total}</span>
                    </div>
                </div>
                
                <div class="review-word-card" id="review-card">
                    <div class="word-display">
                        <h1 class="word-text">${task.word}</h1>
                        <p class="word-chinese">${task.chinese}</p>
                    </div>
                    
                    <button class="speak-btn" onclick="App.speakWord('${task.word}')">
                        🔊 发音
                    </button>
                </div>
                
                <div class="reveal-area" id="reveal-area">
                    <button class="reveal-btn" onclick="App.revealAnswer()">
                        👀 显示答案
                    </button>
                </div>
                
                <div class="answer-buttons" id="answer-buttons" style="display: none;">
                    <p class="answer-prompt">记得这个单词吗？</p>
                    <div class="answer-btns">
                        <button class="answer-btn wrong" onclick="App.answerReview(false)">
                            😟 不记得
                        </button>
                        <button class="answer-btn correct" onclick="App.answerReview(true)">
                            😊 记得！
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        this.setContent(html);
        
        AppState.cardStartTime = Date.now();
        
        // 自动发音
        setTimeout(() => {
            TTS.speakWord(task.word);
        }, 500);
    },
    
    // 显示答案
    revealAnswer() {
        const task = AppState.currentCards[AppState.currentCardIndex];
        
        document.getElementById('reveal-area').style.display = 'none';
        document.getElementById('answer-buttons').style.display = 'block';
        
        // 发音提示
        TTS.speak(task.word);
    },
    
    // 回答复习
    answerReview(isCorrect) {
        const task = AppState.currentCards[AppState.currentCardIndex];
        const responseTime = Date.now() - AppState.cardStartTime;
        
        // 处理答案并更新复习计划
        const updatedTask = MemoryModule.processAnswer(task, isCorrect, responseTime);
        MemoryModule.updateReviewTask(updatedTask);
        
        // 记录结果
        AppState.reviewResults.push({
            word: task.word,
            chinese: task.chinese,
            isCorrect,
            responseTime,
            unitId: task.unitId,
            newStatus: updatedTask.status
        });
        
        // 更新统计
        if (isCorrect) {
            StorageModule.incrementReviewsDone();
        }
        
        // 显示反馈并继续
        this.showReviewFeedback(isCorrect, updatedTask);
    },
    
    // 显示复习反馈
    showReviewFeedback(isCorrect, task) {
        const feedbackHtml = `
            <div class="review-feedback ${isCorrect ? 'correct' : 'wrong'}">
                <div class="feedback-icon">${isCorrect ? '🎉' : '💪'}</div>
                <p class="feedback-text">${isCorrect ? MemoryModule.getSuggestion(5) : MemoryModule.getSuggestion(0)}</p>
                <p class="next-review">下次复习: ${MemoryModule.getTimeUntilReview(task.nextReview)}</p>
                
                <button class="action-btn primary" onclick="App.nextReviewCard()">
                    继续 →
                </button>
            </div>
        `;
        
        const container = document.querySelector('.answer-buttons');
        if (container) {
            container.innerHTML = feedbackHtml;
        }
    },
    
    // 下一个复习卡片
    nextReviewCard() {
        AppState.currentCardIndex++;
        this.renderReviewCard();
    },
    
    // 确认退出复习
    confirmReviewExit() {
        this.showModal('确认退出', `你已完成 ${AppState.currentCardIndex} 个单词的复习，确定要退出吗？`, [
            { text: '取消', type: 'secondary', onClick: () => this.closeModal() },
            { text: '确定', type: 'primary', onClick: () => {
                this.closeModal();
                this.renderReview();
            }}
        ]);
    },
    
    // 显示复习完成
    showReviewComplete() {
        const report = MemoryModule.generateReviewReport(AppState.reviewResults);
        
        const html = `
            <div class="complete-page">
                <div class="complete-icon">🏆</div>
                <h1>复习完成！</h1>
                
                <div class="complete-stats">
                    <div class="complete-stat">
                        <span class="stat-num">${report.total}</span>
                        <span class="stat-label">复习单词</span>
                    </div>
                    <div class="complete-stat">
                        <span class="stat-num">${report.accuracy}%</span>
                        <span class="stat-label">正确率</span>
                    </div>
                </div>
                
                ${report.suggestions.length > 0 ? `
                    <div class="suggestions">
                        ${report.suggestions.map(s => `<p>💡 ${s}</p>`).join('')}
                    </div>
                ` : ''}
                
                <div class="complete-actions">
                    <button class="action-btn primary" onclick="App.renderHome()">
                        返回首页
                    </button>
                    <button class="action-btn secondary" onclick="App.renderReview()">
                        查看详情
                    </button>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 开始单词复习（快捷方式）
    startVocabularyReview() {
        this.navigateTo('review');
    },
    
    // 随机复习
    startRandomReview() {
        // 从所有已学习的单词中随机选择
        const allProgress = StorageModule.getAllWordProgress();
        const words = Object.keys(allProgress).map(key => {
            const [unitId, word] = key.split('_');
            const unit = TEXTBOOK_DATA.units[unitId];
            const vocab = unit?.vocabulary?.find(v => v.word === word);
            return vocab ? { ...vocab, unitId, task: allProgress[key] } : null;
        }).filter(Boolean);
        
        if (words.length < 5) {
            this.showToast('请先学习一些单词');
            this.renderHome();
            return;
        }
        
        // 随机打乱并选择
        const shuffled = words.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(10, words.length));
        
        AppState.learningMode = 'random_review';
        AppState.currentCards = selected.map((w, i) => ({
            ...w,
            index: i
        }));
        AppState.currentCardIndex = 0;
        AppState.reviewResults = [];
        AppState.sessionStartTime = Date.now();
        AppState.isReviewMode = true;
        
        this.renderReviewCard();
    },
    
    // ==================== 进度页面 ====================
    
    // 渲染进度页面
    renderProgress() {
        const stats = StorageModule.getStatistics();
        const reviewStats = MemoryModule.getReviewStats();
        const completedUnits = StorageModule.getCompletedUnits();
        const history = StorageModule.getLearningHistory(10);
        
        const html = `
            <div class="progress-page">
                <div class="page-header">
                    <h1>📊 学习进度</h1>
                </div>
                
                <!-- 总体统计 -->
                <div class="stats-overview">
                    <div class="stat-card large">
                        <div class="stat-icon">📚</div>
                        <div class="stat-info">
                            <span class="stat-num">${stats.totalWordsLearned || 0}</span>
                            <span class="stat-label">已学单词</span>
                        </div>
                    </div>
                    <div class="stat-card large">
                        <div class="stat-icon">🔥</div>
                        <div class="stat-info">
                            <span class="stat-num">${StorageModule.getStreakDays()}</span>
                            <span class="stat-label">连续天数</span>
                        </div>
                    </div>
                    <div class="stat-card large">
                        <div class="stat-icon">📝</div>
                        <div class="stat-info">
                            <span class="stat-num">${stats.totalReviewsDone || 0}</span>
                            <span class="stat-label">复习次数</span>
                        </div>
                    </div>
                </div>
                
                <!-- 复习进度 -->
                <div class="progress-section">
                    <h3>📈 记忆进度</h3>
                    <div class="memory-stats">
                        <div class="memory-item">
                            <span class="memory-label">已掌握</span>
                            <div class="memory-bar">
                                <div class="memory-fill mastered" style="width: ${reviewStats.totalWords > 0 ? (reviewStats.mastered / reviewStats.totalWords * 100) : 0}%"></div>
                            </div>
                            <span class="memory-num">${reviewStats.mastered}</span>
                        </div>
                        <div class="memory-item">
                            <span class="memory-label">复习中</span>
                            <div class="memory-bar">
                                <div class="memory-fill review" style="width: ${reviewStats.totalWords > 0 ? (reviewStats.review / reviewStats.totalWords * 100) : 0}%"></div>
                            </div>
                            <span class="memory-num">${reviewStats.review}</span>
                        </div>
                        <div class="memory-item">
                            <span class="memory-label">新单词</span>
                            <div class="memory-bar">
                                <div class="memory-fill new" style="width: ${reviewStats.totalWords > 0 ? (reviewStats.new / reviewStats.totalWords * 100) : 0}%"></div>
                            </div>
                            <span class="memory-num">${reviewStats.new}</span>
                        </div>
                    </div>
                </div>
                
                <!-- 单元完成情况 -->
                <div class="progress-section">
                    <h3>📖 单元进度</h3>
                    <div class="units-progress">
                        ${TEXTBOOK_DATA.modules.map(mod => `
                            <div class="module-progress">
                                <h4>${mod.nameCN}</h4>
                                <div class="module-units">
                                    ${mod.units.map(unit => {
                                        const unitData = TEXTBOOK_DATA.units[unit.id];
                                        const wordCount = unitData?.vocabulary?.length || 0;
                                        const completion = StorageModule.getUnitCompletion(unit.id, wordCount);
                                        const isCompleted = completedUnits.includes(unit.id);
                                        return `
                                            <div class="unit-progress-item ${isCompleted ? 'completed' : ''}">
                                                <span class="unit-name">${unit.name}</span>
                                                <div class="unit-progress-bar">
                                                    <div class="progress-fill" style="width: ${completion}%"></div>
                                                </div>
                                                <span class="unit-percent">${completion}%</span>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- 最近学习 -->
                <div class="progress-section">
                    <h3>🕐 最近学习</h3>
                    <div class="recent-history">
                        ${history.length > 0 ? history.map(record => `
                            <div class="history-item">
                                <span class="history-type">${record.type === 'vocabulary' ? '📚' : record.type === 'sentence' ? '💬' : '✏️'}</span>
                                <span class="history-content">${record.word || record.sentence || record.dialogue || ''}</span>
                                <span class="history-time">${this.formatTime(record.timestamp)}</span>
                            </div>
                        `).join('') : '<p class="empty-hint">还没有学习记录，开始学习吧！</p>'}
                    </div>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // ==================== 设置页面 ====================
    
    // 渲染设置页面
    renderSettings() {
        const settings = StorageModule.getSetting('ttsRate', 0.85);
        
        const html = `
            <div class="settings-page">
                <div class="page-header">
                    <h1>⚙️ 设置</h1>
                </div>
                
                <!-- 发音设置 -->
                <div class="settings-section">
                    <h3>🔊 发音设置</h3>
                    
                    <div class="setting-item">
                        <label>语速调节</label>
                        <div class="speed-control">
                            <button class="speed-btn" onclick="App.adjustSpeed(-0.1)">慢</button>
                            <span class="speed-value" id="speed-value">${TTS.getRateLabel()}</span>
                            <button class="speed-btn" onclick="App.adjustSpeed(0.1)">快</button>
                        </div>
                        <input type="range" class="speed-slider" 
                               min="0.5" max="1.5" step="0.1" 
                               value="${TTS.getRate()}"
                               onchange="App.setSpeed(this.value)">
                    </div>
                    
                    <button class="setting-btn" onclick="App.testTTS()">
                        🔊 测试发音
                    </button>
                </div>
                
                <!-- 学习设置 -->
                <div class="settings-section">
                    <h3>📚 学习设置</h3>
                    
                    <div class="setting-item">
                        <label>每日学习目标</label>
                        <select class="setting-select" onchange="App.setDailyGoal(this.value)">
                            <option value="5">5个单词</option>
                            <option value="10" selected>10个单词</option>
                            <option value="15">15个单词</option>
                            <option value="20">20个单词</option>
                        </select>
                    </div>
                    
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" id="auto-play" checked 
                                   onchange="App.toggleAutoPlay(this.checked)">
                            自动播放发音
                        </label>
                    </div>
                    
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" id="show-phonetic" checked
                                   onchange="App.togglePhonetic(this.checked)">
                            显示音标
                        </label>
                    </div>
                </div>
                
                <!-- 数据管理 -->
                <div class="settings-section">
                    <h3>💾 数据管理</h3>
                    
                    <button class="setting-btn" onclick="App.exportData()">
                        📤 导出学习数据
                    </button>
                    
                    <button class="setting-btn danger" onclick="App.clearData()">
                        🗑️ 清除所有数据
                    </button>
                </div>
                
                <!-- 关于 -->
                <div class="settings-section">
                    <h3>ℹ️ 关于</h3>
                    <p class="about-text">
                        小学英语学习工具 v1.0<br>
                        基于牛津上海版三年级下册<br>
                        专为小学生设计
                    </p>
                </div>
            </div>
        `;
        
        this.setContent(html);
    },
    
    // 调整语速
    adjustSpeed(delta) {
        const currentRate = TTS.getRate();
        const newRate = Math.max(0.5, Math.min(1.5, currentRate + delta));
        TTS.setRate(newRate);
        
        // 更新显示
        const speedValue = document.getElementById('speed-value');
        if (speedValue) {
            speedValue.textContent = TTS.getRateLabel();
        }
        
        const slider = document.querySelector('.speed-slider');
        if (slider) {
            slider.value = newRate;
        }
    },
    
    // 设置语速
    setSpeed(value) {
        TTS.setRate(parseFloat(value));
        
        const speedValue = document.getElementById('speed-value');
        if (speedValue) {
            speedValue.textContent = TTS.getRateLabel();
        }
    },
    
    // 测试TTS
    testTTS() {
        TTS.speak('Hello! This is a test. I am your English teacher today.');
    },
    
    // 设置每日目标
    setDailyGoal(value) {
        StorageModule.saveSetting('dailyGoal', parseInt(value));
        this.showToast('每日目标已更新');
    },
    
    // 切换自动播放
    toggleAutoPlay(checked) {
        StorageModule.saveSetting('autoPlay', checked);
    },
    
    // 切换音标显示
    togglePhonetic(checked) {
        StorageModule.saveSetting('showPhonetic', checked);
    },
    
    // 导出数据
    exportData() {
        const data = StorageModule.exportData();
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `english_learning_backup_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
        this.showToast('数据已导出');
    },
    
    // 清除数据
    clearData() {
        this.showModal('确认清除', '确定要清除所有学习数据吗？此操作不可恢复！', [
            { text: '取消', type: 'secondary', onClick: () => this.closeModal() },
            { text: '确定', type: 'danger', onClick: () => {
                StorageModule.clearAllData();
                this.closeModal();
                this.showToast('所有数据已清除');
                this.renderHome();
            }}
        ]);
    },
    
    // ==================== 工具函数 ====================
    
    // 设置页面内容
    setContent(html) {
        this.elements.content.innerHTML = html;
        window.scrollTo(0, 0);
    },
    
    // 显示模态框
    showModal(title, message, buttons = []) {
        const modal = this.elements.modal;
        
        // 默认按钮
        if (buttons.length === 0) {
            buttons = [{ text: '确定', type: 'primary', onClick: () => this.closeModal() }];
        }
        
        let buttonsHtml = buttons.map((btn, index) => `
            <button class="modal-btn ${btn.type}" data-btn-index="${index}">
                ${btn.text}
            </button>
        `).join('');
        
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="modal-buttons">${buttonsHtml}</div>
            </div>
        `;
        
        // 绑定按钮事件
        modal.querySelectorAll('.modal-btn').forEach((btnEl, index) => {
            btnEl.addEventListener('click', () => {
                if (buttons[index] && buttons[index].onClick) {
                    buttons[index].onClick();
                }
            });
        });
        
        modal.classList.add('show');
    },
    
    // 关闭模态框
    closeModal() {
        this.elements.modal.classList.remove('show');
    },
    
    // 显示提示
    showToast(message, duration = 2000) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    },
    
    // 检查复习提醒
    checkReviewReminder() {
        const reviewCount = MemoryModule.getReviewCount();
        if (reviewCount > 0) {
            // 可以在此处添加浏览器通知
            console.log(`你有 ${reviewCount} 个单词需要复习`);
        }
    },
    
    // 获取模块图标
    getModuleIcon(moduleId) {
        const icons = {
            'module1': '👁️',
            'module2': '❤️',
            'module3': '🌈',
            'module4': '⭐'
        };
        return icons[moduleId] || '📚';
    },
    
    // 格式化时间
    formatTime(timestamp) {
        if (!timestamp) return '';
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return '刚刚';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
        return date.toLocaleDateString('zh-CN');
    },
    
    // ==================== 磨耳朵功能 ====================
    
    // 磨耳朵状态
    morningListenState: {
        isPlaying: false,
        isPaused: false,
        currentWordIndex: 0,
        timer: null,
        words: [],
        duration: 5, // 分钟
        startTime: null,
        elapsed: 0
    },
    
    // 显示磨耳朵设置
    showMorningListenSetup() {
        const html = `
            <div class="morning-setup-page">
                <button class="back-btn" onclick="App.renderHome()">← 返回首页</button>
                
                <div class="page-header">
                    <div class="page-icon">🌅</div>
                    <h1>磨耳朵设置</h1>
                    <p class="page-subtitle">早餐时间，听力磨耳朵</p>
                </div>
                
                <div class="setup-section">
                    <h3>⏱️ 时长设置</h3>
                    <div class="duration-options">
                        <button class="duration-btn ${this.morningListenState.duration === 5 ? 'active' : ''}" 
                                onclick="App.setListenDuration(5)">5分钟</button>
                        <button class="duration-btn ${this.morningListenState.duration === 10 ? 'active' : ''}" 
                                onclick="App.setListenDuration(10)">10分钟</button>
                        <button class="duration-btn ${this.morningListenState.duration === 15 ? 'active' : ''}" 
                                onclick="App.setListenDuration(15)">15分钟</button>
                    </div>
                </div>
                
                <div class="setup-section">
                    <h3>📚 学习范围</h3>
                    <div class="scope-options">
                        <button class="scope-btn active" onclick="App.setListenScope('today')">今日新词</button>
                        <button class="scope-btn" onclick="App.setListenScope('week')">本周单词</button>
                        <button class="scope-btn" onclick="App.setListenScope('all')">全部单词</button>
                    </div>
                </div>
                
                <button class="start-listen-btn" onclick="App.startMorningListen()">
                    🎧 开始磨耳朵
                </button>
            </div>
        `;
        this.setContent(html);
    },
    
    setListenDuration(minutes) {
        this.morningListenState.duration = minutes;
        document.querySelectorAll('.duration-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.includes(minutes));
        });
    },
    
    setListenScope(scope) {
        document.querySelectorAll('.scope-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    },
    
    // 开始磨耳朵
    startMorningListen() {
        // 获取所有单词
        const allWords = [];
        TEXTBOOK_DATA.modules.forEach(mod => {
            mod.units.forEach(unit => {
                if (unit.vocabulary) {
                    unit.vocabulary.forEach(word => {
                        allWords.push({
                            ...word,
                            unitId: unit.id,
                            moduleId: mod.id
                        });
                    });
                }
            });
        });
        
        if (allWords.length === 0) {
            this.showToast('没有可学习的单词');
            return;
        }
        
        this.morningListenState.words = allWords;
        this.morningListenState.currentWordIndex = 0;
        this.morningListenState.isPlaying = true;
        this.morningListenState.isPaused = false;
        this.morningListenState.startTime = Date.now();
        this.morningListenState.elapsed = 0;
        
        this.renderMorningListenPage();
        this.playMorningListenSequence();
    },
    
    // 渲染磨耳朵页面
    renderMorningListenPage() {
        const state = this.morningListenState;
        const remainingTime = state.duration * 60 - Math.floor(state.elapsed / 1000);
        const minutes = Math.max(0, Math.floor(remainingTime / 60));
        const seconds = Math.max(0, remainingTime % 60);
        const currentWord = state.words[state.currentWordIndex] || state.words[0];
        
        const html = `
            <div class="morning-listen-page">
                <button class="back-btn" onclick="App.stopMorningListen()">⏹️ 停止</button>
                
                <div class="listen-timer">
                    <div class="timer-circle">
                        <span class="timer-minutes">${minutes.toString().padStart(2, '0')}</span>
                        <span class="timer-colon">:</span>
                        <span class="timer-seconds">${seconds.toString().padStart(2, '0')}</span>
                    </div>
                    <p class="timer-label">剩余时间</p>
                </div>
                
                <div class="current-word-card">
                    <div class="word-text">${currentWord?.word || ''}</div>
                    <div class="word-phonetic">${currentWord?.phonetic || ''}</div>
                    <div class="word-meaning">${currentWord?.chinese || currentWord?.meaning || ''}</div>
                </div>
                
                <div class="listen-progress">
                    单词 ${state.currentWordIndex + 1} / ${state.words.length}
                </div>
                
                <div class="listen-controls">
                    <button class="control-btn ${state.isPaused ? 'paused' : ''}" 
                            onclick="App.toggleMorningListen()">
                        ${state.isPaused ? '▶️ 继续' : '⏸️ 暂停'}
                    </button>
                </div>
            </div>
        `;
        this.setContent(html);
    },
    
    // 磨耳朵播放序列
    async playMorningListenSequence() {
        const state = this.morningListenState;
        if (!state.isPlaying) return;
        
        while (state.isPlaying && !state.isPaused) {
            // 检查时间
            state.elapsed = Date.now() - state.startTime;
            if (state.elapsed >= state.duration * 60 * 1000) {
                this.showToast('磨耳朵时间到！');
                this.stopMorningListen();
                return;
            }
            
            const word = state.words[state.currentWordIndex];
            if (!word) {
                state.currentWordIndex = 0;
                continue;
            }
            
            // 更新页面
            this.renderMorningListenPage();
            
            // 6步播放
            try {
                // 1. 单词朗读
                await TTS.speak(word.word);
                if (!state.isPlaying || state.isPaused) break;
                await this.wait(500);
                
                // 2. 字母拼读
                const letters = word.word.split('').join('-').toUpperCase();
                await TTS.speak(`${letters}, ${word.word}`);
                if (!state.isPlaying || state.isPaused) break;
                await this.wait(500);
                
                // 3. 词性说明（暂跳过，数据中没有词性）
                // await TTS.speak(`${word.word} is a noun`);
                
                // 4. 中文翻译
                const meaning = word.chinese || word.meaning || '';
                if (meaning) {
                    await TTS.speak(meaning);
                }
                if (!state.isPlaying || state.isPaused) break;
                await this.wait(500);
                
                // 5. 例句
                const example = word.example || word.sentence || '';
                if (example) {
                    await TTS.speak(example);
                    if (!state.isPlaying || state.isPaused) break;
                    await this.wait(500);
                    
                    // 6. 例句翻译
                    const exampleCn = word.exampleCn || word.sentenceCn || '';
                    if (exampleCn) {
                        await TTS.speak(exampleCn);
                        if (!state.isPlaying || state.isPaused) break;
                    }
                }
                
                await this.wait(1000);
                
            } catch (e) {
                console.error('播放出错:', e);
            }
            
            // 下一个单词
            state.currentWordIndex = (state.currentWordIndex + 1) % state.words.length;
        }
    },
    
    // 暂停/继续
    toggleMorningListen() {
        const state = this.morningListenState;
        state.isPaused = !state.isPaused;
        
        if (!state.isPaused) {
            // 继续 - 更新开始时间以扣除暂停时间
            state.startTime = Date.now() - state.elapsed;
            this.playMorningListenSequence();
        }
        
        this.renderMorningListenPage();
    },
    
    // 停止
    stopMorningListen() {
        this.morningListenState.isPlaying = false;
        this.morningListenState.isPaused = false;
        TTS.cancel();
        this.renderHome();
    },
    
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// 暴露App到全局
window.App = App;
