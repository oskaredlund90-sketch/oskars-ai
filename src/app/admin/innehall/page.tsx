'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Eye } from 'lucide-react'

const CONTENT_ITEMS = [
  { title: 'Vad är AI och generativ AI?', section: 'Grunder', level: 1, status: 'Publicerad' },
  { title: 'Dina första chatbot-steg', section: 'Grunder', level: 1, status: 'Publicerad' },
  { title: 'AI i lektionsplanering', section: 'I undervisningen', level: 2, status: 'Publicerad' },
  { title: 'Differentiering med AI', section: 'I undervisningen', level: 3, status: 'Publicerad' },
  { title: 'Few-shot prompting', section: 'Avancerat', level: 4, status: 'Utkast' },
  { title: 'Leda AI-arbete på skolan', section: 'Avancerat', level: 5, status: 'Utkast' },
]

export default function AdminInnehall() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Innehåll</h1>
          <p className="text-muted-foreground text-sm">Hantera artiklar och sektioner</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nytt innehåll
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {CONTENT_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{item.section}</span>
                    <Badge variant="outline" className="text-xs">Nivå {item.level}</Badge>
                    <Badge variant={item.status === 'Publicerad' ? 'secondary' : 'outline'} className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon-sm"><Eye className="h-3.5 w-3.5" /></Button>
                  <Button variant="ghost" size="icon-sm"><Edit className="h-3.5 w-3.5" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground mt-6 text-center">
        CMS med WYSIWYG-editor kopplas till Supabase i produktion.
      </p>
    </div>
  )
}
