# 舒窈小课堂 - 开发记录

## 年级切换功能 ✅ (2026-04-15)

### 功能概述
实现了支持多个年级教材切换的功能，用户可以在首页右上角切换不同的年级教材。

### 支持的年级
- **三年级下册 (grade3_2)**: 完整的12个单元数据，包含完整的单词、音标、句子、对话和练习
- **四年级上册 (grade4_1)**: 包含完整的Module 1-2数据（数字、家庭、职业、学校场所、社区、食物数量词）
- **四年级下册 (grade4_2)**: 包含完整的Module 1数据（水果、物品特性、户外自然）和Module 2部分数据（运动、宠物、房间）
- **五年级上册 (grade5_1)**: 包含完整的Module 1-2数据（序数词、交通、职业、爱好、关系、方向）
- **五年级下册 (grade5_2)**: 包含完整的Module 1数据（学习用品、生命周期、声音环境）和Module 2部分数据（食物、健康）

### 技术实现

#### 1. 数据结构重构
- 将原来的 `TEXTBOOK_DATA` 对象重构为 `GRADES` 对象
- 每个年级包含完整的 `modules` 和 `units` 结构
- 新增辅助函数 `getCurrentTextbook()` 和 `getCurrentGradeName()`

#### 2. StorageModule扩展
新增年级状态管理方法：
```javascript
getCurrentGrade()      // 获取当前年级ID，默认'grade3_2'
setCurrentGrade(gradeId)  // 设置当前年级ID
```

#### 3. UI更新
- 首页头部新增「年级选择器」按钮（粉色渐变背景）
- 年级选择页面：展示所有年级列表，当前年级有选中标记

#### 4. 全局替换
所有 `TEXTBOOK_DATA` 引用已替换为 `getCurrentTextbook()` 函数调用

### 文件修改
- `index-standalone.html`: 主要修改文件
  - CSS: 新增 `.header-switches`, `.grade-indicator`, `.grade-select-page`, `.grade-card` 样式
  - JavaScript: 
    - 数据结构重构
    - StorageModule新增方法
    - App对象新增方法
    - 首页UI更新

### 使用说明
1. 用户点击首页右上角的年级选择器
2. 在年级选择页面查看所有可用年级
3. 点击目标年级自动切换并返回首页
4. 首页模块和单元内容自动更新为当前年级数据

### 注意事项
- 学习进度数据按用户隔离存储，不受年级切换影响
- 年级切换后，用户需要重新选择单元进行学习
- 三年级下册数据保持完整，其他年级数据逐步补充
