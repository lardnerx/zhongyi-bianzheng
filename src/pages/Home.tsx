import { Link } from 'react-router-dom'
import { navItems } from '../data/navigation'

const modules = [
  {
    id: 1,
    title: '绪论',
    subtitle: '中医不是玄学，是生活智慧',
    path: '/introduction',
    icon: '📖',
    color: 'from-amber-600 to-amber-800',
    desc: '辨证的基础概念、学习方法与核心理念',
    sections: ['辨证是什么', '为什么学辨证', '八字口诀'],
  },
  {
    id: 2,
    title: '模块一',
    subtitle: '身体是个家——认识病位',
    path: '/module1',
    icon: '🏠',
    color: 'from-emerald-600 to-emerald-800',
    desc: '认识五脏、六腑和层次病位——身体的"房间"',
    sections: ['五脏', '六腑', '卫气营血'],
  },
  {
    id: 3,
    title: '模块二',
    subtitle: '家里的五种宝贝',
    path: '/module2',
    icon: '💎',
    color: 'from-blue-600 to-blue-800',
    desc: '认识气、血、津、液、精——身体的"物资"',
    sections: ['气（电）', '血（米面粮油）', '津（自来水）', '液（润滑油）', '精（存折）'],
  },
  {
    id: 4,
    title: '模块三',
    subtitle: '家里出的十种乱子',
    path: '/module3',
    icon: '⚠️',
    color: 'from-red-600 to-red-800',
    desc: '认识虚、滞、逆、陷、脱、寒、热等异常状态',
    sections: ['不足', '不通', '方向反', '温度不对'],
  },
  {
    id: 5,
    title: '模块四',
    subtitle: '谁在捣乱？——认识病因',
    path: '/module4',
    icon: '🔍',
    color: 'from-purple-600 to-purple-800',
    desc: '认识六淫、内邪、七情——致病的"坏蛋"',
    sections: ['外来的六大坏蛋', '内邪', '情绪病因'],
  },
  {
    id: 6,
    title: '模块五',
    subtitle: '超级破案公式',
    path: '/module5',
    icon: '🧮',
    color: 'from-orange-600 to-orange-800',
    desc: '一个公式生成所有证候，不用死记硬背',
    sections: ['万能公式', '如何运用', '实例演示'],
  },
  {
    id: 7,
    title: '模块六',
    subtitle: '辨证实战',
    path: '/module6',
    icon: '⚔️',
    color: 'from-cyan-600 to-cyan-800',
    desc: '从症状到证候，自己动手破案',
    sections: ['破案五步法', '常见病辨证', '练习题库'],
  },
  {
    id: 8,
    title: '附录',
    subtitle: '速查工具',
    path: '/appendix',
    icon: '📋',
    color: 'from-slate-600 to-slate-800',
    desc: '速记总表、口诀、证候链、症状索引',
    sections: ['速记总表', '辨证口诀', '证候生成链'],
  },
]

const conceptCards = [
  { emoji: '🏠', label: '房间', sub: '病位（15个）', color: 'border-emerald-500 bg-emerald-50', path: '/module1', hoverColor: 'hover:bg-emerald-100' },
  { emoji: '💎', label: '宝贝', sub: '气血津液精', color: 'border-blue-500 bg-blue-50', path: '/module2', hoverColor: 'hover:bg-blue-100' },
  { emoji: '⚠️', label: '毛病', sub: '状态（10种）', color: 'border-red-500 bg-red-50', path: '/module3', hoverColor: 'hover:bg-red-100' },
  { emoji: '🔍', label: '坏蛋', sub: '病因（17个）', color: 'border-purple-500 bg-purple-50', path: '/module4', hoverColor: 'hover:bg-purple-100' },
]

export default function Home() {
  return (
    <div className="page-enter-active">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <span className="text-6xl">☯</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-700 mb-4">
          《中医辨证思维》
        </h1>
        <p className="text-xl text-ink-500 font-serif italic mb-4">
          从"家庭维修"入手，一通百通学辨证
        </p>
        <div className="decorative-line mx-auto" />
        <p className="text-ink-600 max-w-2xl mx-auto text-lg">
          辨证不难，难在你以为它很难。<br />
          记住八个字：<strong className="text-cinnabar-500">房间、宝贝、毛病、坏蛋</strong>。<br />
          你就掌握了中医辨证的全部秘密。
        </p>
      </div>

      {/* Core concept cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {conceptCards.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`rounded-xl p-5 text-center border-2 ${item.color} ${item.hoverColor} transition-all hover:scale-105 hover:shadow-lg cursor-pointer`}
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <div className="font-serif font-bold text-lg text-ink-700">{item.label}</div>
            <div className="text-sm text-ink-500 mt-1">{item.sub}</div>
          </Link>
        ))}
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            to={mod.path}
            className="chapter-card group"
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center flex-shrink-0 text-2xl shadow-md`}>
                {mod.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-lg text-ink-700 group-hover:text-cinnabar-500 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-ink-500 mt-0.5">{mod.subtitle}</p>
                <p className="text-sm text-ink-600 mt-2">{mod.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {mod.sections.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 bg-ink-100 text-ink-600 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <svg className="w-5 h-5 text-ink-300 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-ink-200 text-center">
        <p className="text-sm text-ink-400">
          核心心法：辨证 = 找房间 + 查宝贝 + 看毛病 + 揪坏蛋
        </p>
        <p className="text-xs text-ink-300 mt-2">
          证候 = 病因 × 状态 × 气血 × 病位
        </p>
      </footer>
    </div>
  )
}