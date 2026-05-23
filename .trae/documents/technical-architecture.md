## 1. 架构设计

```mermaid
flowchart TD
    "用户浏览器" --> "静态文件服务器"
    "静态文件服务器" --> "index.html (主页)"
    "静态文件服务器" --> "introduction.html (绪论)"
    "静态文件服务器" --> "module1.html (病位)"
    "静态文件服务器" --> "module2.html (气血津液精)"
    "静态文件服务器" --> "module3.html (状态异常)"
    "静态文件服务器" --> "module4.html (病因)"
    "静态文件服务器" --> "module5.html (破案公式)"
    "静态文件服务器" --> "module6.html (辨证实战)"
    "静态文件服务器" --> "appendix.html (附录)"
    "静态文件服务器" --> "css/style.css"
    "静态文件服务器" --> "js/script.js"
    "静态文件服务器" --> "images/*.jpg"
```

## 2. 技术选型

- **前端**：纯 HTML5 + CSS3 + Vanilla JavaScript（无第三方框架依赖）
- **初始化方式**：手动创建项目结构
- **后端**：无，纯静态网站
- **部署**：可直接通过浏览器打开 HTML 文件访问，或部署到任意静态文件服务器

## 3. 路由定义

| 路由 | 用途 |
|------|------|
| /index.html | 主页 - 全书画卷式目录导航 |
| /introduction.html | 绪论 - 辨证基础概念 |
| /module1.html | 模块一：身体是个家——认识病位 |
| /module2.html | 模块二：家里的五种宝贝——认识气血津液精 |
| /module3.html | 模块三：家里出的十种乱子——认识状态异常 |
| /module4.html | 模块四：谁在捣乱？——认识病因 |
| /module5.html | 模块五：超级破案公式——证候的生成 |
| /module6.html | 模块六：辨证实战——自己动手破案 |
| /appendix.html | 附录 |

## 4. 项目结构

```
zhongyi-website/
├── index.html              # 主页 - 目录导航
├── introduction.html       # 绪论
├── module1.html           # 模块一：病位
├── module2.html           # 模块二：气血津液精
├── module3.html           # 模块三：状态异常
├── module4.html           # 模块四：病因
├── module5.html           # 模块五：破案公式
├── module6.html           # 模块六：辨证实战
├── appendix.html          # 附录
├── css/
│   └── style.css          # 全局样式
└── js/
    └── script.js          # 全局脚本
```

## 5. 数据模型

### 5.1 页面内容结构
所有页面内容直接从 `bianzheng.md` 提取并转换为 HTML 格式，无需数据库支持。

### 5.2 导航数据模型
```javascript
// 导航菜单数据结构
const navData = [
  {
    title: '绪论',
    link: 'introduction.html',
    sections: ['辨证是什么', '为什么学辨证', '与众不同之处', '六字口诀', '本书结构', '开始之前']
  },
  {
    title: '模块一：病位',
    link: 'module1.html',
    sections: ['五脏', '六腑', '层次病位']
  },
  // ...更多模块
]
```

## 6. 样式架构

- **CSS变量**：统一管理颜色、字体、间距
- **布局**：Flexbox + CSS Grid，左侧固定导航 + 右侧内容区
- **响应式**：媒体查询适配平板和移动端
- **动画**：CSS transitions 实现导航悬停、卡片加载动画
- **图片**：使用 AI 生成的水墨风格插画，通过 URL API 获取