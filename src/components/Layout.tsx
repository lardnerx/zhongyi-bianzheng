import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import BackToTop from './BackToTop'
import { useEffect } from 'react'

export default function Layout() {
  const location = useLocation()
  const state = location.state as { anchor?: string } | null

  useEffect(() => {
    if (state?.anchor) {
      setTimeout(() => {
        const el = document.getElementById(state.anchor!)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, state?.anchor])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-72 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Outlet />
        </div>
      </main>
      <BackToTop />
    </div>
  )
}