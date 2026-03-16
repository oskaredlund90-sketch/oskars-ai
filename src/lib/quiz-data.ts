export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  level: number
}

export interface SelfAssessment {
  id: number
  statement: string
  level: number
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Vad är en "prompt" i samband med AI?',
    options: [
      'Ett datorprogram som körs automatiskt',
      'En instruktion eller fråga du ger till en AI-modell',
      'En typ av sökmotor',
      'Ett lösenord för att logga in i AI-verktyg',
    ],
    correctAnswer: 1,
    level: 1,
  },
  {
    id: 2,
    question: 'Vilken av dessa är INTE en generativ AI-tjänst?',
    options: ['ChatGPT', 'Google Gemini', 'Wikipedia', 'Claude'],
    correctAnswer: 2,
    level: 1,
  },
  {
    id: 3,
    question: 'Vad menas med "hallucination" när det gäller AI?',
    options: [
      'Att AI:n blir medveten om sig själv',
      'Att AI:n genererar information som låter trovärdig men är felaktig',
      'Att AI:n slutar fungera tillfälligt',
      'Att AI:n skapar bilder istället för text',
    ],
    correctAnswer: 1,
    level: 2,
  },
  {
    id: 4,
    question: 'Vad står R i RUKF-modellen för promptdesign?',
    options: ['Resultat', 'Roll', 'Referens', 'Relevans'],
    correctAnswer: 1,
    level: 2,
  },
  {
    id: 5,
    question: 'Hur kan AI bäst stödja differentierad undervisning?',
    options: [
      'Genom att ersätta läraren helt',
      'Genom att skapa material på olika nivåer utifrån samma kunskapsmål',
      'Genom att betygsätta eleverna automatiskt',
      'Genom att välja ut vilka elever som behöver extra stöd',
    ],
    correctAnswer: 1,
    level: 3,
  },
  {
    id: 6,
    question: 'Vilken strategi är mest effektiv för att säkerställa validitet i bedömning när elever använder AI?',
    options: [
      'Förbjuda all AI-användning vid examinationer',
      'Kombinera processbedömning med slutproduktbedömning',
      'Bara bedöma muntligt',
      'Använda AI-detektionsverktyg',
    ],
    correctAnswer: 1,
    level: 3,
  },
  {
    id: 7,
    question: 'Vad innebär det att "iterera" på en prompt?',
    options: [
      'Att skriva prompten på engelska istället för svenska',
      'Att stegvis förfina och förbättra sin prompt baserat på AI:ns svar',
      'Att skicka samma prompt flera gånger för att få olika svar',
      'Att använda flera olika AI-verktyg samtidigt',
    ],
    correctAnswer: 1,
    level: 2,
  },
  {
    id: 8,
    question: 'Varför är det viktigt att källkritiskt granska AI-genererade svar?',
    options: [
      'AI har alltid rätt men formulerar sig otydligt',
      'AI kan generera övertygande text som innehåller fabricerade fakta och falska källhänvisningar',
      'AI kopierar bara text från Wikipedia',
      'Det behövs inte om man använder en betaltjänst',
    ],
    correctAnswer: 1,
    level: 2,
  },
  {
    id: 9,
    question: 'Vad skiljer ett verktyg som NotebookLM från en vanlig AI-chatbot?',
    options: [
      'Det kan generera bilder',
      'Det är gratis medan andra kostar pengar',
      'Det grundar sina svar i dokument du laddar upp, vilket minskar hallucinationer',
      'Det kan söka på internet i realtid',
    ],
    correctAnswer: 2,
    level: 3,
  },
  {
    id: 10,
    question: 'Vilket av följande är en konkret risk med att använda AI-verktyg i svenska skolan?',
    options: [
      'AI kan ta över lärarens tjänst',
      'Elevdata kan hanteras utanför EU i strid med GDPR',
      'AI-verktyg fungerar inte på svenska',
      'AI ger alltid samma svar till alla elever',
    ],
    correctAnswer: 1,
    level: 3,
  },
  {
    id: 11,
    question: 'Hur kan AI användas för att träna elevers kritiska tänkande, snarare än att ge dem färdiga svar?',
    options: [
      'Genom att förbjuda AI i klassrummet',
      'Genom att låta AI rätta alla uppgifter automatiskt',
      'Genom att ställa in AI:n som en sokratisk samtalspartner som ställer motfrågor istället för att ge svar direkt',
      'Genom att bara använda AI för bildgenerering',
    ],
    correctAnswer: 2,
    level: 4,
  },
  {
    id: 12,
    question: 'Vad innebär "few-shot prompting"?',
    options: [
      'Att ge AI:n så kort prompt som möjligt',
      'Att inkludera några exempel i prompten för att visa önskat format/stil',
      'Att skicka flera prompter i snabb följd',
      'Att använda AI bara några gånger per dag',
    ],
    correctAnswer: 1,
    level: 4,
  },
  {
    id: 13,
    question: 'Vilket påstående om AI och upphovsrätt i skolan stämmer bäst?',
    options: [
      'AI-genererat material har ingen upphovsman och kan användas fritt',
      'Lärare bör vara medvetna om att AI-genererat material kan baseras på upphovsrättsskyddat innehåll',
      'Allt som AI genererar är automatiskt upphovsrättsskyddat av användaren',
      'Upphovsrätt gäller inte för undervisningsmaterial',
    ],
    correctAnswer: 1,
    level: 4,
  },
  {
    id: 14,
    question: 'Hur kan man bäst leda kollegialt lärande om AI på sin skola?',
    options: [
      'Genom att hålla en enskild föreläsning om AI',
      'Genom att dela ut en manual och låta alla läsa själva',
      'Genom iterativa workshops med praktiska övningar, reflektion och erfarenhetsdelning',
      'Genom att låta den mest tekniskt kunniga personen bestämma allt',
    ],
    correctAnswer: 2,
    level: 5,
  },
  {
    id: 15,
    question: 'Vad är en viktig aspekt att tänka på vid implementering av AI-policy på skolnivå?',
    options: [
      'Att enbart fokusera på förbud och begränsningar',
      'Att involvera lärare, elever och vårdnadshavare i dialogen och balansera möjligheter med ansvar',
      'Att kopiera en annan skolas policy rakt av',
      'Att vänta tills Skolverket ger exakta riktlinjer',
    ],
    correctAnswer: 1,
    level: 5,
  },
]

export const SELF_ASSESSMENTS: SelfAssessment[] = [
  {
    id: 1,
    statement: 'Jag har testat att använda en AI-chatbot (t.ex. ChatGPT, Gemini eller Claude).',
    level: 1,
  },
  {
    id: 2,
    statement: 'Jag kan formulera en bra prompt och förstår vad som gör en prompt effektiv.',
    level: 2,
  },
  {
    id: 3,
    statement: 'Jag har använt AI som stöd i min lektionsplanering eller materialframställning.',
    level: 2,
  },
  {
    id: 4,
    statement: 'Jag kan anpassa mitt AI-användande efter olika ämnen och undervisningssituationer.',
    level: 3,
  },
  {
    id: 5,
    statement: 'Jag har en strategi för hur jag hanterar AI-användning i bedömningssituationer.',
    level: 3,
  },
  {
    id: 6,
    statement: 'Jag kan vägleda kollegor i hur de kan använda AI i sin undervisning.',
    level: 4,
  },
  {
    id: 7,
    statement: 'Jag har erfarenhet av att leda workshops eller utbildningar om AI i skolan.',
    level: 5,
  },
]

export interface QuizResult {
  knowledgeScore: number
  knowledgeMax: number
  selfAssessmentScore: number
  selfAssessmentMax: number
  level: number
  profile: 'balanced' | 'knowledge-high' | 'confidence-high'
  dynamicMessage: string
  recommendedPath: string
}

export function calculateResult(
  quizAnswers: Record<number, number>,
  selfAnswers: Record<number, number>
): QuizResult {
  // Calculate knowledge score (0-10)
  let knowledgeScore = 0
  QUIZ_QUESTIONS.forEach((q) => {
    if (quizAnswers[q.id] === q.correctAnswer) {
      knowledgeScore++
    }
  })

  // Calculate self-assessment score (0-28, each question 0-4)
  let selfAssessmentScore = 0
  const selfAssessmentMax = SELF_ASSESSMENTS.length * 4
  SELF_ASSESSMENTS.forEach((s) => {
    selfAssessmentScore += selfAnswers[s.id] || 0
  })

  // Normalize to 0-100
  const knowledgeNorm = (knowledgeScore / QUIZ_QUESTIONS.length) * 100
  const selfNorm = (selfAssessmentScore / selfAssessmentMax) * 100

  // Weighted score: 60% knowledge, 40% self-assessment
  const weightedScore = knowledgeNorm * 0.6 + selfNorm * 0.4

  // Determine profile
  const knowledgeDiff = knowledgeNorm - selfNorm
  let profile: QuizResult['profile'] = 'balanced'
  if (knowledgeDiff > 20) profile = 'knowledge-high'
  else if (knowledgeDiff < -20) profile = 'confidence-high'

  // Calculate level based on weighted score and profile
  let level: number
  if (weightedScore < 20) level = 1
  else if (weightedScore < 40) level = 2
  else if (weightedScore < 60) level = 3
  else if (weightedScore < 80) level = 4
  else level = 5

  // Adjust for profile: knowledge-high but low confidence -> lower level for confidence building
  if (profile === 'knowledge-high' && level > 1) {
    level = Math.max(1, level - 1)
  }

  // Generate dynamic message
  const messages: Record<string, Record<number, string>> = {
    balanced: {
      1: 'Välkommen till AI-världen! Du är i startgroparna och det finns massor av spännande saker att upptäcka. Din lärresa börjar med grunderna.',
      2: 'Du har tagit de första stegen med AI! Nu är det dags att bygga vidare och lära dig formulera riktigt effektiva prompts.',
      3: 'Du har bra koll på AI-grunderna och använder det regelbundet. Nästa steg är att fördjupa dig i hur AI kan lyfta just din undervisning.',
      4: 'Imponerande! Du integrerar redan AI i din undervisning. Nu kan du fördjupa dig i avancerade strategier och börja inspirera kollegor.',
      5: 'Du är en riktig AI-expert! Din kunskap och erfarenhet gör dig till en viktig resurs på din skola. Utforska hur du kan leda AI-utvecklingen.',
    },
    'knowledge-high': {
      1: 'Du har kunskap om AI men vill bli tryggare i användandet. Perfekt - din resa börjar med praktiska övningar som bygger självförtroende!',
      2: 'Du kan mycket om AI! Nu handlar det om att omsätta kunskapen i praktik. Vi börjar med enkla, trygga övningar.',
      3: 'Du har koll på grunderna men vill bli mer bekväm. Din resa fokuserar på konkreta quick wins som ger dig trygghet direkt.',
      4: 'Stark kunskapsbas! Dina nästa steg handlar om att prova mer i praktiken - och du har alla förutsättningar att lyckas.',
      5: 'Du har expertkunskap! Nu handlar det om att ta steget fullt ut och börja dela med dig av din kompetens.',
    },
    'confidence-high': {
      1: 'Du har testat en del AI-verktyg, härligt! Nu ska vi se till att du också förstår hur de fungerar under huven - det gör dig ännu starkare.',
      2: 'Kul att du är igång med AI! Låt oss fördjupa din förståelse så att du kan använda verktygen ännu mer medvetet.',
      3: 'Du är bekväm med AI, bra! Nu fördjupar vi din kunskap så att du kan göra ännu klokare val i undervisningen.',
      4: 'Du använder AI med självförtroende! Nästa steg är att fördjupa den teoretiska förståelsen för att bli en ännu bättre AI-pedagog.',
      5: 'Du har stort självförtroende med AI! Låt oss se till att din kunskapsbas matchar - då blir du en fantastisk resurs.',
    },
  }

  const dynamicMessage = messages[profile][level]

  const pathMap: Record<number, string> = {
    1: '/grunder',
    2: '/grunder',
    3: '/i-undervisningen',
    4: '/avancerat',
    5: '/avancerat',
  }

  return {
    knowledgeScore,
    knowledgeMax: QUIZ_QUESTIONS.length,
    selfAssessmentScore,
    selfAssessmentMax,
    level,
    profile,
    dynamicMessage,
    recommendedPath: pathMap[level],
  }
}
