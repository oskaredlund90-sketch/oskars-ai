export interface SubjectPromptExample {
  category: string
  title: string
  prompt: string
}

export interface SubjectLessonIdea {
  title: string
  duration: string
  description: string
}

export interface SubjectData {
  slug: string
  introduction: string
  aiUseCases: string[]
  examplePrompts: SubjectPromptExample[]
  lessonIdeas: SubjectLessonIdea[]
  validityTips: string[]
  curriculumDisclaimer: string
}

const CURRICULUM_DISCLAIMER =
  'Kontrollera alltid promptens koppling till aktuellt centralt innehåll i Lgr22 eller Gy25. AI kan formulera läroplansreferenser som låter korrekta men som inte stämmer.'

export const SUBJECT_DATA: Record<string, SubjectData> = {
  svenska: {
    slug: 'svenska',
    introduction:
      'AI kan bli en kraftfull skrivpartner i svenskundervisningen. Använd det för att generera modeltexter, ge strukturerad feedback på elevtexter eller skapa differentierade läsförståelseuppgifter anpassade efter elevernas nivå.',
    aiUseCases: [
      'Generera modeltexter i olika genrer som eleverna kan analysera och jämföra',
      'Skapa differentierade läsförståelsefrågor på flera nivåer till samma text',
      'Ge strukturerad feedback på elevtexter med fokus på ett specifikt område åt gången',
      'Producera stödmallar och skrivramar för elever som behöver hjälp att komma igång',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Skrivinstruktion med stöd',
        prompt:
          'Du är en svensklärare. Skapa en skrivinstruktion för [GENRE] i årskurs [ÅRSKURS]. Instruktionen ska vara elevvänlig, innehålla ett modelexempel, tydliga kriterier och stödfrågor för elever som behöver hjälp att komma igång.',
      },
      {
        category: 'Bedömning',
        title: 'Bedömningsmatris för skrivande',
        prompt:
          'Skapa en bedömningsmatris för [TEXTTYP] i årskurs [ÅRSKURS]. Matrisen ska ha tre nivåer (på väg, grundläggande, fördjupad) och bedöma textens innehåll, struktur, språk och anpassning till syfte och mottagare. Formulera nivåbeskrivningarna elevvänligt.',
      },
      {
        category: 'Differentiering',
        title: 'Läsförståelsefrågor i tre nivåer',
        prompt:
          'Skapa läsförståelsefrågor till texten "[TEXTTITEL]" i tre nivåer: hitta i texten, tolka och dra slutsatser, samt reflektera och värdera. Skriv 3 frågor per nivå. Nivå 1 ska vara tillgänglig för elever med lässvårigheter.',
      },
      {
        category: 'Elevstöd',
        title: 'Stödmall för argumenterande text',
        prompt:
          'Skapa en stödmall för en argumenterande text om [ÄMNE] riktad till årskurs [ÅRSKURS]. Mallen ska innehålla: startmeningar, bindeord, exempelargument och en checklista eleven kan använda för att granska sin text.',
      },
    ],
    lessonIdeas: [
      {
        title: 'AI-redigering',
        duration: '25 min',
        description:
          'Eleverna skriver en kort text och ber sedan AI om specifik feedback på ett enda område, t.ex. styckeindelning eller meningsbyggnad. De reviderar texten baserat på feedbacken och reflekterar över vad som förbättrades.',
      },
      {
        title: 'Genredetektiven',
        duration: '30 min',
        description:
          'AI genererar tre korta texter i olika genrer (t.ex. krönika, nyhetsartikel, novell). Eleverna identifierar genre, markerar typiska drag och diskuterar vad som skiljer texterna åt.',
      },
      {
        title: 'Prompten som läsförståelse',
        duration: '20 min',
        description:
          'Eleverna läser en text och formulerar själva tre frågor till AI om texten. De jämför AI:s svar med sina egna tolkningar och diskuterar skillnaderna.',
      },
      {
        title: 'Berättelsens byggstenar',
        duration: '35 min',
        description:
          'Eleverna ger AI en karaktär, en miljö och en konflikt. AI skapar ett utkast. Eleverna analyserar berättelsekurvan, identifierar svagheter och skriver om slutet med egna ord.',
      },
    ],
    validityTips: [
      'Låt eleverna skriva första utkastet utan AI – det visar deras faktiska skrivförmåga',
      'Be eleverna förklara muntligt vilka ändringar de gjort och varför – det avslöjar om de förstått feedbacken',
      'Kombinera AI-assisterad skrivning med handskrivna texter under kontrollerade former',
      'Bedöm processen, inte bara produkten – använd skrivloggar där eleverna dokumenterar sina val',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  matematik: {
    slug: 'matematik',
    introduction:
      'AI kan hjälpa matematiklärare att snabbt skapa varierade uppgifter med ökande svårighetsgrad och verklighetskoppling. Det är också värdefullt för att generera felaktiga lösningar som eleverna kan analysera, vilket stärker deras begreppsförståelse.',
    aiUseCases: [
      'Skapa uppgiftsserier med ökande svårighetsgrad och verklighetsanknytning',
      'Generera felaktiga lösningar för elevanalys och felsökning',
      'Producera formativa bedömningsuppgifter som testar begreppsförståelse',
      'Skapa visuella förklaringar och steg-för-steg-genomgångar av lösningsmetoder',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Uppgiftsserie med progression',
        prompt:
          'Skapa 5 matematikproblem om [OMRÅDE] för årskurs [ÅRSKURS]. Problemen ska vara av ökande svårighetsgrad och kräva att eleven visar sin tankegång. Inkludera ett problem med verklighetskoppling och ett som kräver resonemang.',
      },
      {
        category: 'Bedömning',
        title: 'Diagnostiskt prov',
        prompt:
          'Skapa ett diagnostiskt prov om [MATEMATIKOMRÅDE] för årskurs [ÅRSKURS]. Provet ska ha 8 uppgifter som testar vanliga missuppfattningar inom området. Ange för varje uppgift vilken missuppfattning den avslöjar om eleven svarar fel.',
      },
      {
        category: 'Differentiering',
        title: 'Samma problem, tre nivåer',
        prompt:
          'Ta detta matematikproblem: "[PROBLEM]". Skapa tre versioner i ökande svårighetsgrad: en med mer stöd och ledtrådar, en standardversion, och en utmanande version med en extra fråga som kräver generalisering.',
      },
      {
        category: 'Elevstöd',
        title: 'Begreppsförklaring med analogi',
        prompt:
          'Förklara begreppet [BEGREPP] för en elev i årskurs [ÅRSKURS] med hjälp av en vardagsanalogi. Inkludera ett konkret exempel, en visuell beskrivning och två kontrollfrågor eleven kan ställa sig själv.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Felsökning',
        duration: '15 min',
        description:
          'AI genererar en lösning med ett dolt fel. Eleverna hittar felet, förklarar varför det är fel och rättar lösningen. Diskutera sedan i par vilken missuppfattning som kan ligga bakom felet.',
      },
      {
        title: 'Problemskaparen',
        duration: '25 min',
        description:
          'Eleverna skapar egna matteproblem med hjälp av AI och provar dem på varandra. De bedömer varandras problem: Är det lösbart? Har det rätt svårighetsgrad? Stämmer svaret?',
      },
      {
        title: 'Matematiksamtal med AI',
        duration: '20 min',
        description:
          'Eleverna löser ett problem steg för steg och ber AI förklara varje steg på ett annat sätt. De jämför förklaringarna och väljer den som de tycker är tydligast – och motiverar varför.',
      },
      {
        title: 'Verklighetskopplingen',
        duration: '30 min',
        description:
          'AI ger eleverna en verklig situation (t.ex. planera en klassresa, beräkna materialåtgång). Eleverna identifierar vilken matematik som behövs, löser problemet och presenterar sin lösning.',
      },
    ],
    validityTips: [
      'Kräv alltid att eleverna visar sin tankegång – ett rätt svar utan förklaring säger lite om förståelsen',
      'Använd muntliga prov eller matematiksamtal som komplement till skriftliga prov',
      'Variera uppgiftstyper: procedur, begrepp, resonemang och problemlösning',
      'Låt eleverna lösa uppgifter utan digitala hjälpmedel för att säkerställa grundläggande färdigheter',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  engelska: {
    slug: 'engelska',
    introduction:
      'AI erbjuder engelskundervisningen en samtalspartner som alltid finns tillgänglig. Eleverna kan öva skrivande, få feedback på språklig korrekthet och träna på att formulera sig i olika situationer – utan rädslan för att göra fel inför klasskamrater.',
    aiUseCases: [
      'Skapa autentiska texter och dialoger anpassade efter elevernas språknivå',
      'Generera vocabulary-övningar med kontextuella meningar istället för isolerade glosor',
      'Ge individuell skrivfeedback med fokus på ett grammatiskt område åt gången',
      'Simulera samtalsscenarier som eleverna kan öva på innan muntliga uppgifter',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Nivåanpassad lästext',
        prompt:
          'Write a short text (150–200 words) about [TOPIC] aimed at Swedish students in year [ÅRSKURS]. Use [CEFR-LEVEL] vocabulary. Include 5 comprehension questions: 2 factual, 2 inferential, and 1 personal response question. Write the text in English but the instructions in Swedish.',
      },
      {
        category: 'Bedömning',
        title: 'Bedömningsunderlag muntlig interaktion',
        prompt:
          'Skapa ett bedömningsunderlag för muntlig interaktion i engelska, årskurs [ÅRSKURS]. Inkludera en samtalsuppgift om [ÄMNE], förslag på följdfrågor, och en matris som bedömer flyt, ordförråd, grammatik och interaktionsförmåga på tre nivåer.',
      },
      {
        category: 'Differentiering',
        title: 'Ordförrådsträning i kontext',
        prompt:
          'Skapa en ordförrådsövning om [TEMA] för engelska årskurs [ÅRSKURS]. Ge 10 ord med exempelmeningar i kontext. Skapa tre nivåer av övningar: matching (enkel), fill-in-the-gap (mellan), och skriv egna meningar (avancerad).',
      },
      {
        category: 'Elevstöd',
        title: 'Skrivstöd med exempelmeningar',
        prompt:
          'En elev i årskurs [ÅRSKURS] ska skriva en [TEXTTYP] på engelska om [ÄMNE]. Skapa ett stödark med: useful phrases, sentence starters, linking words och en checklista. Skriv instruktionerna på svenska men fraserna på engelska.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Chat with AI',
        duration: '20 min',
        description:
          'Eleverna chattar med AI på engelska i en given roll (t.ex. turist, jobbintervju). Efteråt markerar de tre meningar de är stolta över och tre de vill förbättra.',
      },
      {
        title: 'Error hunt',
        duration: '15 min',
        description:
          'AI genererar en kort text med 5–8 grammatiska fel. Eleverna hittar felen, kategoriserar dem (ordföljd, tempus, preposition etc.) och rättar dem.',
      },
      {
        title: 'Translation workshop',
        duration: '25 min',
        description:
          'Eleverna översätter en kort svensk text till engelska. De jämför sedan med AI:s översättning och diskuterar skillnaderna – vilken version låter mest naturlig och varför?',
      },
      {
        title: 'Vocabulary challenge',
        duration: '20 min',
        description:
          'AI ger eleverna 5 nya ord i kontext. Eleverna ska använda alla 5 orden i en egen kort berättelse. De byter berättelser med en kompis som kontrollerar att orden används korrekt.',
      },
    ],
    validityTips: [
      'Bedöm receptiva och produktiva förmågor separat – en elev kan förstå mer än den kan producera',
      'Använd bedömningssituationer där eleven inte har tillgång till AI för att mäta faktisk språknivå',
      'Kombinera skriftliga och muntliga bedömningar – AI-assisterad text speglar inte alltid muntlig förmåga',
      'Ge eleverna möjlighet att visa sin förmåga genom varierade uppgiftsformat',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  so: {
    slug: 'so',
    introduction:
      'I SO-ämnena kan AI hjälpa elever att utforska komplexa samhällsfrågor från flera perspektiv. Det är särskilt kraftfullt för att skapa källkritiska övningar, simulera historiska scenarier och stödja elevernas förmåga att resonera om samband och orsaker.',
    aiUseCases: [
      'Generera källkritiska övningar med konstruerade källor av varierande trovärdighet',
      'Skapa perspektivövningar där AI argumenterar från olika ståndpunkter',
      'Producera differentierade faktatexter om samhällsfenomen och historiska skeenden',
      'Bygga scenariobaserade uppgifter för samhällskunskap och geografi',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Källkritisk övning',
        prompt:
          'Skapa en källkritisk övning om [HISTORISKT SKEENDE/SAMHÄLLSFRÅGA] för årskurs [ÅRSKURS]. Generera 3 fiktiva källor med olika trovärdighet (en tillförlitlig, en vinklad, en opålitlig). Bifoga analysfrågor som guidar eleverna genom de källkritiska kriterierna.',
      },
      {
        category: 'Bedömning',
        title: 'Resonemangsfrågor med bedömningsstöd',
        prompt:
          'Skapa 3 resonemangsfrågor om [ÄMNESOMRÅDE] i [ÄMNE] för årskurs [ÅRSKURS]. Frågorna ska kräva att eleven visar orsak-verkan-resonemang och använder begrepp. Ge exempelsvar på grundläggande och fördjupad nivå för varje fråga.',
      },
      {
        category: 'Differentiering',
        title: 'Faktatext i tre nivåer',
        prompt:
          'Skriv en faktatext om [ÄMNE] på tre nivåer för årskurs [ÅRSKURS]: en kortare version med enklare språk, en standardversion, och en fördjupad version med fler perspektiv och begrepp. Alla versioner ska täcka samma kärninnehåll.',
      },
      {
        category: 'Elevstöd',
        title: 'Begreppskarta med stöd',
        prompt:
          'Skapa en ifyllbar begreppskarta om [TEMA] för årskurs [ÅRSKURS] i [ÄMNE]. Inkludera nyckelbegrepp, deras definitioner och kopplingar dem emellan. Ge en halvifylld version som stöd för elever som behöver hjälp.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Perspektivdebatten',
        duration: '30 min',
        description:
          'AI genererar argument för och emot en samhällsfråga (t.ex. kärnkraft, EU-medlemskap). Eleverna väljer sida, fördjupar argumenten och debatterar. Efteråt reflekterar de över motsidans starkaste argument.',
      },
      {
        title: 'Tidsvittnet',
        duration: '25 min',
        description:
          'AI agerar som en person från en viss historisk period. Eleverna intervjuar "tidsvittnet" och bedömer sedan kritiskt vilka svar som verkar trovärdiga och vilka som kan vara felaktiga.',
      },
      {
        title: 'Källkritiska labbet',
        duration: '20 min',
        description:
          'Eleverna får tre AI-genererade nyhetsartiklar om samma händelse men med olika vinklingar. De analyserar artiklarna med källkritiska frågor och rangordnar trovärdigheten.',
      },
      {
        title: 'Framtidsscenariot',
        duration: '35 min',
        description:
          'AI skapar ett scenario om en global utmaning (klimat, migration, resursbrist). Eleverna arbetar i grupper med att analysera orsaker, konsekvenser och möjliga lösningar utifrån olika perspektiv.',
      },
    ],
    validityTips: [
      'Bedöm elevernas resonemang och användning av begrepp – inte faktakunskaper som AI lätt kan ge',
      'Ställ följdfrågor muntligt för att säkerställa att eleverna förstår sina skriftliga resonemang',
      'Använd öppna frågor som kräver egna ställningstaganden och värderingar',
      'Kontrollera att eleverna kan tillämpa sin kunskap på nya, okända situationer',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  no: {
    slug: 'no',
    introduction:
      'AI kan ge NO-undervisningen ett lyft genom att skapa tydliga förklaringar av abstrakta naturvetenskapliga fenomen, generera laborationshandledningar och hjälpa eleverna att öva på det naturvetenskapliga arbetssättet med hypoteser och slutsatser.',
    aiUseCases: [
      'Förklara abstrakta naturvetenskapliga begrepp med vardagliga analogier',
      'Generera laborationshandledningar med riskbedömning och differentierade frågeställningar',
      'Skapa formativa frågor som avslöjar vanliga missuppfattningar inom biologi, fysik och kemi',
      'Producera fallstudier och scenariouppgifter om hållbar utveckling och ekologiska samband',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Laborationshandledning',
        prompt:
          'Skapa en laborationshandledning om [ÄMNESOMRÅDE] för årskurs [ÅRSKURS]. Inkludera: syfte, hypotes-mall, materiallista, steg-för-steg-instruktion, säkerhetsföreskrifter, och analysfrågor som leder eleven från observation till slutsats.',
      },
      {
        category: 'Bedömning',
        title: 'Missuppfattningstest',
        prompt:
          'Skapa ett diagnostiskt test om [BEGREPP] inom [ÄMNE] för årskurs [ÅRSKURS] med 6 frågor. Varje felsvar ska representera en vanlig missuppfattning. Ange vilken missuppfattning varje felaktigt svarsalternativ testar och ge förslag på hur läraren kan bemöta den.',
      },
      {
        category: 'Differentiering',
        title: 'Förklaring på tre nivåer',
        prompt:
          'Förklara [NATURVETENSKAPLIGT FENOMEN] på tre nivåer: en vardaglig förklaring med analogi, en förklaring med korrekta begrepp för årskurs [ÅRSKURS], och en fördjupad förklaring med modeller och samband. Markera nyckelbegrepp i varje nivå.',
      },
      {
        category: 'Elevstöd',
        title: 'Labbrapportsmall med stöd',
        prompt:
          'Skapa en mall för en labbrapport om [LABORATION] för årskurs [ÅRSKURS]. Inkludera rubriker, förklaringar av vad som ska stå under varje rubrik, exempelformuleringar och en checklista. Ge extra stöd för hypotes- och slutsatsdelen.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Hypotesmaskinen',
        duration: '20 min',
        description:
          'Eleverna formulerar en hypotes om ett fenomen. AI genererar ett (fiktivt) experimentresultat. Eleverna analyserar om resultatet stöder eller motbevisar hypotesen och formulerar en slutsats.',
      },
      {
        title: 'Begreppsutmaningen',
        duration: '15 min',
        description:
          'AI ger en vardaglig förklaring av ett fenomen (t.ex. "saker faller nedåt"). Eleverna ska förbättra förklaringen med korrekta naturvetenskapliga begrepp och jämföra med AI:s vetenskapliga version.',
      },
      {
        title: 'Hållbarhetsdetektiven',
        duration: '30 min',
        description:
          'AI skapar en fallstudie om en miljöfråga med data och diagram. Eleverna analyserar informationen, identifierar orsaker och konsekvenser och föreslår åtgärder baserade på naturvetenskaplig kunskap.',
      },
      {
        title: 'Forskningsfronten',
        duration: '25 min',
        description:
          'AI sammanfattar ett aktuellt forskningsämne (t.ex. biodrivmedel, antibiotikaresistens). Eleverna formulerar egna frågor, bedömer trovärdigheten i AI:s svar och diskuterar vetenskapens roll i samhället.',
      },
    ],
    validityTips: [
      'Kräv att eleverna genomför laborationer praktiskt – AI kan inte ersätta den praktiska erfarenheten',
      'Bedöm elevernas förmåga att koppla teori till egna observationer, inte bara återge fakta',
      'Använd muntliga genomgångar där eleverna förklarar begrepp med egna ord',
      'Låt eleverna analysera nya data eller fenomen de inte sett förut för att testa verklig förståelse',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  teknik: {
    slug: 'teknik',
    introduction:
      'Teknikundervisningen handlar om att lösa problem, förstå tekniska system och utveckla konstruktioner. AI kan stödja designprocessen genom att hjälpa eleverna generera idéer, utvärdera lösningar och förstå hur tekniska system hänger ihop.',
    aiUseCases: [
      'Stödja idégenereringsfasen i designprocessen med varierade lösningsförslag',
      'Generera tekniska problemscenarier kopplade till vardagen och hållbar utveckling',
      'Skapa förklaringar av tekniska system med fokus på komponenter och samband',
      'Producera utvärderingsmallar för elevernas konstruktioner och prototyper',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Designuppdrag med kravspecifikation',
        prompt:
          'Skapa ett designuppdrag för årskurs [ÅRSKURS] inom området [TEKNIKOMRÅDE]. Uppdraget ska innehålla: en problemsituation, en kravspecifikation med tydliga kriterier, materialförslag och tidsplan. Inkludera reflektionsfrågor om hållbarhet.',
      },
      {
        category: 'Bedömning',
        title: 'Utvärderingsmall för konstruktion',
        prompt:
          'Skapa en utvärderingsmall som elever i årskurs [ÅRSKURS] kan använda för att bedöma sin [TYP AV KONSTRUKTION]. Mallen ska bedöma funktion, hållbarhet, estetik och hur väl konstruktionen uppfyller kravspecifikationen. Inkludera frågor om förbättringsmöjligheter.',
      },
      {
        category: 'Differentiering',
        title: 'Tekniskt system – fördjupning',
        prompt:
          'Förklara hur [TEKNISKT SYSTEM] fungerar för årskurs [ÅRSKURS]. Ge en grundläggande förklaring med vardagsspråk, en version med tekniska begrepp, och en fördjupad version som beskriver systemets koppling till andra system och hållbarhetsaspekter.',
      },
      {
        category: 'Elevstöd',
        title: 'Ritningsstöd och dokumentation',
        prompt:
          'Skapa en handledning för teknisk dokumentation av en [KONSTRUKTION] i årskurs [ÅRSKURS]. Inkludera: guide för att rita vyer (ovanifrån, framifrån, sidan), hur man anger mått, materiallista och förbättringsförslag. Ge visuella exempelbeskrivningar.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Idéexplosionen',
        duration: '20 min',
        description:
          'Eleverna får ett designproblem och brainstormar egna lösningar i 5 minuter. Sedan ber de AI om 5 alternativa lösningar. De jämför och väljer den bästa idén att utveckla – och motiverar varför.',
      },
      {
        title: 'Systemkartläggaren',
        duration: '25 min',
        description:
          'Eleverna väljer ett vardagligt tekniskt system (t.ex. en cykel, en brödrost). De ritar ett blockschema och ber sedan AI beskriva systemet. De jämför sin karta med AI:s och fyller i det de missat.',
      },
      {
        title: 'Kraschtest-analysen',
        duration: '30 min',
        description:
          'AI presenterar en konstruktion som har brister. Eleverna identifierar svagheterna, föreslår förbättringar och motiverar sina val utifrån materialegenskaper och funktion.',
      },
      {
        title: 'Framtidens lösning',
        duration: '35 min',
        description:
          'AI beskriver ett framtida samhällsproblem (t.ex. vattenrening, energilagring). Eleverna arbetar i grupper med att designa en teknisk lösning, dokumentera den och presentera med för- och nackdelar.',
      },
    ],
    validityTips: [
      'Bedöm hela designprocessen, inte bara slutprodukten – dokumentation och reflektion är centrala',
      'Låt eleverna genomföra konstruktioner fysiskt för att visa praktisk förmåga',
      'Ställ frågor om materialval och funktionsprinciper muntligt vid elevens konstruktion',
      'Kontrollera att eleverna kan förklara sina designval – inte bara presentera ett AI-förslag',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  'moderna-sprak': {
    slug: 'moderna-sprak',
    introduction:
      'AI kan fungera som en ständigt tillgänglig språkträningspartner i moderna språk. Eleverna kan öva på att formulera sig i autentiska situationer på målspråket, få direkt feedback och bygga ordförråd i meningsfulla kontexter.',
    aiUseCases: [
      'Simulera vardagliga samtalssituationer på målspråket för muntlig träning',
      'Skapa kontextuella ordförrådsövningar anpassade efter aktuellt tema',
      'Generera nivåanpassade texter på målspråket med tillhörande övningar',
      'Ge skrivfeedback med fokus på specifika grammatiska strukturer',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Kommunikativ övning',
        prompt:
          'Skapa en kommunikativ övning på [MÅLSPRÅK] för elever i årskurs [ÅRSKURS] (nybörjarnivå/steg [STEG]). Temat är [TEMA]. Övningen ska inkludera: en kort modeldialog, nyckelfraser, en paröverning och en utmaning för snabbare elever. Skriv instruktionerna på svenska.',
      },
      {
        category: 'Bedömning',
        title: 'Muntligt bedömningsunderlag',
        prompt:
          'Skapa ett bedömningsunderlag för en muntlig uppgift på [MÅLSPRÅK], steg [STEG]. Uppgiften handlar om [ÄMNE]. Inkludera samtalsuppgift, förslag på följdfrågor på målspråket och en bedömningsmatris som bedömer flyt, ordförråd, uttal och interaktion.',
      },
      {
        category: 'Differentiering',
        title: 'Grammatikövning i tre steg',
        prompt:
          'Skapa en grammatikövning om [GRAMMATISK STRUKTUR] på [MÅLSPRÅK] i tre steg: igenkänning (matcha rätt form), ifyllnad (komplettera meningar) och produktion (skriv egna meningar). Ge tydliga exempelmeningar för varje steg.',
      },
      {
        category: 'Elevstöd',
        title: 'Frasbank till skrivuppgift',
        prompt:
          'Skapa en frasbank på [MÅLSPRÅK] för en skrivuppgift om [ÄMNE] riktad till steg [STEG]. Inkludera: inledningsfraser, sambandsord, åsiktsuttryck och avslutningsfraser. Ge svensk översättning bredvid varje fras.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Rollspelschatten',
        duration: '20 min',
        description:
          'Eleverna chattar med AI på målspråket i en given situation (beställa mat, fråga om vägen). De sparar konversationen och markerar fraser de vill lära sig.',
      },
      {
        title: 'Översättningsverkstaden',
        duration: '25 min',
        description:
          'Eleverna skriver en kort text på svenska och översätter den till målspråket. De jämför med AI:s översättning och identifierar skillnader i ordval och grammatik.',
      },
      {
        title: 'Ordjakten',
        duration: '15 min',
        description:
          'AI ger eleverna 8 nya ord i meningar på målspråket. Eleverna gissar betydelsen utifrån kontexten och kontrollerar sedan. De som hinner skriver egna meningar med orden.',
      },
      {
        title: 'Kulturmötet',
        duration: '30 min',
        description:
          'AI berättar om en kulturell företeelse i ett land där målspråket talas. Eleverna jämför med Sverige, formulerar frågor på målspråket och diskuterar likheter och skillnader.',
      },
    ],
    validityTips: [
      'Bedöm elevernas muntliga produktion separat från den skriftliga – AI kan hjälpa med text men inte med uttal',
      'Skapa bedömningssituationer där eleven kommunicerar spontant utan förberedelse',
      'Kontrollera att eleverna förstår de fraser de använder, inte bara kopierar dem',
      'Variera bedömningstillfällena över tid för att fånga elevens faktiska progression',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  idrott: {
    slug: 'idrott',
    introduction:
      'AI kan stödja idrottslärare med planering av varierade träningspass, skapande av differentierade rörelseuppgifter och utveckling av material kring hälsa och livsstil. Det praktiska utövandet kan aldrig ersättas, men planeringen kan effektiviseras.',
    aiUseCases: [
      'Skapa differentierade träningspass med progressioner för olika nivåer',
      'Generera teoretiskt material om hälsa, kost och träningslära',
      'Producera bedömningsunderlag för rörelseförmåga och samspel',
      'Utveckla material för elevernas reflektion kring fysisk aktivitet och hälsa',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Lektionsplanering med differentiering',
        prompt:
          'Skapa en lektionsplanering i idrott och hälsa för årskurs [ÅRSKURS] med fokus på [RÖRELSEOMRÅDE]. Lektionen ska vara 60 minuter och innehålla uppvärmning, huvudaktivitet och avslutning. Ge tre nivåer av utmaning och inkludera samarbetsmoment.',
      },
      {
        category: 'Bedömning',
        title: 'Observationsprotokoll',
        prompt:
          'Skapa ett observationsprotokoll för att bedöma elevers [RÖRELSEFÖRMÅGA] i årskurs [ÅRSKURS]. Protokollet ska ha tydliga kriterier för tre nivåer och vara praktiskt att använda under pågående lektion (kryssformat med korta beskrivningar).',
      },
      {
        category: 'Differentiering',
        title: 'Anpassade rörelseuppgifter',
        prompt:
          'Ge tre varianter av övningen [ÖVNING] med ökande svårighetsgrad för årskurs [ÅRSKURS]. Varje variant ska beskriva utförande, vanliga fel och tips. Inkludera en anpassning för elever med nedsatt rörelseförmåga.',
      },
      {
        category: 'Elevstöd',
        title: 'Hälsoreflektion',
        prompt:
          'Skapa reflektionsfrågor om [HÄLSOASPEKT] för elever i årskurs [ÅRSKURS]. Frågorna ska hjälpa eleverna reflektera över sin egen fysiska aktivitet, hälsa och livsstil utan att vara dömande. Inkludera stödfrågor för elever som har svårt att reflektera.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Rörelsecoachen',
        duration: '10 min',
        description:
          'Eleverna ber AI beskriva tekniken för en rörelse (t.ex. överarmskast, kullerbytta). De läser beskrivningen, övar rörelsen och jämför med känslan – stämmer instruktionen? Vad saknas?',
      },
      {
        title: 'Träningsprogrammet',
        duration: '25 min',
        description:
          'Eleverna skapar ett personligt träningsprogram med AI:s hjälp utifrån ett mål (t.ex. ökad uthållighet). De genomför en del av programmet och utvärderar: Var intensiteten rätt? Vad skulle de ändra?',
      },
      {
        title: 'Hälsomyten',
        duration: '20 min',
        description:
          'AI presenterar 5 påståenden om hälsa och träning – en blandning av fakta och myter. Eleverna tar ställning, diskuterar i grupp och kontrollerar med tillförlitliga källor.',
      },
      {
        title: 'Speldesignern',
        duration: '30 min',
        description:
          'Eleverna ger AI kriterier (antal spelare, material, rörelsetyp) och får förslag på en lek eller ett spel. De testar spelet, utvärderar och föreslår regeländringar för att göra det roligare.',
      },
    ],
    validityTips: [
      'Bedöm alltid rörelseförmåga genom praktisk observation – teoretisk kunskap räcker inte',
      'Dokumentera bedömningar löpande under flera lektioner, inte vid ett enstaka tillfälle',
      'Använd video (med samtycke) som komplement för att kunna analysera rörelser i efterhand',
      'Bedöm både individuell förmåga och förmåga att samspela och anpassa sig i grupp',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  musik: {
    slug: 'musik',
    introduction:
      'AI kan stödja musiklärare med att skapa övningsmaterial, generera texter och ackordföljder samt förklara musikteori på ett tillgängligt sätt. Det praktiska musicerandet förblir kärnan, men AI kan hjälpa till med planering och differentiering.',
    aiUseCases: [
      'Generera lättlästa texter att sjunga till befintliga melodier i olika genrer',
      'Skapa musikteoriövningar anpassade efter elevernas förkunskaper',
      'Producera lyssningsuppgifter med analysfrågor om musikaliska element',
      'Utveckla bedömningsunderlag för ensemble och musicerande',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Lyssningsanalys',
        prompt:
          'Skapa en lyssningsuppgift för årskurs [ÅRSKURS] om [GENRE/STILPERIOD]. Inkludera 3 lyssningsexempel (beskriv dem, ange inte specifika låtar), analysfrågor om tempo, dynamik, instrumentation och form, samt en jämförelsefråga mellan två av styckena.',
      },
      {
        category: 'Bedömning',
        title: 'Bedömningsmatris för ensemblespel',
        prompt:
          'Skapa en bedömningsmatris för ensemblespel i årskurs [ÅRSKURS]. Bedöm: rytmisk säkerhet, samspel med andra, dynamik och uttryck. Tre nivåer med tydliga, observerbara kriterier. Matrisen ska vara praktisk att använda under pågående musicerande.',
      },
      {
        category: 'Differentiering',
        title: 'Ackordövning i nivåer',
        prompt:
          'Skapa övningar för att spela ackorden [ACKORD] på [INSTRUMENT] i tre nivåer: grundläggande (byta mellan två ackord), mellan (spela till en enkel låt med strummönster), avancerad (lägga till basgångar eller arpeggion). Beskriv greppbilder tydligt.',
      },
      {
        category: 'Elevstöd',
        title: 'Stöd för sångtextskrivande',
        prompt:
          'Skapa en stödmall för att skriva en sångtext om [TEMA] för årskurs [ÅRSKURS]. Inkludera: tips om vers- och refrängstruktur, rimförslag, känsloord kopplade till temat och en checklista. Ge ett kort exempel (4 rader) som inspiration, inte som färdig text.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Genreresan',
        duration: '25 min',
        description:
          'AI beskriver karaktärsdragen för tre musikgenrer. Eleverna lyssnar på korta klipp och kopplar dem till rätt genre. De diskuterar: Vilka musikaliska element gör att det låter som just den genren?',
      },
      {
        title: 'Textverkstaden',
        duration: '30 min',
        description:
          'Eleverna ger AI ett tema och en känsla. AI föreslår en versstruktur och rimförslag. Eleverna skriver en egen sångtext, sätter den till en bekant melodi och framför den för en kompis.',
      },
      {
        title: 'Rytmbyggaren',
        duration: '15 min',
        description:
          'AI genererar ett rytmpattern (beskrivet med stavelser, t.ex. "ta ta ti-ti ta"). Eleverna övar, spelar det i grupp och lägger sedan till variationer. De skapar ett helt komp tillsammans.',
      },
      {
        title: 'Musikrecensenten',
        duration: '20 min',
        description:
          'Eleverna lyssnar på en låt och skriver en kort recension med musikaliska begrepp. De ber AI skriva en recension av samma stycke och jämför: Vilka begrepp använde AI som eleven missade?',
      },
    ],
    validityTips: [
      'Bedöm musicerande genom praktisk observation, inte genom skriftliga prov om musikteori',
      'Ge eleverna flera tillfällen att visa sin förmåga – dagsform påverkar musicerande',
      'Bedöm ensemblespel och solospel separat för att få en helhetsbild',
      'Låt eleverna reflektera muntligt kring sina musikaliska val för att komplettera det praktiska',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  bild: {
    slug: 'bild',
    introduction:
      'AI-bildgenerering öppnar nya möjligheter i bildundervisningen. Eleverna kan utforska komposition, färglära och stilar digitalt, men framförallt kan AI användas som referens och inspiration – inte som ersättning för det egna skapandet.',
    aiUseCases: [
      'Skapa referensbilder och moodboards för att inspirera elevernas eget skapande',
      'Generera bildanalyser som eleverna kan jämföra med sina egna tolkningar',
      'Producera övningar kring komposition, färg, form och visuell kommunikation',
      'Utveckla material kring bildspråk, reklam och visuella budskap i samhället',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Bildanalysövning',
        prompt:
          'Skapa en bildanalysövning för årskurs [ÅRSKURS] kring temat [TEMA]. Beskriv 3 typer av bilder eleverna ska analysera (t.ex. en reklambild, ett konstverk, en nyhetsbild). Inkludera analysfrågor om komposition, färg, budskap och målgrupp.',
      },
      {
        category: 'Bedömning',
        title: 'Processdagbok med bedömningsstöd',
        prompt:
          'Skapa en mall för processdagbok i bild för årskurs [ÅRSKURS]. Mallen ska guida eleven genom: idé och inspiration, skisser och val, genomförande och reflektion. Inkludera bedömningskriterier och stödfrågor för varje fas.',
      },
      {
        category: 'Differentiering',
        title: 'Kompositionsövningar',
        prompt:
          'Skapa tre kompositionsövningar för årskurs [ÅRSKURS] med ökande komplexitet: en enkel övning om symmetri/asymmetri, en om tredjedelsregeln med förgrund och bakgrund, och en avancerad om att medvetet bryta kompositionsregler för effekt.',
      },
      {
        category: 'Elevstöd',
        title: 'Färgteori med praktisk koppling',
        prompt:
          'Förklara [FÄRGTEORIBEGREPP] för elever i årskurs [ÅRSKURS]. Ge en tydlig förklaring, ett vardagsexempel och en kort praktisk övning eleven kan göra för att förstå begreppet. Inkludera tips om hur det kan användas i det egna bildskapandet.',
      },
    ],
    lessonIdeas: [
      {
        title: 'AI vs. konstnären',
        duration: '30 min',
        description:
          'Eleverna jämför AI-genererade bilder med konstverk av mänskliga konstnärer. De diskuterar: Vad skiljer dem åt? Kan AI vara kreativ? Vad gör konst till konst? Avslutas med en skriftlig reflektion.',
      },
      {
        title: 'Prompten som skiss',
        duration: '25 min',
        description:
          'Eleverna skriver detaljerade bildbeskrivningar (prompts) utan att generera bilder. De byter med varandra och tecknar den andras prompt. De jämför resultaten och diskuterar skillnaden mellan ord och bild.',
      },
      {
        title: 'Reklamgranskning',
        duration: '20 min',
        description:
          'AI hjälper eleverna analysera reklambilder: Vilka tekniker används? Vilken målgrupp riktar sig bilden till? Eleverna skapar sedan en egen bild med ett medvetet visuellt budskap.',
      },
      {
        title: 'Stilresan',
        duration: '35 min',
        description:
          'Eleverna väljer ett motiv och skapar det i tre olika stilar (t.ex. realistiskt, kubistiskt, minimalistiskt). De reflekterar över hur stilen påverkar uttrycket och presenterar sina val.',
      },
    ],
    validityTips: [
      'Bedöm den kreativa processen, inte bara slutprodukten – processdagboken är central',
      'Säkerställ att eleverna skapar med egna händer, inte bara med AI-verktyg',
      'Ställ frågor om elevernas val av material, teknik och uttryck för att bedöma medvetenhet',
      'Kombinera praktiskt skapande med muntlig eller skriftlig reflektion kring arbetet',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  slojd: {
    slug: 'slojd',
    introduction:
      'I slöjden är det praktiska hantverket centralt och kan inte ersättas av AI. Däremot kan AI stödja idéfasen, hjälpa med ritningar och mått, generera instruktioner och stärka elevernas förmåga att dokumentera och utvärdera sin slöjdprocess.',
    aiUseCases: [
      'Stödja designfasen med idéer, skisser och materialförslag',
      'Generera steg-för-steg-instruktioner för olika slöjdtekniker',
      'Skapa dokumentationsmallar för slöjdprocessen',
      'Producera material om hållbarhet, materialval och historiska hantverkstraditioner',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Slöjdprojekt med hållbarhetsfokus',
        prompt:
          'Skapa ett slöjdprojekt i [MATERIAL: trä/textil/metall] för årskurs [ÅRSKURS]. Projektet ska ha koppling till hållbar utveckling (t.ex. återbruk, reparation). Inkludera: projektbeskrivning, materiallista, tidsuppskattning, tekniker som övas och reflektionsfrågor.',
      },
      {
        category: 'Bedömning',
        title: 'Processbedömning slöjd',
        prompt:
          'Skapa ett bedömningsunderlag för slöjdprocessen i årskurs [ÅRSKURS]. Bedöm: idé och planering, genomförande och hantverk, problemlösning under arbetet, och reflektion över resultat. Ge tydliga nivåbeskrivningar och fokusera på processen, inte produkten.',
      },
      {
        category: 'Differentiering',
        title: 'Teknikinstruktion i nivåer',
        prompt:
          'Beskriv tekniken [SLÖJDTEKNIK] för årskurs [ÅRSKURS] i tre nivåer: en förenklad instruktion med bildstöd-beskrivningar, en standardinstruktion med tekniska termer, och en utmanande variant med en avancerad tillämpning. Inkludera vanliga misstag att undvika.',
      },
      {
        category: 'Elevstöd',
        title: 'Processdagbok för slöjd',
        prompt:
          'Skapa en processdagbok-mall för ett slöjdprojekt i årskurs [ÅRSKURS]. Inkludera sidor för: skisser och idéer, materialval med motivering, bilder/beskrivningar av arbetets gång, problem och lösningar, samt utvärdering. Ge stödfrågor på varje sida.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Designverkstaden',
        duration: '20 min',
        description:
          'Eleverna beskriver vad de vill skapa och ger AI kriterier (material, funktion, storlek). AI ger tre designförslag. Eleverna kombinerar idéer, ritar en egen skiss och motiverar sina val innan de börjar tillverka.',
      },
      {
        title: 'Teknikexperten',
        duration: '15 min',
        description:
          'AI förklarar en slöjdteknik (t.ex. fingerskarv, fällsöm). Eleverna läser instruktionen, provar tekniken och bedömer sedan: Var instruktionen tydlig? Vad fattades? De skriver en förbättrad version.',
      },
      {
        title: 'Materialdetektiven',
        duration: '20 min',
        description:
          'Eleverna undersöker ett materials egenskaper praktiskt (böja, dra, fukt). AI ger information om materialets egenskaper. Eleverna jämför sin praktiska erfarenhet med AI:s beskrivning och diskuterar skillnaderna.',
      },
      {
        title: 'Återbrukaren',
        duration: '30 min',
        description:
          'Eleverna har ett uttjänt föremål. AI ger förslag på hur det kan återanvändas eller göras om. Eleverna väljer en idé, planerar och påbörjar arbetet. Efteråt utvärderar de hållbarhetsaspekten.',
      },
    ],
    validityTips: [
      'Hela slöjdprocessen ska bedömas – idé, planering, genomförande och utvärdering',
      'Observera eleverna under arbetet för att bedöma deras hantverk och problemlösning',
      'Dokumentation (foto, processdagbok) kompletterar observationen men ersätter den inte',
      'Ställ frågor om materialval och teknikval för att bedöma elevernas medvetenhet om processen',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },

  hkk: {
    slug: 'hkk',
    introduction:
      'AI kan hjälpa hem- och konsumentkunskapslärare med att skapa varierade recept anpassade efter allergier och preferenser, generera material om konsumenträtt och privatekonomi, samt utveckla uppgifter som kopplar matlagning till hälsa och hållbarhet.',
    aiUseCases: [
      'Anpassa recept efter allergier, kostpreferenser och budget',
      'Skapa övningar kring konsumenträtt, privatekonomi och hållbar konsumtion',
      'Generera material om näringslära och hälsosamma matvanor',
      'Producera jämförelseuppgifter om miljöpåverkan och hållbara val i vardagen',
    ],
    examplePrompts: [
      {
        category: 'Planering',
        title: 'Matlagningslektion med anpassningar',
        prompt:
          'Planera en matlagningslektion i HKK för årskurs [ÅRSKURS] med fokus på [MATTEMA]. Inkludera: recept för 4 portioner, anpassningar för laktos- och glutenintolerans, tidsplan för 80 minuter, hygienmoment och reflektionsfrågor om hälsa och hållbarhet.',
      },
      {
        category: 'Bedömning',
        title: 'Bedömningsmatris för matlagning',
        prompt:
          'Skapa en bedömningsmatris för matlagning i HKK, årskurs [ÅRSKURS]. Bedöm: planering och organisation, hantering av redskap, hygien och säkerhet, samarbete samt slutresultat (smak, presentation). Tre nivåer med konkreta, observerbara beskrivningar.',
      },
      {
        category: 'Differentiering',
        title: 'Privatekonomisk uppgift i nivåer',
        prompt:
          'Skapa en uppgift om [PRIVATEKONOMISKT TEMA] för årskurs [ÅRSKURS] i tre nivåer: en grundläggande nivå med stödberäkningar, en standardnivå med öppnare frågor, och en fördjupad nivå med jämförelser och analys. Koppla till elevernas vardag.',
      },
      {
        category: 'Elevstöd',
        title: 'Receptanpassning och guide',
        prompt:
          'Ta detta recept: [RECEPT]. Skapa en elevvänlig version med: steg-för-steg-bilder beskrivna i text, förklaringar av svåra begrepp (t.ex. "sjuda", "bryna"), tidsmarkeringar och en enklare variant för nybörjare. Ange näringsinformation per portion.',
      },
    ],
    lessonIdeas: [
      {
        title: 'Budgetutmaningen',
        duration: '25 min',
        description:
          'Eleverna får en budget på 200 kr och ska planera middagar för en familj i tre dagar. AI hjälper med prisuppskattningar och receptförslag. Eleverna jämför näringsinnehåll, kostnad och miljöpåverkan.',
      },
      {
        title: 'Reklamgranskaren',
        duration: '20 min',
        description:
          'AI genererar fiktiva reklamerbjudanden (3 för 2, storpack, lojalitetsprogram). Eleverna beräknar om erbjudandena faktiskt är förmånliga och diskuterar konsumentfällor.',
      },
      {
        title: 'Klimattallriken',
        duration: '25 min',
        description:
          'Eleverna skapar en måltid och ber AI uppskatta klimatpåverkan för varje ingrediens. De gör medvetna byten (t.ex. bönor istället för nötkött) och ser hur det påverkar totalutsläppet.',
      },
      {
        title: 'Allergianpassaren',
        duration: '15 min',
        description:
          'Eleverna får ett standardrecept och en fiktiv gäst med en allergi. De ber AI föreslå anpassningar, utvärderar förslagen och diskuterar: Påverkas smak och konsistens? Vilka alternativ finns?',
      },
    ],
    validityTips: [
      'Bedöm praktisk matlagning genom observation – en elev som kan skriva ett recept kan inte nödvändigtvis laga maten',
      'Observera hygien och säkerhet löpande under lektionerna',
      'Kombinera praktiska och teoretiska moment – t.ex. beräkna näringsvärde och sedan laga rätten',
      'Ställ reflektionsfrågor om val (varför valde du detta livsmedel?) för att bedöma medvetenhet',
    ],
    curriculumDisclaimer: CURRICULUM_DISCLAIMER,
  },
}
