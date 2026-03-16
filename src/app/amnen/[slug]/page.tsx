import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, BookOpen, MessageSquare, Lightbulb, ShieldCheck, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SUBJECTS } from '@/lib/constants'
import { SUBJECT_DATA } from '@/lib/subject-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const subject = SUBJECTS.find((s) => s.slug === slug)
  if (!subject) return { title: 'Ämne hittades inte | Oskars AI' }
  return {
    title: `AI i ${subject.name} | Oskars AI`,
    description: `Konkreta AI-tips, exempelprompts och lektionsidéer för ${subject.name.toLowerCase()}undervisningen.`,
  }
}

export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({
    slug: subject.slug,
  }))
}

export default async function SubjectPage({ params }: Props) {
  const { slug } = await params
  const subject = SUBJECTS.find((s) => s.slug === slug)

  if (!subject) {
    notFound()
  }

  const subjectData = SUBJECT_DATA[slug]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Back link */}
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/amnen">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Alla ämnen
        </Link>
      </Button>

      {/* Header */}
      <div className="mb-12">
        <div className="text-4xl mb-4">{subject.icon}</div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI i {subject.name}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Konkreta tips, exempelprompts och lektionsidéer för hur du kan använda AI i din
          {' '}{subject.name.toLowerCase()}undervisning &ndash; på ett pedagogiskt genomtänkt sätt.
        </p>
      </div>

      {/* Curriculum disclaimer */}
      {subjectData && (
        <Card className="mb-8 border-amber-200 bg-amber-50/50">
          <CardContent className="py-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900/80">
              {subjectData.curriculumDisclaimer}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Section 1: AI i ämnet */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">AI i {subject.name.toLowerCase()}</h2>
        </div>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>{subjectData?.introduction || `AI erbjuder spännande möjligheter specifikt för ${subject.name.toLowerCase()}undervisningen.`}</p>
              {subjectData && (
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Så kan AI stödja din undervisning:</h3>
                  <ul className="space-y-1.5">
                    {subjectData.aiUseCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#x2022;</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Exempelprompts */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Exempelprompts</h2>
        </div>
        <div className="space-y-3">
          {(subjectData?.examplePrompts || []).map((prompt, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Badge variant="outline" className="w-fit mb-1">{prompt.category}</Badge>
                <CardTitle className="text-base">{prompt.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-3 text-sm font-mono">
                  &quot;{prompt.prompt}&quot;
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Fler ämnesspecifika prompts hittar du i{' '}
          <Link href="/promptbibliotek" className="text-primary hover:underline">promptbiblioteket</Link>.
        </p>
      </section>

      {/* Section 3: Lektionsidéer */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Lektionsidéer</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {(subjectData?.lessonIdeas || []).map((idea, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{idea.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">{idea.duration}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {idea.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Har du en egen aktivitetsidé som fungerat bra? Dela gärna med dig via{' '}
          <Link href="/om" className="text-primary hover:underline">kontaktsidan</Link>.
        </p>
      </section>

      {/* Section 4: Validitetstips */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Validitetstips</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Att säkerställa valid bedömning när AI finns tillgängligt är en viktig fråga
                inom {subject.name.toLowerCase()}. Här är specifika tips:
              </p>
              <ul className="space-y-2">
                {(subjectData?.validityTips || []).map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">&#x2022;</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/validitet">
              Läs mer om validitet
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Utforska mer</h2>
        <p className="text-muted-foreground mb-6">
          Hitta prompts i vårt bibliotek eller lär dig mer om AI-grunder.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptbibliotek">
              <MessageSquare className="mr-2 h-4 w-4" />
              Promptbiblioteket
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/amnen">
              Alla ämnen
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
