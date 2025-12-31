export type Locale = "en" | "zh";

type ProfileContent = {
  hero: {
    name: string;
    role: string;
    status: string;
    headline: string;
    location: string;
    email: string;
  };
  highlights: string[];
  skills: { title: string; items: string[] }[];
  education: {
    period: string;
    school: string;
    focus: string;
    degree: string;
  }[];
  experience: {
    period: string;
    company: string;
    role: string;
    details: string[];
  }[];
  projects: {
    name: string;
    role: string;
    period: string;
    description: string;
    stack: string[];
    link?: string;
  }[];
  story: string;
  repos: { name: string; url: string }[];
};

type UiCopy = {
  sectionLabel: string;
  skills: string;
  projects: string;
  experience: string;
  education: string;
  path: string;
  openToWork: string;
  emailMe: string;
  contact: string;
  github: string;
  viewProject: string;
  footer: string;
};

export const content: Record<Locale, ProfileContent> = {
  en: {
    hero: {
      name: "MarvelSQ",
      role: "Front-end Engineer",
      status: "Looking for new opportunities",
      headline: "UI-focused engineer blending React craft with product sense.",
      location: "Shanghai, China",
      email: "sun1993hlj@hotmail.com",
    },
    highlights: [
      "Building React multi-page dashboards and mobile-first single-page experiences.",
      "UI/UX background — comfortable designing flows, icons, and design tokens before coding.",
      "Shipping with modern tooling: Vite, Tailwind CSS, shadcn UI, Redux, and ECharts.",
    ],
    skills: [
      {
        title: "Languages & Core",
        items: ["JavaScript (ES6+)", "TypeScript", "DOM APIs & accessibility"],
      },
      {
        title: "Frameworks",
        items: ["React & Redux", "Vue", "RSuite ecosystem"],
      },
      {
        title: "Tooling",
        items: ["Vite & Webpack", "Babel", "NPM scripts"],
      },
      {
        title: "Environment",
        items: ["macOS", "Chrome & Safari", "Node.js"],
      },
      {
        title: "Editors",
        items: ["VS Code", "WebStorm", "Atom"],
      },
      {
        title: "VCS",
        items: ["Git + GitHub"],
      },
      {
        title: "Server",
        items: ["Node.js", "Nginx"],
      },
      {
        title: "Other",
        items: [
          "UI design with Sketch",
          "Responsive layouts & CSS animation",
          "Android/Java background",
        ],
      },
    ],
    education: [
      {
        period: "2012.09 – 2016.06",
        school: "University of Shanghai for Science and Technology",
        focus: "Biomedical Engineering (Information)",
        degree: "B.S.",
      },
    ],
    experience: [
      {
        period: "2015.06 – 2016.06",
        company: "Shanghai Bio-Medical Information Tech",
        role: "Intern",
        details: [
          "Prototype design and Android development with a focus on UI specs.",
        ],
      },
      {
        period: "2016.06 – 2017.06",
        company: "Shanghai Bio-Medical Information Tech",
        role: "Technical Engineer",
        details: [
          "UI design plus web development; occasional Android support (PHP + React Native stack).",
        ],
      },
      {
        period: "2016.06 – 2017.06",
        company: "Shanghai Honglu Data Technology",
        role: "Front-end Engineer",
        details: [
          "Maintained advertising delivery platform front-end; contributed to additional web projects.",
        ],
      },
    ],
    projects: [
      {
        name: "Automotive Funnel Analytics",
        role: "Front-end Development",
        period: "2018.01 – Present",
        description:
          "Data visualization funnels for an automotive client. ECharts-powered charts, React + Redux, multi-page desktop plus lightweight mobile SPA.",
        stack: ["React", "Redux", "ECharts", "REST"],
      },
      {
        name: "MPS Tag Manager",
        role: "Front-end Development",
        period: "2017.12 – Present",
        description:
          "Label management tool built with create-rsuite-app. React + Redux multi-page experience with reusable admin widgets.",
        stack: ["React", "Redux", "RSuite"],
      },
      {
        name: "Ad Serving Platform",
        role: "Front-end Development & Maintenance",
        period: "2017.11 – Present",
        description:
          "Advertising management portal using RSuite components for campaign planning and reporting.",
        stack: ["React", "RSuite", "REST"],
        link: "https://adserving.hypers.com.cn",
      },
      {
        name: "SQEdt",
        role: "Personal Project",
        period: "2017.09 – Paused",
        description:
          "ContentEditable-based HTML editor with drag-and-drop experiments and modular ES6 architecture.",
        stack: ["Vanilla JS", "ES6", "Drag & Drop"],
        link: "https://marvelsq.github.io/Sqedt",
      },
      {
        name: "SQEdtonReact",
        role: "Personal Project",
        period: "2017.10 – Paused",
        description:
          "React-driven editor: template insertion, drag-and-drop, and paste handling.",
        stack: ["React", "Drag & Drop"],
        link: "https://marvelsq.github.io/SQEdtonReact",
      },
      {
        name: "AccountBook",
        role: "Personal Project",
        period: "2017.09 – Paused",
        description:
          "Vue + Element UI single-page bookkeeping app with Vuex auth and localStorage persistence.",
        stack: ["Vue", "Vuex", "Element UI"],
        link: "https://marvelsq.github.io/AccountBook",
      },
      {
        name: "Nutreat",
        role: "UI & Web Developer",
        period: "2016.07 – 2017.03",
        description:
          "Nutrition platform for cancer patients. Designed UI and built web experiences with jQuery/Bootstrap; implemented admin portal and dietician tooling.",
        stack: ["jQuery", "Bootstrap", "Android"],
      },
    ],
    story:
      "Started in UI design and Android, then moved full-time into the web. Began with Bootstrap + jQuery, fell for Vue templates, and now ship React interfaces with class/JSX patterns. Enjoy crafting responsive layouts, CSS motion, and modular architectures backed by npm tooling and node-powered backends.",
    repos: [
      { name: "SQEdtonReact", url: "https://marvelsq.github.io/SQEdtonReact" },
      { name: "AccountBook", url: "https://marvelsq.github.io/AccountBook" },
      { name: "SQEdt", url: "https://marvelsq.github.io/Sqedt" },
    ],
  },
  zh: {
    hero: {
      name: "MarvelSQ",
      role: "前端工程师",
      status: "寻找新的前端机会",
      headline: "偏爱界面的前端工程师，兼具产品感与体验意识。",
      location: "中国上海",
      email: "sun1993hlj@hotmail.com",
    },
    highlights: [
      "构建 React 多页数据看板和移动端单页应用。",
      "具备 UI/UX 背景，熟悉流程、图标和设计规范后再动手编码。",
      "使用 Vite、Tailwind CSS、shadcn UI、Redux、ECharts 等现代工具交付。",
    ],
    skills: [
      {
        title: "语言与基础",
        items: ["JavaScript (ES6+)", "TypeScript", "DOM 与可访问性"],
      },
      {
        title: "框架",
        items: ["React 与 Redux", "Vue", "RSuite 生态"],
      },
      {
        title: "工程与工具",
        items: ["Vite / Webpack", "Babel", "NPM 脚本"],
      },
      {
        title: "环境",
        items: ["macOS", "Chrome / Safari", "Node.js"],
      },
      {
        title: "编辑器",
        items: ["VS Code", "WebStorm", "Atom"],
      },
      {
        title: "版本控制",
        items: ["Git + GitHub"],
      },
      {
        title: "服务器",
        items: ["Node.js", "Nginx"],
      },
      {
        title: "其他",
        items: [
          "熟悉 Sketch 做设计",
          "响应式布局与 CSS 动画",
          "Android / Java 背景",
        ],
      },
    ],
    education: [
      {
        period: "2012.09 – 2016.06",
        school: "上海理工大学",
        focus: "生物医学工程（信息方向）",
        degree: "工学学士",
      },
    ],
    experience: [
      {
        period: "2015.06 – 2016.06",
        company: "上海生医信息科技有限公司",
        role: "实习生",
        details: ["原型设计与 Android 开发，负责界面规范与实现。"],
      },
      {
        period: "2016.06 – 2017.06",
        company: "上海生医信息科技有限公司",
        role: "技术工程师",
        details: [
          "负责 UI 设计与 Web 开发，兼顾 Android 支撑（PHP + React Native 技术栈）。",
        ],
      },
      {
        period: "2016.06 – 2017.06",
        company: "上海宏路数据技术股份有限公司",
        role: "前端工程师",
        details: ["维护广告投放平台前端，并支持其他 Web 项目迭代。"],
      },
    ],
    projects: [
      {
        name: "汽车数据可视化漏斗",
        role: "前端开发",
        period: "2018.01 – 至今",
        description:
          "为汽车客户构建数据漏斗可视化。ECharts 绘图，React + Redux，PC 多页与轻量移动端单页并行。",
        stack: ["React", "Redux", "ECharts", "REST"],
      },
      {
        name: "MPS 标签管理",
        role: "前端开发",
        period: "2017.12 – 至今",
        description:
          "基于 create-rsuite-app 的标签管理工具。React + Redux 多页，复用管理后台组件。",
        stack: ["React", "Redux", "RSuite"],
      },
      {
        name: "广告投放管理平台",
        role: "前端开发与维护",
        period: "2017.11 – 至今",
        description: "使用 RSuite 组件的广告管理门户，涵盖投放计划与报表。",
        stack: ["React", "RSuite", "REST"],
        link: "https://adserving.hypers.com.cn",
      },
      {
        name: "SQEdt",
        role: "个人项目",
        period: "2017.09 – 暂停",
        description:
          "基于 ContentEditable 的 HTML 编辑器，尝试拖拽与模块化 ES6 架构。",
        stack: ["原生 JS", "ES6", "拖拽"],
        link: "https://marvelsq.github.io/Sqedt",
      },
      {
        name: "SQEdtonReact",
        role: "个人项目",
        period: "2017.10 – 暂停",
        description: "React 编辑器，支持模板插入、拖拽与粘贴处理。",
        stack: ["React", "拖拽"],
        link: "https://marvelsq.github.io/SQEdtonReact",
      },
      {
        name: "AccountBook",
        role: "个人项目",
        period: "2017.09 – 暂停",
        description:
          "Vue + Element UI 记账单页，Vuex 处理登录与账目状态，localStorage 持久化。",
        stack: ["Vue", "Vuex", "Element UI"],
        link: "https://marvelsq.github.io/AccountBook",
      },
      {
        name: "Nutreat",
        role: "UI 与前端开发",
        period: "2016.07 – 2017.03",
        description:
          "面向肿瘤患者的营养平台。负责 UI 设计与网页开发，使用 jQuery/Bootstrap 搭建后台与营养师工具。",
        stack: ["jQuery", "Bootstrap", "Android"],
      },
    ],
    story:
      "从 UI 设计与 Android 起步，随后转向 Web。先用 Bootstrap + jQuery 搭界面，再爱上 Vue 模板，如今专注 React + JSX。喜欢做响应式布局、CSS 动效和模块化架构，也享受用 npm 与 node 打磨工程效率。",
    repos: [
      { name: "SQEdtonReact", url: "https://marvelsq.github.io/SQEdtonReact" },
      { name: "AccountBook", url: "https://marvelsq.github.io/AccountBook" },
      { name: "SQEdt", url: "https://marvelsq.github.io/Sqedt" },
    ],
  },
};

export const uiText: Record<Locale, UiCopy> = {
  en: {
    sectionLabel: "Section",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    path: "Front-end Path",
    openToWork: "Open to work",
    emailMe: "Email me",
    contact: "Contact",
    github: "Github",
    viewProject: "View",
    footer:
      "Crafted with React, Tailwind CSS, and shadcn/ui. Build outputs to the dist directory via npm run build.",
  },
  zh: {
    sectionLabel: "板块",
    skills: "技能",
    projects: "项目",
    experience: "经历",
    education: "教育",
    path: "前端路线",
    openToWork: "开放机会",
    emailMe: "邮件联系",
    contact: "联系",
    github: "Github",
    viewProject: "查看",
    footer:
      "使用 React、Tailwind CSS 与 shadcn/ui 构建。运行 npm run build 输出到 dist。",
  },
};

export const locales: Locale[] = ["en", "zh"];
