'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Users, Brain, FileText, TrendingUp } from 'lucide-react'

// Placeholder data - will be replaced with Supabase queries
const STATS = [
  { label: 'Sidvisningar idag', value: '127', icon: Eye, trend: '+12%' },
  { label: 'Unika besökare (vecka)', value: '342', icon: Users, trend: '+8%' },
  { label: 'Nivåtester genomförda', value: '89', icon: Brain, trend: '+23%' },
  { label: 'Prompts kopierade', value: '156', icon: FileText, trend: '+15%' },
]

const POPULAR_PAGES = [
  { path: '/nivatest', views: 245, title: 'Nivåtest' },
  { path: '/promptbibliotek', views: 189, title: 'Promptbibliotek' },
  { path: '/grunder', views: 156, title: 'AI-grunder' },
  { path: '/validitet', views: 134, title: 'Validitet & bedömning' },
  { path: '/amnen/svenska', views: 98, title: 'Svenska' },
]

const LEVEL_DISTRIBUTION = [
  { level: 1, name: 'Nyfiken', count: 23, color: 'bg-sky-400' },
  { level: 2, name: 'Grundläggande', count: 31, color: 'bg-emerald-400' },
  { level: 3, name: 'Bekväm', count: 19, color: 'bg-amber-400' },
  { level: 4, name: 'Självständig', count: 12, color: 'bg-orange-400' },
  { level: 5, name: 'Expert', count: 4, color: 'bg-violet-400' },
]

export default function AdminDashboard() {
  const totalTests = LEVEL_DISTRIBUTION.reduce((sum, l) => sum + l.count, 0)

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Översikt av Oskars AI</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription className="text-xs">{stat.label}</CardDescription>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="text-xs font-normal">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular pages */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Populära sidor</CardTitle>
            <CardDescription>Mest besökta sidor denna vecka</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {POPULAR_PAGES.map((page, i) => (
                <div key={page.path} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground w-5">{i + 1}.</span>
                    <div>
                      <p className="text-sm font-medium">{page.title}</p>
                      <p className="text-xs text-muted-foreground">{page.path}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{page.views}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Level distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Nivåfördelning</CardTitle>
            <CardDescription>{totalTests} genomförda nivåtester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {LEVEL_DISTRIBUTION.map((level) => {
                const percentage = Math.round((level.count / totalTests) * 100)
                return (
                  <div key={level.level}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">
                        Nivå {level.level}: {level.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {level.count} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${level.color} rounded-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground mt-8 text-center">
        Data är placeholder - kopplas till Supabase analytics i produktion.
      </p>
    </div>
  )
}
