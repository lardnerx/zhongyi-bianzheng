import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/navigation'

interface SearchResult {
  type: 'module' | 'section'
  moduleTitle: string
  modulePath: string
  title: string
  anchor?: string
  icon: string
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const location = useLocation()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    setExpandedItems(prev => {
      const next = new Set(prev)
      next.add(location.pathname)
      return next
    })
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleExpand = useCallback((path: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }, [])

  const searchIndex = useMemo(() => {
    const results: SearchResult[] = []
    for (const item of navItems) {
      if (item.path === '/') continue
      results.push({
        type: 'module',
        moduleTitle: item.title,
        modulePath: item.path,
        title: item.title,
        icon: item.icon,
      })
      for (const section of item.sections) {
        results.push({
          type: 'section',
          moduleTitle: item.title,
          modulePath: item.path,
          title: section.title,
          anchor: section.anchor,
          icon: item.icon,
        })
      }
    }
    return results
  }, [])

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.trim().toLowerCase()
    return searchIndex.filter(
      r => r.title.toLowerCase().includes(q) || r.moduleTitle.toLowerCase().includes(q)
    )
  }, [searchQuery, searchIndex])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowResults(true)
  }

  const handleResultClick = () => {
    setSearchQuery('')
    setShowResults(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchQuery('')
      setShowResults(false)
      inputRef.current?.blur()
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-ink-700 text-ink-50 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-72 bg-white border-r border-ink-200
          transform transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-thin
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="p-6">
          <Link to="/" className="block mb-6">
            <h1 className="font-serif text-xl font-bold text-ink-700">
              中医辨证思维
            </h1>
            <p className="text-xs text-ink-400 mt-1">在线学习</p>
          </Link>

          <div ref={searchRef} className="relative mb-5">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowResults(true)}
                onKeyDown={handleKeyDown}
                placeholder="搜索章节..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-ink-50 border border-ink-200 rounded-lg text-ink-700 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-ink-300 focus:border-ink-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setShowResults(false); inputRef.current?.focus() }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-ink-400 hover:text-ink-600"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {showResults && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1 max-h-64 overflow-y-auto bg-white border border-ink-200 rounded-lg shadow-lg z-50">
                {filteredResults.length === 0 ? (
                  <div className="px-4 py-3 text-sm text-ink-400 text-center">
                    未找到相关内容
                  </div>
                ) : (
                  filteredResults.map((result, index) => (
                    result.type === 'module' ? (
                      <Link
                        key={`${result.modulePath}-${index}`}
                        to={result.modulePath}
                        onClick={handleResultClick}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50 transition-colors border-b border-ink-100 last:border-b-0"
                      >
                        <span>{result.icon}</span>
                        <span className="font-medium">{result.title}</span>
                      </Link>
                    ) : (
                      <Link
                        key={`${result.modulePath}-${result.anchor}-${index}`}
                        to={result.modulePath}
                        state={{ anchor: result.anchor }}
                        onClick={handleResultClick}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-ink-600 hover:bg-ink-50 transition-colors border-b border-ink-100 last:border-b-0"
                      >
                        <span className="text-xs text-ink-400 w-5 text-center">{result.icon}</span>
                        <div>
                          <span>{result.title}</span>
                          <span className="text-xs text-ink-400 ml-2">{result.moduleTitle}</span>
                        </div>
                      </Link>
                    )
                  ))
                )}
              </div>
            )}
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const isExpanded = expandedItems.has(item.path)
              const hasSections = item.sections.length > 0
              return (
                <div key={item.path}>
                  <div className="flex items-center">
                    <Link
                      to={item.path}
                      onClick={() => {
                        if (hasSections) {
                          toggleExpand(item.path)
                        }
                      }}
                      className={`sidebar-link flex items-center gap-2 flex-1 ${
                        isActive ? 'active' : ''
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                    {hasSections && (
                      <button
                        onClick={() => toggleExpand(item.path)}
                        className="p-2 mr-1 text-ink-400 hover:text-ink-700 rounded-lg hover:bg-ink-100 transition-colors"
                        aria-label={isExpanded ? '收起' : '展开'}
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {isExpanded && hasSections && (
                    <div
                      className="ml-4 mt-1 mb-1 space-y-0.5 pl-3 border-l-2 border-ink-200 overflow-hidden transition-all duration-200"
                    >
                      {item.sections.map((section) => {
                        const isOnPage = location.pathname === item.path
                        return isOnPage ? (
                          <a
                            key={section.anchor}
                            href={`#${section.anchor}`}
                            className="block px-3 py-1.5 text-xs text-ink-500 hover:text-ink-700 hover:bg-ink-50 rounded transition-colors"
                          >
                            {section.title}
                          </a>
                        ) : (
                          <Link
                            key={section.anchor}
                            to={item.path}
                            state={{ anchor: section.anchor }}
                            className="block px-3 py-1.5 text-xs text-ink-500 hover:text-ink-700 hover:bg-ink-50 rounded transition-colors"
                          >
                            {section.title}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}