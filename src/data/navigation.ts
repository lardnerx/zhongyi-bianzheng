export interface NavItem {
  title: string
  path: string
  icon: string
  sections: { title: string; anchor: string }[]
}

export const navItems: NavItem[] = [
  {
    title: '主页',
    path: '/',
    icon: '🏠',
    sections: [],
  },
  {
    title: '绪论',
    path: '/introduction',
    icon: '📖',
    sections: [
      { title: '辨证是什么', anchor: 'sec1-1' },
      { title: '为什么学辨证', anchor: 'sec1-2' },
      { title: '与众不同之处', anchor: 'sec1-3' },
      { title: '八字口诀', anchor: 'sec1-4' },
      { title: '本书结构', anchor: 'sec1-5' },
      { title: '开始之前', anchor: 'sec1-6' },
    ],
  },
  {
    title: '模块一：病位',
    path: '/module1',
    icon: '🏠',
    sections: [
      { title: '五脏总论', anchor: 'sec-m1-0' },
      { title: '心', anchor: 'sec-m1-1' },
      { title: '肝', anchor: 'sec-m1-2' },
      { title: '脾', anchor: 'sec-m1-3' },
      { title: '肺', anchor: 'sec-m1-4' },
      { title: '肾', anchor: 'sec-m1-5' },
      { title: '五脏小结', anchor: 'sec-m1-6' },
      { title: '六腑总论', anchor: 'sec-m1-7' },
      { title: '胃', anchor: 'sec-m1-8' },
      { title: '胆', anchor: 'sec-m1-9' },
      { title: '小肠', anchor: 'sec-m1-10' },
      { title: '大肠', anchor: 'sec-m1-11' },
      { title: '膀胱', anchor: 'sec-m1-12' },
      { title: '三焦', anchor: 'sec-m1-13' },
      { title: '六腑小结', anchor: 'sec-m1-14' },
      { title: '层次病位', anchor: 'sec-m1-15' },
      { title: '卫分', anchor: 'sec-m1-16' },
      { title: '气分', anchor: 'sec-m1-17' },
      { title: '营分', anchor: 'sec-m1-18' },
      { title: '血分', anchor: 'sec-m1-19' },
      { title: '层次小结', anchor: 'sec-m1-20' },
    ],
  },
  {
    title: '模块二：气血津液精',
    path: '/module2',
    icon: '💎',
    sections: [
      { title: '气', anchor: 'sec-m2-1' },
      { title: '血', anchor: 'sec-m2-2' },
      { title: '津', anchor: 'sec-m2-3' },
      { title: '液', anchor: 'sec-m2-4' },
      { title: '精', anchor: 'sec-m2-5' },
    ],
  },
  {
    title: '模块三：状态异常',
    path: '/module3',
    icon: '⚠️',
    sections: [
      { title: '虚证', anchor: 'sec-m3-1' },
      { title: '不通', anchor: 'sec-m3-2' },
      { title: '方向反', anchor: 'sec-m3-3' },
      { title: '寒热', anchor: 'sec-m3-4' },
    ],
  },
  {
    title: '模块四：病因',
    path: '/module4',
    icon: '🔍',
    sections: [
      { title: '六淫', anchor: 'sec-m4-1' },
      { title: '内邪', anchor: 'sec-m4-2' },
      { title: '七情', anchor: 'sec-m4-3' },
    ],
  },
  {
    title: '模块五：破案公式',
    path: '/module5',
    icon: '🧮',
    sections: [
      { title: '万能公式', anchor: 'sec-m5-1' },
      { title: '如何使用', anchor: 'sec-m5-2' },
      { title: '实例演示', anchor: 'sec-m5-3' },
      { title: '常见证候拆解', anchor: 'sec-m5-4' },
    ],
  },
  {
    title: '模块六：辨证实战',
    path: '/module6',
    icon: '⚔️',
    sections: [
      { title: '破案五步法', anchor: 'sec-m6-1' },
      { title: '常见病辨证', anchor: 'sec-m6-2' },
      { title: '练习题库', anchor: 'sec-m6-3' },
    ],
  },
  {
    title: '附录',
    path: '/appendix',
    icon: '📋',
    sections: [
      { title: '速记总表', anchor: 'sec-app-1' },
      { title: '辨证口诀', anchor: 'sec-app-2' },
      { title: '证候生成链', anchor: 'sec-app-3' },
      { title: '学习路线图', anchor: 'sec-app-4' },
      { title: '辨证心法', anchor: 'sec-app-5' },
      { title: '常见误区', anchor: 'sec-app-6' },
    ],
  },
]

export const getImageUrl = (prompt: string, size = 'landscape_16_9'): string => {
  const enhancedPrompt = `${prompt}, highly detailed, professional quality, masterpiece, no text, no characters, no writing, no calligraphy, no labels, pure illustration`
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(enhancedPrompt)}&image_size=${size}`
}