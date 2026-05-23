import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const baseClass = `fixed bottom-8 right-8 z-30 flex flex-col gap-2 transition-all duration-300 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
  }`

  const btnClass = 'p-3 bg-ink-700 text-ink-50 rounded-full shadow-lg hover:bg-ink-600 transition-colors duration-200'

  return (
    <div className={baseClass}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={btnClass}
        aria-label="回到页面顶端"
        title="回到顶端"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        className={btnClass}
        aria-label="回到页面底端"
        title="回到底端"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      <button
        onClick={() => navigate('/')}
        className={btnClass}
        aria-label="回到首页"
        title="回到首页"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </button>
    </div>
  )
}