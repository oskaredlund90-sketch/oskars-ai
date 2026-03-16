import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SUBJECTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ämnesguider',
  description: 'AI-tips och strategier anpassade för varje skolämne. Från svenska till slöjd.',
}

export default function AmnenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI i ditt ämne
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Varje ämne har sina egna möjligheter och utmaningar med AI. Välj ditt ämne nedan
          för att hitta konkreta tips, exempelprompts och lektionsidéer.
        </p>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SUBJECTS.map((subject) => (
          <Link key={subject.slug} href={`/amnen/${subject.slug}`}>
            <Card className="h-full hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-2">{subject.icon}</div>
                <CardTitle className="text-lg flex items-center gap-2">
                  {subject.name}
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  AI-tips och promptar för {subject.name.toLowerCase()}undervisningen.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Bottom info */}
      <div className="mt-12 text-center">
        <Card className="inline-block text-left max-w-xl">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Saknar du ditt ämne?</strong> Alla ämnesspecifika
              sidor byggs ut löpande. Under tiden kan du utforska de generella strategierna i{' '}
              <Link href="/i-undervisningen" className="text-primary underline underline-offset-4 hover:text-primary/80">
                AI i undervisningen
              </Link>{' '}
              och anpassa dem till ditt ämne.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
