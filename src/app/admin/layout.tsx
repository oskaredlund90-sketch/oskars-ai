'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, FileText, MessageSquare, Settings, LogOut, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ADMIN_NAV = [
  { href: '/admin', label: 'Statistik', icon: BarChart3 },
  { href: '/admin/innehall', label: 'Innehåll', icon: FileText },
  { href: '/admin/prompts', label: 'Prompts', icon: MessageSquare },
  { href: '/admin/installningar', label: 'Inställningar', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('oskarsai_admin')
    if (saved === 'true') setIsLoggedIn(true)
  }, [])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    // Simple auth - will be replaced with Supabase Auth
    if (email === 'oskar.edlund@osteraker.se' && password === 'admin123') {
      setIsLoggedIn(true)
      localStorage.setItem('oskarsai_admin', 'true')
      setError('')
    } else {
      setError('Felaktigt e-post eller lösenord')
    }
  }

  function handleLogout() {
    setIsLoggedIn(false)
    localStorage.removeItem('oskarsai_admin')
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">Admin</h1>
            <p className="text-sm text-muted-foreground mt-1">Logga in för att hantera Oskars AI</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">E-post</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm"
                placeholder="oskar.edlund@osteraker.se"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Lösenord</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="w-full">Logga in</Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Denna admin kommer att använda Supabase Auth i produktion.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-56 border-r border-border bg-muted/20 p-4 hidden md:block">
        <div className="flex items-center gap-2 mb-6 px-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="font-semibold text-sm">Admin</span>
        </div>
        <nav className="space-y-1">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                pathname === item.href
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Logga ut
          </button>
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border flex justify-around p-2">
        {ADMIN_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg text-xs ${
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 pb-20 md:pb-8">{children}</div>
    </div>
  )
}
