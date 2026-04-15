/**
 * TTS (Text-to-Speech) 发音模块
 * 使用 ResponsiveVoice 实现高质量英语发音
 * 非商业用途免费
 */

const TTSModule = {
    // 配置
    config: {
        voice: 'US English Female',  // 默认使用美式女声
        rate: 0.85,                  // 语速
        pitch: 1.0                   // 音调
    },
    
    // 可用语音列表
    availableVoices: [
        { id: 'US English Female', name: '美式女声', lang: 'en-US' },
        { id: 'UK English Female', name: '英式女声', lang: 'en-GB' },
        { id: 'US English Male', name: '美式男声', lang: 'en-US' },
        { id: 'UK English Male', name: '英式男声', lang: 'en-GB' }
    ],
    
    // 初始化
    init() {
        return new Promise((resolve) => {
            // 检查 ResponsiveVoice 是否已加载
            if (typeof responsiveVoice !== 'undefined') {
                console.log('✓ ResponsiveVoice 已加载');
                resolve(true);
                return;
            }
            
            // 动态加载 ResponsiveVoice
            const script = document.createElement('script');
            script.src = 'https://code.responsivevoice.org/responsivevoice.js?key=free-non-commercial-use';
            script.onload = () => {
                console.log('✓ ResponsiveVoice 加载成功');
                // 等待初始化完成
                setTimeout(() => resolve(true), 500);
            };
            script.onerror = () => {
                console.warn('ResponsiveVoice 加载失败');
                resolve(false);
            };
            document.head.appendChild(script);
        });
    },
    
    // 朗读文本
    speak(text, options = {}) {
        return new Promise((resolve, reject) => {
            const voice = options.voice || this.config.voice;
            const rate = options.rate || this.config.rate;
            const pitch = options.pitch || this.config.pitch;
            
            // 使用 ResponsiveVoice
            if (typeof responsiveVoice !== 'undefined') {
                responsiveVoice.speak(text, voice, {
                    rate: rate,
                    pitch: pitch,
                    onend: () => resolve(),
                    onerror: (e) => {
                        console.error('TTS错误:', e);
                        resolve(); // 不阻塞流程
                    }
                });
            } 
            // 回退到 Web Speech API
            else if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = rate;
                utterance.pitch = pitch;
                utterance.onend = () => resolve();
                utterance.onerror = () => resolve();
                speechSynthesis.speak(utterance);
            } 
            else {
                console.warn('无可用的语音合成服务');
                resolve();
            }
        });
    },
    
    // 取消朗读
    cancel() {
        if (typeof responsiveVoice !== 'undefined') {
            responsiveVoice.cancel();
        } else if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
        }
    },
    
    // 检查是否正在朗读
    isSpeaking() {
        if (typeof responsiveVoice !== 'undefined') {
            return responsiveVoice.isPlaying();
        }
        return 'speechSynthesis' in window && speechSynthesis.speaking;
    },
    
    // 朗读单词
    speakWord(word, phonetic = '') {
        return this.speak(word, { rate: this.config.rate });
    },
    
    // 朗读句子
    speakSentence(sentence) {
        return this.speak(sentence, { rate: this.config.rate * 0.9 });
    },
    
    // 逐词高亮朗读
    async speakWithHighlight(text, onWordChange) {
        const words = text.split(/\s+/);
        for (let i = 0; i < words.length; i++) {
            if (onWordChange) {
                onWordChange(words[i], i, words.length);
            }
            await this.speak(words[i], { rate: this.config.rate });
            await this.wait(100);
        }
    },
    
    // 设置语速
    setRate(rate) {
        this.config.rate = Math.max(0.5, Math.min(2.0, rate));
        StorageModule.saveSetting('tts_rate', this.config.rate);
    },
    
    // 获取语速
    getRate() {
        return this.config.rate;
    },
    
    // 获取语速描述
    getRateLabel() {
        const rate = this.config.rate;
        if (rate <= 0.7) return '很慢';
        if (rate <= 0.85) return '较慢';
        if (rate <= 1.0) return '正常';
        if (rate <= 1.3) return '较快';
        return '很快';
    },
    
    // 加载设置
    loadSettings() {
        const savedRate = StorageModule.getSetting('tts_rate');
        if (savedRate) {
            this.config.rate = parseFloat(savedRate);
        }
    },
    
    // 获取可用语音列表
    getAvailableVoices() {
        return this.availableVoices;
    },
    
    // 设置语音
    setVoice(voiceId) {
        this.config.voice = voiceId;
    },
    
    // 延时
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// 简化调用接口
const TTS = {
    speak: (text, options) => TTSModule.speak(text, options),
    speakWord: (word, phonetic) => TTSModule.speakWord(word, phonetic),
    speakSentence: (sentence) => TTSModule.speakSentence(sentence),
    cancel: () => TTSModule.cancel(),
    setRate: (rate) => TTSModule.setRate(rate),
    getRate: () => TTSModule.getRate(),
    getRateLabel: () => TTSModule.getRateLabel(),
    isSpeaking: () => TTSModule.isSpeaking(),
    init: () => TTSModule.init(),
    loadSettings: () => TTSModule.loadSettings(),
    getAvailableVoices: () => TTSModule.getAvailableVoices(),
    setVoice: (voiceId) => TTSModule.setVoice(voiceId)
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TTSModule, TTS };
}
