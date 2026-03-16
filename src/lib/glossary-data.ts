export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  example?: string
  relatedTerms?: string[]
  category: 'grundläggande' | 'promptteknik' | 'verktyg' | 'etik' | 'tekniskt'
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'ai',
    term: 'AI (Artificiell Intelligens)',
    definition:
      'Samlingsbegrepp för datorprogram som kan utföra uppgifter som vanligtvis kräver mänsklig intelligens, till exempel att förstå språk, känna igen mönster eller fatta beslut.',
    example:
      'En lärare kan använda AI för att generera förslag på lektionsplaneringar, skapa differentierade uppgifter eller ge elever individuell återkoppling.',
    relatedTerms: ['generativ-ai', 'llm', 'chatbot'],
    category: 'grundläggande',
  },
  {
    id: 'generativ-ai',
    term: 'Generativ AI',
    definition:
      'En typ av AI som kan skapa nytt innehåll som text, bilder, kod eller ljud baserat på mönster den lärt sig från träningsdata.',
    example:
      'ChatGPT och Gemini är generativa AI-verktyg som kan skriva texter, sammanfatta artiklar eller brainstorma idéer för undervisningen.',
    relatedTerms: ['ai', 'llm', 'multimodal-ai'],
    category: 'grundläggande',
  },
  {
    id: 'llm',
    term: 'LLM (Large Language Model)',
    definition:
      'En stor språkmodell som tränats på enorma mängder text för att förstå och generera naturligt språk. LLM:er är grunden i verktyg som ChatGPT och Gemini.',
    example:
      'GPT-4, Claude och Gemini är alla LLM:er. De kan svara på frågor, skriva texter och analysera innehåll men de "förstår" inte text på samma sätt som människor.',
    relatedTerms: ['ai', 'modell', 'parameter', 'token'],
    category: 'tekniskt',
  },
  {
    id: 'prompt',
    term: 'Prompt',
    definition:
      'Den instruktion eller fråga du skriver till ett AI-verktyg. Promptens kvalitet avgör i hög grad kvaliteten på svaret du får tillbaka.',
    example:
      'Istället för att skriva "Ge mig en uppgift om fotosyntesen" kan du skriva "Skapa en laborationsuppgift om fotosyntesen för årskurs 8 med tydliga instruktioner och bedömningskriterier kopplat till Lgr22."',
    relatedTerms: ['rukf', 'few-shot-prompting', 'zero-shot-prompting', 'iterera'],
    category: 'grundläggande',
  },
  {
    id: 'hallucination',
    term: 'Hallucination',
    definition:
      'När en AI-modell genererar information som låter trovärdig men som är felaktig eller helt påhittad. Modellen "hittar på" fakta, källor eller händelser.',
    example:
      'Om du ber en AI att lista forskningsartiklar om formativ bedömning kan den ibland hitta på artiklar med påhittade författare och titlar som ser äkta ut. Kontrollera alltid källorna!',
    relatedTerms: ['kallforankring', 'temperatur'],
    category: 'grundläggande',
  },
  {
    id: 'token',
    term: 'Token',
    definition:
      'Den minsta enheten som en språkmodell arbetar med. Ett token kan vara ett helt ord, en del av ett ord eller ett skiljetecken. På svenska är ett token ungefär 3–4 tecken.',
    example:
      'Ordet "undervisning" kan delas upp i flera tokens. Antalet tokens påverkar både kostnad och hur mycket text du kan skicka till AI:n i en och samma konversation.',
    relatedTerms: ['kontextfonster', 'llm'],
    category: 'tekniskt',
  },
  {
    id: 'kontextfonster',
    term: 'Kontextfönster',
    definition:
      'Den maximala mängden text (mätt i tokens) som en AI-modell kan ta emot och bearbeta i en enda konversation. Allt utanför kontextfönstret "glöms bort".',
    example:
      'Om du har en lång konversation med ChatGPT och den börjar "glömma" saker du sa tidigare har du troligen nått gränsen för kontextfönstret. Börja då en ny konversation med de viktigaste instruktionerna.',
    relatedTerms: ['token', 'llm'],
    category: 'tekniskt',
  },
  {
    id: 'few-shot-prompting',
    term: 'Few-shot prompting',
    definition:
      'En promptteknik där du ger AI:n ett eller flera exempel på önskat resultat innan du ställer din egentliga fråga. Det hjälper modellen att förstå format och stil.',
    example:
      'Du kan ge AI:n tre exempel på hur du vill att elevåterkoppling ska se ut (styrkor, utvecklingsområden, nästa steg) och sedan be den skriva återkoppling för en ny elevtext i samma format.',
    relatedTerms: ['zero-shot-prompting', 'prompt', 'rukf'],
    category: 'promptteknik',
  },
  {
    id: 'zero-shot-prompting',
    term: 'Zero-shot prompting',
    definition:
      'Att ge en AI-modell en instruktion utan några exempel. Modellen förlitar sig helt på sin träning för att tolka och utföra uppgiften.',
    example:
      '"Skriv ett prov om andra världskriget för gymnasiet" är en zero-shot-prompt. Den fungerar men ger ofta mer generiska resultat jämfört med om du hade gett exempel på frågeformat.',
    relatedTerms: ['few-shot-prompting', 'prompt'],
    category: 'promptteknik',
  },
  {
    id: 'rukf',
    term: 'RUKF',
    definition:
      'En modell för att strukturera prompts: Roll (vem AI:n ska vara), Uppgift (vad den ska göra), Kontext (bakgrundsinformation) och Format (hur resultatet ska presenteras).',
    example:
      '"Du är en erfaren NO-lärare (Roll). Skapa en formativ bedömningsuppgift (Uppgift) om ekosystem för årskurs 7 kopplad till centralt innehåll i Lgr22 (Kontext). Presentera som en tabell med uppgift, bedömningskriterium och exempelsvar (Format)."',
    relatedTerms: ['prompt', 'few-shot-prompting', 'iterera'],
    category: 'promptteknik',
  },
  {
    id: 'iterera',
    term: 'Iterera',
    definition:
      'Att stegvis förfina och förbättra sin prompt eller AI:ns svar genom att ställa uppföljningsfrågor, be om ändringar eller omformuleringar tills resultatet blir tillfredsställande.',
    example:
      'Om AI:n ger en lektionsplanering som är för avancerad kan du iterera: "Förenkla språket till åk 4-nivå, lägg till konkreta exempel och gör instruktionerna mer steg-för-steg."',
    relatedTerms: ['prompt', 'rukf'],
    category: 'promptteknik',
  },
  {
    id: 'fine-tuning',
    term: 'Fine-tuning',
    definition:
      'Processen att vidareutbilda en befintlig AI-modell på specialiserad data för att förbättra dess prestanda inom ett specifikt område.',
    example:
      'En kommun skulle teoretiskt kunna fine-tuna en modell på sin lokala kursplan och bedömningsmaterial så att den bättre förstår just deras undervisningskontext.',
    relatedTerms: ['llm', 'modell', 'parameter'],
    category: 'tekniskt',
  },
  {
    id: 'bias',
    term: 'Bias',
    definition:
      'Systematiska snedvridningar i en AI-modells svar som uppstår på grund av snedvridningar i träningsdata. AI kan förstärka fördomar kring kön, etnicitet, kultur och andra faktorer.',
    example:
      'Om du ber AI:n att skapa en berättelse om en ingenjör och den alltid beskriver en man, visar det på bias i modellen. Diskutera detta med elever som en del av kritiskt tänkande kring AI.',
    relatedTerms: ['etik-gdpr', 'ai'],
    category: 'etik',
  },
  {
    id: 'etik-gdpr',
    term: 'GDPR',
    definition:
      'EU:s dataskyddsförordning som reglerar hur personuppgifter får samlas in och behandlas. Särskilt viktigt i skolans värld där elevdata kräver extra skydd.',
    example:
      'Du får aldrig mata in elevers personuppgifter, betyg eller känslig information i ChatGPT eller andra AI-verktyg som inte har ett personuppgiftsbiträdesavtal med din kommun.',
    relatedTerms: ['bias'],
    category: 'etik',
  },
  {
    id: 'chatbot',
    term: 'Chatbot',
    definition:
      'Ett program som simulerar mänsklig konversation. Moderna AI-chatbots som ChatGPT bygger på stora språkmodeller och kan föra mer nyanserade samtal än äldre regelbaserade chatbots.',
    example:
      'Elever kan använda en chatbot som studiekompis för att förklara begrepp, testa sin förståelse genom frågor eller öva på muntliga argument i en trygg miljö.',
    relatedTerms: ['ai', 'llm', 'gemini'],
    category: 'verktyg',
  },
  {
    id: 'notebooklm',
    term: 'NotebookLM',
    definition:
      'Googles AI-verktyg som låter användare ladda upp dokument och sedan ställa frågor, sammanfatta och analysera just det materialet. Svaren förankras i de uppladdade källorna.',
    example:
      'Ladda upp kursplanen och några lärobokskapitel i NotebookLM, och be den sedan skapa frågor till ett prov som täcker det centrala innehållet. Svaren refererar direkt till dina källor.',
    relatedTerms: ['rag', 'kallforankring', 'gemini'],
    category: 'verktyg',
  },
  {
    id: 'gemini',
    term: 'Gemini',
    definition:
      'Googles familj av AI-modeller och det AI-verktyg som är integrerat i Googles produkter som Workspace, Docs och Slides. Finns i olika versioner med varierande kapacitet.',
    example:
      'Med Gemini i Google Workspace kan du be AI:n att sammanfatta ett långt dokument, skriva utkast till mejl eller skapa presentationsbilder direkt i ditt befintliga arbetsflöde.',
    relatedTerms: ['llm', 'chatbot', 'notebooklm'],
    category: 'verktyg',
  },
  {
    id: 'canva',
    term: 'Canva',
    definition:
      'Ett webbaserat designverktyg med inbyggda AI-funktioner för att skapa bilder, presentationer, infografik och annat visuellt material.',
    example:
      'Använd Canvas AI-funktioner för att snabbt skapa visuellt tilltalande presentationer, arbetsblad eller infografik till din undervisning utan att behöva vara grafisk designer.',
    relatedTerms: ['ai', 'multimodal-ai'],
    category: 'verktyg',
  },
  {
    id: 'api',
    term: 'API',
    definition:
      'Application Programming Interface – ett gränssnitt som låter olika program kommunicera med varandra. Genom API:er kan utvecklare bygga egna verktyg som använder AI-modeller.',
    example:
      'Skolans IT-avdelning kan använda OpenAI:s API för att bygga en anpassad chatbot som bara svarar utifrån skolans material och följer kommunens dataskyddspolicyer.',
    relatedTerms: ['llm', 'ai'],
    category: 'tekniskt',
  },
  {
    id: 'sokratisk-dialog',
    term: 'Sokratisk dialog',
    definition:
      'En undervisningsmetod där läraren (eller AI:n) ställer vägledande frågor istället för att ge direkta svar, vilket hjälper eleven att själv resonera sig fram till förståelse.',
    example:
      'Prompta AI:n: "Agera som en sokratisk handledare. När eleven ställer en fråga om ekvationer, ge inte svaret direkt utan ställ motfrågor som leder eleven framåt i sitt tänkande."',
    relatedTerms: ['differentiering', 'prompt', 'rukf'],
    category: 'promptteknik',
  },
  {
    id: 'differentiering',
    term: 'Differentiering',
    definition:
      'Att anpassa undervisningens innehåll, process eller produkt efter elevers olika förutsättningar och behov. AI kan underlätta differentiering genom att snabbt skapa material på olika nivåer.',
    example:
      'Be AI:n: "Skapa samma text om fotosyntes i tre versioner: en förenklad för elever med lässvårigheter, en standardversion och en fördjupad för högpresterande elever."',
    relatedTerms: ['sokratisk-dialog', 'prompt'],
    category: 'promptteknik',
  },
  {
    id: 'kallforankring',
    term: 'Källförankring',
    definition:
      'Att AI:ns svar baseras på och refererar till specifika, verifierbara källor istället för att generera text fritt. Minskar risken för hallucinationer.',
    example:
      'Genom att ladda upp kursplanen som källa och instruera AI:n att bara svara utifrån dokumentet säkerställer du att förslagen är förankrade i aktuella styrdokument.',
    relatedTerms: ['hallucination', 'rag', 'notebooklm'],
    category: 'promptteknik',
  },
  {
    id: 'modell',
    term: 'Modell',
    definition:
      'Den underliggande AI som bearbetar information och genererar svar. Samma företag kan erbjuda flera modeller med olika kapacitet, hastighet och kostnad.',
    example:
      'OpenAI erbjuder modellerna GPT-4o (kraftfull men långsammare) och GPT-4o mini (snabbare men enklare). Valet av modell påverkar kvaliteten och kostnaden för svaren.',
    relatedTerms: ['llm', 'parameter', 'ai'],
    category: 'tekniskt',
  },
  {
    id: 'parameter',
    term: 'Parameter',
    definition:
      'De interna vikter och värden som en AI-modell har lärt sig under träningen. Antalet parametrar (ofta miljarder) påverkar modellens kapacitet och komplexitet.',
    example:
      'En modell med fler parametrar kan generellt hantera mer komplexa uppgifter, men kräver också mer beräkningskraft. GPT-4 har betydligt fler parametrar än GPT-3.5.',
    relatedTerms: ['modell', 'llm', 'fine-tuning'],
    category: 'tekniskt',
  },
  {
    id: 'temperatur',
    term: 'Temperatur',
    definition:
      'En inställning som styr hur kreativa eller förutsägbara AI:ns svar blir. Låg temperatur ger mer konsekventa svar, hög temperatur ger mer varierade och kreativa svar.',
    example:
      'För att skapa ett faktaprov vill du ha låg temperatur (mer exakta svar). För kreativ skrivning eller brainstorming kan högre temperatur ge mer originella idéer.',
    relatedTerms: ['modell', 'hallucination', 'parameter'],
    category: 'tekniskt',
  },
  {
    id: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    definition:
      'En teknik där AI-modellen först hämtar relevant information från en databas eller dokumentsamling och sedan genererar sitt svar baserat på den hämtade informationen.',
    example:
      'NotebookLM använder RAG-teknik: den söker i dina uppladdade dokument efter relevant information innan den svarar, vilket gör svaren mer träffsäkra och källförankrade.',
    relatedTerms: ['kallforankring', 'notebooklm', 'embeddings'],
    category: 'tekniskt',
  },
  {
    id: 'multimodal-ai',
    term: 'Multimodal AI',
    definition:
      'AI-system som kan förstå och generera flera typer av media: text, bilder, ljud och video. De kan till exempel analysera bilder och svara med text.',
    example:
      'Du kan ta en bild av en elevs handskrivna matematiklösning och be en multimodal AI att analysera lösningsgången och identifiera var eleven har gjort fel.',
    relatedTerms: ['generativ-ai', 'ai', 'gemini'],
    category: 'tekniskt',
  },
  {
    id: 'embeddings',
    term: 'Embeddings',
    definition:
      'Matematiska representationer av text (eller bilder) som vektorer i ett flerdimensionellt rum. Liknande begrepp hamnar nära varandra, vilket gör det möjligt att söka efter semantisk likhet.',
    example:
      'Embeddings gör att en sökning efter "ekosystem" även kan hitta dokument som handlar om "näringskedjor" och "biologisk mångfald" eftersom begreppen ligger nära varandra i vektorrummet.',
    relatedTerms: ['rag', 'llm', 'token'],
    category: 'tekniskt',
  },
]
