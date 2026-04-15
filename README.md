# 📚 舒窈小课堂 - 小学英语学习工具

> 基于牛津上海版的小学英语学习 Web App，支持三~五年级

![Version](https://img.shields.io/badge/version-2.0.0-blue)
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
4. **拼写辨析**：听发音选正确拼写（改进的干扰项生成）
5. **音标辨析**：高亮字母发音选择

### 🔤 音标练习模块
- **48个国际音标**：20个元音 + 28个辅音
- **分类学习**：前元音/中元音/后元音/双元音/爆破音/摩擦音等
- **真实音频**：GitHub/Wikipedia开源音频（CC BY-SA 3.0）
- **智能题目**：听音标选描述 + 听单词选音标
- **类别全选**：支持按类别批量选择

### 🧠 艾宾浩斯记忆曲线
- 智能复习提醒
- 根据记忆效果动态调整复习间隔
- 已掌握单词60天不再复习

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
| Web Speech API | 英文发音（ResponsiveVoice） |
| LocalStorage | 本地数据持久化 |
| IPA Audio | GitHub/Wikipedia开源音标音频 |

## 📂 项目结构

```
english-learning-app/
├── index-standalone.html  # 单文件版本（推荐）
├── index.html             # 多文件版本入口
├── css/
│   └── style.css          # 样式表
├── js/
│   ├── app.js             # 主应用逻辑
│   ├── data.js            # 课本数据
│   ├── tts.js             # 发音模块
│   ├── memory.js          # 记忆曲线算法
│   └── storage.js         # 本地存储模块
└── README.md              # 使用说明
```

## 🚀 快速开始

### 方法一：直接打开（推荐）
直接用浏览器打开 `index-standalone.html` 文件即可使用。

### 方法二：本地服务器
```bash
# 使用 Python 3
python -m http.server 8080

# 或使用 Node.js
npx serve .

# 然后访问 http://localhost:8080
```

### 方法三：部署到服务器
将整个项目文件夹上传到 Web 服务器即可。

## 📖 使用指南

### 首次使用
1. 输入孩子姓名创建账号
2. 选择年级（默认三年级下册）
3. 开始学习！

### 日常使用
1. **随身听**：选择单元，循环听单词
2. **复习**：5种题型智能复习
3. **音标练习**：选择音标，听音练习
4. **进度查看**：查看学习统计

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
