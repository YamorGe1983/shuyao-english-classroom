# 📚 舒窈小课堂 - 小学英语学习工具

> 基于牛津上海版的小学英语学习 Web App，支持三~五年级

![Version](https://img.shields.io/badge/version-3.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Web%20App-orange)

## ✨ 功能特点

### 📚 多年级支持
- **三年级下册**：完整内容（12单元）
- **四年级上册**：Module 1-4
- **四年级下册**：Module 1-4
- **五年级上册**：Module 1-4
- **五年级下册**：Module 1-4
- 一键切换年级，数据独立存储

### 👥 多用户系统
- 本地账号管理
- 支持多个孩子独立学习
- 学习进度数据隔离

### 📖 随身听功能
- 三级选择：年级 → 模块 → 单元
- 单词循环播放
- 支持正序/乱序播放
- 中英文自动切换朗读

### 📝 5种题型复习系统
1. **英译中**：看英文选中文
2. **中译英**：看中文选英文
3. **听音选词**：听发音选单词
4. **拼写辨析**：听发音选正确拼写
5. **音标辨析**：高亮字母发音选择

### 🔤 音标练习模块（5种题型）
- **48个国际音标**：20个元音 + 28个辅音
- **真实音频**：GitHub/Wikipedia开源音频（CC BY-SA 3.0）
- **英式发音**：TTS使用en-GB，与国际音标一致

**题型列表**：
1. **看单词选音标**：划线标注关键音素
2. **看音标选单词**：从年级单词库选词
3. **最小对立体辨析**：区分易混淆音（如 /l/ vs /r/）
4. **听音拼词**：播放发音，点击字母拼单词
5. **音标归类**：将单词归类到对应音标篮子

### 📐 语法练习模块
- **句子重组**：拖拽单词组成正确句子
- **逻辑连线**：连线配对练习
- **语境填空**：根据语境选择正确词汇
- **易错点题型**：主系表结构 vs 实义动词辨析
- 使用年级词汇，难度适中

### 🧠 智能单词学习
- **动态队列算法**：基于熟练度的智能推送
- **双向训练**：英译中 + 中译英
- **三选一答题**：从同单元单词选取干扰项
- **熟练度反馈**：
  - 😨 陌生 → 立刻再考
  - 🤔 模糊 → 间隔重复
  - 😎 熟练 → 不再出现
- **艾宾浩斯记忆曲线**：智能复习提醒

### 📊 学习统计
- 连续学习天数
- 今日/总计学习单词数
- 学习进度追踪

## 🎯 适用对象

- 🏫 小学三~五年级学生
- 👨‍👩‍👧 家长辅导辅助工具
- 👨‍🏫 英语教师课堂教学辅助

## 🛠️ 技术实现

| 技术 | 说明 |
|------|------|
| HTML5 | 语义化网页结构 |
| CSS3 | 儿童友好UI设计，响应式布局 |
| JavaScript | 原生 ES6+，无框架依赖 |
| ResponsiveVoice | 中英文TTS发音 |
| 百度TTS | 备用中文发音 |
| Web Speech API | 英式英语发音（en-GB） |
| LocalStorage | 本地数据持久化 |
| IPA Audio | GitHub/Wikipedia开源音标音频 |

## 📂 项目结构

```
shuyao-english-classroom/
├── index.html              # 主应用（单文件，~1000KB）
├── grammar.html            # 语法练习模块
├── data/
│   ├── english/            # 单词数据（按年级分离）
│   │   ├── grade3-down.json
│   │   ├── grade4-up.json
│   │   ├── grade4-down.json
│   │   ├── grade5-up.json
│   │   └── grade5-down.json
│   └── grammar/            # 语法数据
├── archive/                # 旧版本归档
└── README.md               # 使用说明
```

## 🚀 快速开始

### 方法一：在线访问
直接访问 GitHub Pages：https://yamorge1983.github.io/shuyao-english-classroom/

### 方法二：本地运行
```bash
# 克隆仓库
git clone https://github.com/YamorGe1983/shuyao-english-classroom.git

# 本地服务器运行
python -m http.server 8080
# 或
npx serve .

# 访问 http://localhost:8080
```

## 📖 使用指南

### 首次使用
1. 输入孩子姓名创建账号
2. 选择年级（默认三年级下册）
3. 开始学习！

### 日常使用
1. **随身听**：选择单元，循环听单词
2. **单词学习**：智能动态队列训练
3. **复习**：5种题型智能复习
4. **音标练习**：5种题型系统学习
5. **语法练习**：句子重组、连线、填空
6. **进度查看**：查看学习统计

## 🔮 后续规划

- [ ] 云端账号系统（跨设备同步）
- [ ] 语文/数学模块扩展
- [ ] 学习报告导出
- [ ] 家长端管理

## 📄 许可证

MIT License

## 🙏 致谢

- 音标音频来源：[joshstephenson/PhoneticFlashCards](https://github.com/joshstephenson/PhoneticFlashCards) (CC BY-SA 3.0)
- 教材：牛津上海版小学英语
