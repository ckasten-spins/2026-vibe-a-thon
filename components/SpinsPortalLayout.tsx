'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutGrid, ChevronRight, Grid2X2, ChevronDown, User, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import Image from 'next/image'

function SpinsLogo() {
  return (
    <Image
      src="/spins-logo.svg"
      alt="SPINS"
      width={80}
      height={20}
      style={{ height: '20px', width: 'auto', flexShrink: 0 }}
    />
  )
}

const APPS = [
  { id: 'dse', label: 'Demand Signal Engine', abbr: 'DSE' },
  { id: 'pt',  label: 'Power Tabs',           abbr: 'PT'  },
  { id: 'rsc', label: 'Retailer Scorecard',   abbr: 'SCO', chevron: true },
  { id: 'roi', label: 'TradeROI',             abbr: 'ROI', chevron: true },
  { id: 'trl', label: 'TriLens Panel',        abbr: 'TRL' },
  { id: 'att', label: 'AttLab',              abbr: 'ATT' },
  { id: 'prh', label: 'Product Hub',          abbr: 'PRH' },
  { id: 'sat', label: 'SATORI',              abbr: 'SAT' },
  { id: 'des', label: 'Destini',             abbr: 'DES', chevron: true },
]

export default function SpinsPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const sidebarWidth = collapsed ? '52px' : '224px'

  return (
    <div className="flex flex-col h-screen" style={{ background: '#F3F4F6' }}>

      {/* ── Top bar ───────────────────────────────────────────────────── */}
      <header
        className="flex items-center px-4 gap-3 flex-shrink-0"
        style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          height: '44px',
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        {/* Left: logo + divider + page name */}
        <SpinsLogo />
        <div className="w-px h-4" style={{ background: '#D1D5DB' }} />
        <span className="text-sm font-medium" style={{ color: '#374151' }}>
          Demand Signal Engine
        </span>

        {/* Right: My Apps + user */}
        <div className="ml-auto flex items-center gap-1">
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors duration-150 hover:bg-gray-50"
            style={{ color: '#6B7280' }}
          >
            <Grid2X2 size={14} strokeWidth={1.5} />
            My Apps
          </button>

          <div className="w-px h-5 mx-1" style={{ background: '#E5E7EB' }} />

          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors duration-150 hover:bg-gray-50"
            style={{ color: '#374151' }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#F3F4F6', border: '1px solid #E5E7EB' }}
            >
              <User size={12} style={{ color: '#6B7280' }} />
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs font-semibold" style={{ color: '#111827' }}>Cali Kasten</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Spins</p>
            </div>
            <ChevronDown size={12} style={{ color: '#9CA3AF' }} />
          </button>
        </div>
      </header>

      {/* ── Body: sidebar + main ─────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0">

        {/* Sidebar */}
        <aside
          style={{
            width: sidebarWidth,
            flexShrink: 0,
            background: '#FFFFFF',
            borderRight: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            position: 'sticky',
            top: '44px',
            height: 'calc(100vh - 44px)',
            transition: 'width 0.2s ease',
            overflow: 'hidden',
          }}
        >
          {/* Scrollable nav area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {/* Welcome */}
            <div className="px-3 pt-3 pb-1">
              <button
                className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-left transition-colors duration-150 hover:bg-gray-50"
                style={{ color: '#6B7280' }}
                title="Welcome"
              >
                <LayoutGrid size={14} strokeWidth={1.5} style={{ flexShrink: 0, color: '#9CA3AF' }} />
                {!collapsed && <span>Welcome</span>}
              </button>
            </div>

            {/* Applications */}
            <div className="px-3 pt-2 pb-4">
              {!collapsed && (
                <p className="text-xs font-medium px-2 mb-1.5" style={{ color: '#9CA3AF' }}>
                  Applications
                </p>
              )}

              {APPS.map((app) => {
                const isDse = app.id === 'dse'
                const isActive = isDse

                return (
                  <button
                    key={app.id}
                    onClick={isDse ? () => router.push(pathname.startsWith('/dashboard') ? '/dashboard' : '/') : undefined}
                    className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-left transition-colors duration-150 mb-0.5"
                    style={{
                      background: isActive ? '#F3F4F6' : 'transparent',
                      color: isActive ? '#111827' : '#374151',
                      fontWeight: isActive ? 600 : 400,
                      cursor: isDse ? 'default' : 'not-allowed',
                      justifyContent: collapsed ? 'center' : 'flex-start',
                    }}
                    disabled={!isDse}
                    title={app.label}
                  >
                    {collapsed ? (
                      <span className="text-xs font-bold" style={{ color: isActive ? '#374151' : '#9CA3AF' }}>
                        {app.abbr}
                      </span>
                    ) : (
                      <>
                        <span className="flex-1 truncate">{app.label}</span>
                        {app.chevron && !isActive && (
                          <ChevronRight size={13} style={{ color: '#D1D5DB', flexShrink: 0 }} />
                        )}
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Collapse button */}
          <div style={{ borderTop: '1px solid #E5E7EB', flexShrink: 0 }}>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-full flex items-center gap-2 px-4 py-3 text-xs font-medium tracking-widest uppercase transition-colors duration-150 hover:bg-gray-50"
              style={{
                color: '#9CA3AF',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
              title={collapsed ? 'Expand' : 'Collapse'}
            >
              {collapsed
                ? <PanelLeftOpen size={16} strokeWidth={1.5} />
                : (
                  <>
                    <PanelLeftClose size={16} strokeWidth={1.5} />
                    Collapse
                  </>
                )
              }
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 overflow-auto">
          {children}
        </main>

      </div>
    </div>
  )
}
