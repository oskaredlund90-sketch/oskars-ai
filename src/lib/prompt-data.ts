export interface PromptVariable {
  name: string
  label: string
  placeholder: string
}

export interface Prompt {
  id: number
  title: string
  description: string
  promptText: string
  variables: PromptVariable[]
  pedagogicalNote: string
  subject: string
  purpose: string
  level: number
}

export const PROMPTS: Prompt[] = [
  {
    id: 1,
    title: 'Lektionsplanering med differentiering',
    description: 'Skapa en lektionsplanering med inbyggd differentiering för tre nivåer.',
    promptText: `Du är en erfaren [ÄMNE]-lärare i [ÅRSKURS]. Skapa en detaljerad lektionsplanering om [TEMA] som inkluderar:

1. Lektionsmål kopplade till kursplanen
2. Introduktion (5-10 min)
3. Huvudaktivitet differentierad i tre nivåer:
   - Grundnivå: för elever som behöver extra stöd
   - Mellannivå: för de flesta elever
   - Utmaningsnivå: för elever som behöver utmaning
4. Avslutning med formativ bedömning (5 min)

Ange tidsramar för varje moment. Lektionen är [LÄNGD] minuter lång.`,
    variables: [
      { name: 'ÄMNE', label: 'Ditt ämne', placeholder: 't.ex. Svenska' },
      { name: 'ÅRSKURS', label: 'Årskurs', placeholder: 't.ex. årskurs 7' },
      { name: 'TEMA', label: 'Tema/ämnesområde', placeholder: 't.ex. argumenterande text' },
      { name: 'LÄNGD', label: 'Lektionslängd (min)', placeholder: 't.ex. 60' },
    ],
    pedagogicalNote: 'Denna prompt använder RUKF-modellen fullt ut. Rollen ger AI:n en pedagogisk kontext, uppgiften är specifik med numrerade steg, kontexten (årskurs och ämne) avgränsar svaret, och formatet specificeras med tidsramar. Differentiering i tre nivåer följer Skolverkets riktlinjer om att möta varje elev där de befinner sig.',
    subject: 'Alla ämnen',
    purpose: 'Planering',
    level: 2,
  },
  {
    id: 2,
    title: 'Formativ bedömningsuppgift',
    description: 'Skapa en formativ bedömningsuppgift som visar elevens förståelse.',
    promptText: `Du är en [ÄMNE]-lärare. Skapa en formativ bedömningsuppgift om [TEMA] för [ÅRSKURS]. Uppgiften ska:

1. Testa förståelse snarare än minneskunskap
2. Ge dig som lärare tydlig information om vad eleven förstår och inte förstår
3. Vara möjlig att genomföra på [TID] minuter
4. Inkludera bedömningskriterier (vad visar grundläggande/god/mycket god förståelse)
5. Vara utformad så att AI-genererade svar inte fungerar rakt av (validitetssäkrad)

Förklara också kort hur du tänkt kring validiteten i uppgiften.`,
    variables: [
      { name: 'ÄMNE', label: 'Ämne', placeholder: 't.ex. Matematik' },
      { name: 'TEMA', label: 'Tema', placeholder: 't.ex. procentberäkning' },
      { name: 'ÅRSKURS', label: 'Årskurs', placeholder: 't.ex. årskurs 8' },
      { name: 'TID', label: 'Tid (minuter)', placeholder: 't.ex. 20' },
    ],
    pedagogicalNote: 'Punkt 5 i prompten är nyckeln - genom att explicit be om validitetssäkring tvingas AI:n tänka på hur uppgiften står emot AI-genererade svar. Bedömningskriterierna i tre nivåer ger dig direkt koppling till betygsmatrisen. Fokus på förståelse framför minneskunskap gör bedömningen mer autentisk.',
    subject: 'Alla ämnen',
    purpose: 'Bedömning',
    level: 3,
  },
  {
    id: 3,
    title: 'Anpassat material för elev med läsförståelsesvårigheter',
    description: 'Omarbeta en text så att den blir mer tillgänglig utan att tappa ämnesinnehållet.',
    promptText: `Du är en specialpedagog och [ÄMNE]-lärare. Jag har en text om [TEMA] som ska användas i [ÅRSKURS]. Omarbeta den så att den blir mer tillgänglig för en elev med läsförståelsesvårigheter:

1. Förenkla meningsbyggnaden (kortare meningar, aktiv form)
2. Förklara svåra ämnesbegrepp med vardagliga ord (men behåll begreppen)
3. Lägg till mellanrubriker som guidar läsningen
4. Behåll allt viktigt ämnesinnehåll - förenkla språket, inte kunskapen
5. Lägg till 3 kontrollera-din-förståelse-frågor efter texten

Här är originaltexten:
[TEXT]`,
    variables: [
      { name: 'ÄMNE', label: 'Ämne', placeholder: 't.ex. NO' },
      { name: 'TEMA', label: 'Tema', placeholder: 't.ex. fotosyntesen' },
      { name: 'ÅRSKURS', label: 'Årskurs', placeholder: 't.ex. årskurs 6' },
      { name: 'TEXT', label: 'Originaltext (klistra in)', placeholder: 'Klistra in texten här...' },
    ],
    pedagogicalNote: 'Den viktigaste principen här är punkt 4: "förenkla språket, inte kunskapen". Många gör misstaget att förenkla själva innehållet, men alla elever förtjänar tillgång till samma kunskapsnivå. Rollen som specialpedagog ger AI:n rätt perspektiv. Kontrollfrågorna säkerställer att förståelsen finns trots förenklat språk.',
    subject: 'Alla ämnen',
    purpose: 'Differentiering',
    level: 2,
  },
  {
    id: 4,
    title: 'Studieguide med AI-stödd studieteknik',
    description: 'Skapa en studieguide som lär eleverna effektiv studieteknik med AI.',
    promptText: `Skapa en studieguide för elever i [ÅRSKURS] som ska plugga inför ett prov om [TEMA] i [ÄMNE]. Guiden ska:

1. Lista de viktigaste begreppen och koncepten att kunna
2. Föreslå 3 konkreta studiestrategier (t.ex. retrieval practice, elaboration, spacing)
3. Ge 5 exempelfrågor eleven kan ställa till en AI-chatbot för att testa sin förståelse
4. Förklara hur eleven kan använda AI som studiekompis (inte fusklapp)
5. Inkludera en enkel självskattning: "Jag kan förklara...", "Jag behöver repetera..."

Tonen ska vara uppmuntrande och skriven direkt till eleven.`,
    variables: [
      { name: 'ÄMNE', label: 'Ämne', placeholder: 't.ex. Historia' },
      { name: 'TEMA', label: 'Provtema', placeholder: 't.ex. industriella revolutionen' },
      { name: 'ÅRSKURS', label: 'Årskurs', placeholder: 't.ex. årskurs 9' },
    ],
    pedagogicalNote: 'Denna prompt kombinerar evidensbaserad studieteknik (retrieval practice, elaboration, spacing) med AI-verktyg. Punkt 4 är central - den lär eleven att använda AI som en dialogpartner, inte som en genväg. Självskattningen i punkt 5 bygger metakognitiv förmåga, vilket är en av de viktigaste faktorerna för lärande.',
    subject: 'Alla ämnen',
    purpose: 'Studieteknik',
    level: 2,
  },
  {
    id: 5,
    title: 'Svenskuppgift: Textanalys med AI som diskussionspartner',
    description: 'En uppgift där eleven analyserar en text med hjälp av AI-dialog.',
    promptText: `Du är en svensklärare i [ÅRSKURS]. Skapa en textanalysuppgift där eleven ska analysera [TEXT_TYP] och använda en AI-chatbot som diskussionspartner. Uppgiften ska:

1. Ge eleven en tydlig analysmodell (t.ex. syfte, mottagare, stilfigurer, argumentation)
2. Specificera 5 frågor eleven ska ställa till AI:n och sedan kritiskt granska svaren
3. Kräva att eleven jämför sin egen analys med AI:ns och reflekterar över skillnader
4. Avsluta med att eleven skriver en egen sammanfattande analys (500-700 ord)
5. Bedömningskriterier som värderar elevens eget tänkande, inte AI-genererat innehåll

Fokus: eleven ska använda AI som ett verktyg för att utveckla sitt tänkande, inte som en skrivmaskin.`,
    variables: [
      { name: 'ÅRSKURS', label: 'Årskurs', placeholder: 't.ex. gymnasiet åk 2' },
      { name: 'TEXT_TYP', label: 'Typ av text', placeholder: 't.ex. en debattartikel om klimatet' },
    ],
    pedagogicalNote: 'Uppgiften är designad för att vara AI-säker: eleven måste visa eget tänkande genom att jämföra och reflektera. Punkt 2-3 skapar en metanivå där eleven inte bara läser texten utan också granskar hur AI tolkar den - detta utvecklar kritiskt tänkande på flera plan. Bedömningskriterierna i punkt 5 säkerställer att det är elevens analys som bedöms.',
    subject: 'Svenska',
    purpose: 'Bedömning',
    level: 3,
  },
  {
    id: 6,
    title: 'Mattegenomgång anpassad för elev',
    description: 'Be AI förklara ett mattekoncept steg för steg på elevens nivå.',
    promptText: `Du är en tålmodig och uppmuntrande mattelärare. Förklara [KONCEPT] för en elev i [ÅRSKURS] som har svårt att förstå. Gör så här:

1. Börja med ett vardagsexempel som eleven kan relatera till
2. Visa lösningen steg för steg med förklaringar vid varje steg
3. Ge 3 övningsuppgifter i stigande svårighetsgrad
4. Ge facit med förklaringar till övningsuppgifterna
5. Avsluta med en minnesregel eller ett tips

Använd enkelt språk och undvik onödigt komplicerade termer. Om du måste använda matematiska termer, förklara dem.`,
    variables: [
      { name: 'KONCEPT', label: 'Matematiskt koncept', placeholder: 't.ex. ekvationer med en obekant' },
      { name: 'ÅRSKURS', label: 'Årskurs', placeholder: 't.ex. årskurs 7' },
    ],
    pedagogicalNote: 'Denna prompt bygger på konkret-representativ-abstrakt-modellen (CRA) genom att börja med vardagsexemplet. Steg-för-steg-lösningen med förklaringar är scaffolding i sin renaste form. De tre övningsuppgifterna i stigande svårighetsgrad ger eleven chans att bygga upp förståelse gradvis. Minnesregeln ger eleven ett ankare att hålla fast vid.',
    subject: 'Matematik',
    purpose: 'Materialframställning',
    level: 1,
  },
]
