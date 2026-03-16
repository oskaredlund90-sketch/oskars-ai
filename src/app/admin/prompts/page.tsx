'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Copy } from 'lucide-react'
import { PROMPTS } from '@/lib/prompt-data'

export default function AdminPrompts() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Prompts</h1>
          <p className="text-muted-foreground text-sm">Hantera promptbiblioteket ({PROMPTS.length} prompts)</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Ny prompt
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {PROMPTS.map((prompt) => (
              <div key={prompt.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-sm">{prompt.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">{prompt.subject}</Badge>
                    <Badge variant="secondary" className="text-xs">{prompt.purpose}</Badge>
                    <Badge variant="outline" className="text-xs">Nivå {prompt.level}</Badge>
                    <span className="text-xs text-muted-foreground">{prompt.variables.length} variabler</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon-sm"><Copy className="h-3.5 w-3.5" /></Button>
                  <Button variant="ghost" size="icon-sm"><Edit className="h-3.5 w-3.5" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
