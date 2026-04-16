import img1 from "../assets/courses/1.jpg";
import img2 from "../assets/courses/2.jpg";
import img3 from "../assets/courses/3.jpg";
import img4 from "../assets/courses/4.jpg";

// ═══════════════════════════════════════════════════════════════════════════
//  QUESTIONS  —  constant object keyed by audience
//  Keys: "kids" (age ≤ 12) | "adults" (age > 12)
//  Curriculum:
//    kids   → تأسيس الأطفال + محادثة الأطفال
//    adults → تأسيس المحادثة + المحادثة المكثفة + AI / Research
// ═══════════════════════════════════════════════════════════════════════════
export const QUESTIONS = Object.freeze({

  kids: [
    // ── Letters & Phonics ──────────────────────────────────────────────────
    {
      q       : "Which letter comes after 'C' in the alphabet?",
      options : ["A", "D", "B", "E"],
      answer  : 1,
      category: "Letters 🔤",
    },
    {
      q       : "What sound does the letter 'B' make?",
      options : ["buh", "duh", "puh", "guh"],
      answer  : 0,
      category: "Phonics 🔊",
    },
    {
      q       : "How many letters are in the word 'STAR'?",
      options : ["3", "5", "4", "6"],
      answer  : 2,
      category: "Spelling ✏️",
    },
    // ── Colors ────────────────────────────────────────────────────────────
    {
      q       : "What color is the sky on a sunny day?",
      options : ["green", "red", "blue", "yellow"],
      answer  : 2,
      category: "Colors 🌈",
    },
    {
      q       : "What color do you get when you mix red and white?",
      options : ["orange", "purple", "pink", "brown"],
      answer  : 2,
      category: "Colors 🌈",
    },
    {
      q       : "Which color is a banana?",
      options : ["blue", "yellow", "green", "red"],
      answer  : 1,
      category: "Colors 🌈",
    },
    // ── Animals ───────────────────────────────────────────────────────────
    {
      q       : "Which animal says 'meow'?",
      options : ["dog", "cat", "cow", "bird"],
      answer  : 1,
      category: "Animals 🐾",
    },
    {
      q       : "Which animal has a very long neck?",
      options : ["elephant", "lion", "giraffe", "fish"],
      answer  : 2,
      category: "Animals 🐾",
    },
    {
      q       : "Which animal lives in the ocean and has fins?",
      options : ["rabbit", "tiger", "horse", "shark"],
      answer  : 3,
      category: "Animals 🐾",
    },
    // ── Numbers ───────────────────────────────────────────────────────────
    {
      q       : "What number comes after 9?",
      options : ["8", "11", "10", "7"],
      answer  : 2,
      category: "Numbers 🔢",
    },
    // ── Grammar (a / an) ──────────────────────────────────────────────────
    {
      q       : "Choose the correct article: '___ apple'",
      options : ["a", "an", "the", "some"],
      answer  : 1,
      category: "Grammar 📖",
    },
    {
      q       : "Choose the correct article: '___ dog'",
      options : ["an", "a", "the", "some"],
      answer  : 1,
      category: "Grammar 📖",
    },
    // ── Self Introduction ─────────────────────────────────────────────────
    {
      q       : "How do you introduce yourself? 'My ___ is Sara.'",
      options : ["age", "name", "color", "book"],
      answer  : 1,
      category: "Self Intro 👋",
    },
    {
      q       : "How do you say goodbye in English?",
      options : ["Hello", "Please", "Goodbye", "Thank you"],
      answer  : 2,
      category: "Greetings 👋",
    },
    // ── Family ────────────────────────────────────────────────────────────
    {
      q       : "What do you call your mother's mother?",
      options : ["aunt", "sister", "grandmother", "cousin"],
      answer  : 2,
      category: "Family 👨‍👩‍👧",
    },
    // ── Feelings ──────────────────────────────────────────────────────────
    {
      q       : "If someone gives you a gift, you feel ___.",
      options : ["sad", "angry", "happy", "tired"],
      answer  : 2,
      category: "Feelings 😊",
    },
    {
      q       : "The opposite of 'happy' is ___.",
      options : ["angry", "sad", "scared", "surprised"],
      answer  : 1,
      category: "Feelings 😊",
    },
    // ── Basic Verbs ───────────────────────────────────────────────────────
    {
      q       : "Which word means 'to take food into your mouth'?",
      options : ["sleep", "run", "eat", "read"],
      answer  : 2,
      category: "Verbs 🏃",
    },
    {
      q       : "I ___ football with my friends.",
      options : ["sleep", "eat", "play", "drink"],
      answer  : 2,
      category: "Verbs 🏃",
    },
    {
      q       : "Complete: 'I ___ a glass of water every morning.'",
      options : ["want", "run", "sit", "sleep"],
      answer  : 0,
      category: "Verbs 🏃",
    },
  ],

  adults: [
    // ── Greetings & Personal Info ──────────────────────────────────────────
    {
      q       : "Which sentence is the most formal greeting?",
      options : ["Hey, what's up?", "Good morning, how do you do?", "Yo! How's it going?", "Hiya!"],
      answer  : 1,
      category: "Greetings 🤝",
    },
    {
      q       : "Fill in the blank: 'I ___ from Yemen.'",
      options : ["am", "is", "are", "be"],
      answer  : 0,
      category: "Personal Info 🪪",
    },
    {
      q       : "Which question asks about someone's job?",
      options : ["Where do you live?", "How old are you?", "What do you do for a living?", "What is your nationality?"],
      answer  : 2,
      category: "Personal Info 🪪",
    },
    // ── Daily Routine & Time ──────────────────────────────────────────────
    {
      q       : "What time expression fits? 'I wake up ___ 6 o'clock.'",
      options : ["in", "on", "at", "by"],
      answer  : 2,
      category: "Time ⏰",
    },
    {
      q       : "Which sentence describes a daily routine correctly?",
      options : [
        "She going to work every day.",
        "She goes to work every day.",
        "She go to work every day.",
        "She is go to work every day.",
      ],
      answer  : 1,
      category: "Daily Routine 📅",
    },
    // ── Present Simple ────────────────────────────────────────────────────
    {
      q       : "Which sentence uses Present Simple correctly?",
      options : [
        "He play soccer on Fridays.",
        "He is plays soccer on Fridays.",
        "He plays soccer on Fridays.",
        "He playing soccer on Fridays.",
      ],
      answer  : 2,
      category: "Present Simple 📗",
    },
    {
      q       : "Choose the correct negative form: 'She ___ coffee.'",
      options : ["don't drink", "doesn't drink", "not drink", "isn't drink"],
      answer  : 1,
      category: "Present Simple 📗",
    },
    // ── Present Perfect ───────────────────────────────────────────────────
    {
      q       : "Choose the correct sentence in Present Perfect:",
      options : [
        "I already finish my homework.",
        "I have already finish my homework.",
        "I have already finished my homework.",
        "I already finished my homework.",
      ],
      answer  : 2,
      category: "Present Perfect 🔷",
    },
    {
      q       : "'She has lived here ___ 2015.' Which word completes it?",
      options : ["for", "since", "ago", "during"],
      answer  : 1,
      category: "Present Perfect 🔷",
    },
    // ── Present Perfect Continuous ────────────────────────────────────────
    {
      q       : "Which sentence is in the Present Perfect Continuous?",
      options : [
        "I am studying for three hours.",
        "I have been studying for three hours.",
        "I was studying for three hours.",
        "I had studied for three hours.",
      ],
      answer  : 1,
      category: "P.P. Continuous 📘",
    },
    // ── Past Perfect ──────────────────────────────────────────────────────
    {
      q       : "Choose the correct Past Perfect sentence:",
      options : [
        "By the time she arrived, he left.",
        "By the time she arrived, he has left.",
        "By the time she arrived, he had left.",
        "By the time she arrived, he was leaving.",
      ],
      answer  : 2,
      category: "Past Perfect 📙",
    },
    // ── Tech & AI Vocabulary ──────────────────────────────────────────────
    {
      q       : "What does 'Machine Learning' primarily involve?",
      options : [
        "Teaching computers to do physical work",
        "Algorithms that allow computers to learn from data",
        "Programming machines to follow fixed instructions only",
        "Connecting machines to the internet",
      ],
      answer  : 1,
      category: "Tech & AI 🤖",
    },
    {
      q       : "The term 'algorithm' in computing refers to:",
      options : [
        "A type of computer virus",
        "A set of step-by-step instructions to solve a problem",
        "A programming language",
        "A hardware component",
      ],
      answer  : 1,
      category: "Tech & AI 🤖",
    },
    // ── Academic Vocabulary ───────────────────────────────────────────────
    {
      q       : "In academic writing, a 'hypothesis' is:",
      options : [
        "A proven fact stated in a paper",
        "A reference to another author's work",
        "A proposed explanation to be tested",
        "The conclusion of a research paper",
      ],
      answer  : 2,
      category: "Academic 📚",
    },
    {
      q       : "Choose the most academic phrasing:",
      options : [
        "The study is really important.",
        "The study is significantly relevant to the field.",
        "The study stuff matters a lot.",
        "The study is kinda useful.",
      ],
      answer  : 1,
      category: "Academic 📚",
    },
    // ── Opinion & Connectors ──────────────────────────────────────────────
    {
      q       : "Which expression best introduces an opinion formally?",
      options : [
        "I think maybe...",
        "From my perspective, it could be argued that...",
        "Personally I totally believe...",
        "In my head I feel like...",
      ],
      answer  : 1,
      category: "Opinion 💬",
    },
    {
      q       : "Which connector shows contrast?",
      options : ["Furthermore", "Therefore", "Nevertheless", "Moreover"],
      answer  : 2,
      category: "Connectors 🔗",
    },
    // ── Advanced Grammar ──────────────────────────────────────────────────
    {
      q       : "Identify the correct First Conditional sentence:",
      options : [
        "If I would study, I will pass.",
        "If I study, I will pass.",
        "If I study, I would pass.",
        "If I studied, I will pass.",
      ],
      answer  : 1,
      category: "Conditionals 🎯",
    },
    {
      q       : "Choose the correct passive voice: 'The report ___ by the team yesterday.'",
      options : ["is written", "was written", "has been written", "had written"],
      answer  : 1,
      category: "Passive Voice 📝",
    },
    {
      q       : "Which sentence uses the subjunctive mood correctly?",
      options : [
        "The teacher suggested that he studies harder.",
        "The teacher suggested that he study harder.",
        "The teacher suggested that he studied harder.",
        "The teacher suggested that he is studying harder.",
      ],
      answer  : 1,
      category: "Advanced Grammar ⭐",
    },
  ],
});

// ═══════════════════════════════════════════════════════════════════════════
//  RESULTS MAPPING  (CEFR A1 → C1)
// ═══════════════════════════════════════════════════════════════════════════
/**
 * Returns the result object for a given score and audience.
 * @param {number}  score   correct answers out of 20
 * @param {boolean} isKids  true = kids track
 */
export const getResult = (score, isKids) => {
  const pct = (score / 20) * 100;

  if (isKids) {
    return pct <= 50
      ? {
          level   : "A1", labelAr: "مبتدئ",         labelEn: "Beginner",
          emoji   : "🌱", stars: 2,
          courseAr: "دورة تأسيس الأطفال",            courseEn: "Kids Foundation Course",
          descAr  : "رائع! هذه الدورة ستبني أساسك القوي في اللغة الإنجليزية بطريقة ممتعة — بالألوان والحيوانات والأغاني.",
          gradient: "from-teal-400 to-teal-600",     bgGrad: "from-teal-50 to-cyan-50",
          imgSrc  : img1
        }
      : {
          level   : "A2", labelAr: "مبتدئ متقدم",   labelEn: "Elementary",
          emoji   : "⭐", stars: 4,
          courseAr: "دورة محادثة الأطفال",            courseEn: "Kids Conversation Course",
          descAr  : "أحسنت! لديك أساس جيد وهذه الدورة ستطور مهاراتك في المحادثة بثقة.",
          gradient: "from-blue-400 to-cyan-500",     bgGrad: "from-blue-50 to-cyan-50",
          imgSrc  : img2
        };
  }

  if (pct <= 30) return {
    level   : "A1", labelAr: "مبتدئ جداً",          labelEn: "Absolute Beginner",
    emoji   : "🌱", stars: 1,
    courseAr: "دورة تأسيس المحادثة",                 courseEn: "Foundation Conversation Course",
    descAr  : "لا بأس! البداية خطوة شجاعة. ستتعلم أساسيات الإنجليزية بطريقة مبنية على الاكتساب الطبيعي.",
    gradient: "from-teal-500 to-teal-700",           bgGrad: "from-teal-50 to-green-50",
    imgSrc  : img3
  };

  if (pct <= 55) return {
    level   : "A2", labelAr: "مبتدئ",               labelEn: "Elementary",
    emoji   : "📗", stars: 2,
    courseAr: "دورة تأسيس المحادثة",                 courseEn: "Foundation Conversation Course",
    descAr  : "جيد! لديك أساس يمكن البناء عليه. الدورة التأسيسية ستأخذك للمستوى التالي بخطوات واثقة.",
    gradient: "from-emerald-500 to-teal-600",        bgGrad: "from-emerald-50 to-teal-50",
    imgSrc  : img3
  };

  if (pct <= 75) return {
    level   : "B1", labelAr: "متوسط",               labelEn: "Intermediate",
    emoji   : "🔷", stars: 3,
    courseAr: "دورة المحادثة المكثفة",               courseEn: "Intensive Conversation Course",
    descAr  : "ممتاز! مستواك متوسط وجيد. الدورة المكثفة ستصقل مهاراتك وتجعلك أكثر طلاقة.",
    gradient: "from-blue-500 to-cyan-600",           bgGrad: "from-blue-50 to-cyan-50",
    imgSrc  : img4
  };

  if (pct <= 90) return {
    level   : "B2", labelAr: "متوسط مرتفع",         labelEn: "Upper-Intermediate",
    emoji   : "🚀", stars: 4,
    courseAr: "دورة المحادثة المكثفة — مسار AI",     courseEn: "Intensive Conversation — AI Track",
    descAr  : "رائع جداً! سنأخذك نحو الاحترافية الكاملة مع مسار خاص يشمل الذكاء الاصطناعي والبحث العلمي.",
    gradient: "from-violet-500 to-purple-600",       bgGrad: "from-violet-50 to-purple-50",
    imgSrc  : img4
  };

  return {
    level   : "C1", labelAr: "متقدم",               labelEn: "Advanced",
    emoji   : "🏆", stars: 5,
    courseAr: "دورة المحادثة المكثفة — مسار المتقدمين", courseEn: "Intensive Conversation — Advanced Track",
    descAr  : "استثنائي! الدورة المكثفة ستجعلك متحدثاً محترفاً على مستوى عالمي في مجالات AI والبحث.",
    gradient: "from-yellow-500 to-amber-600",        bgGrad: "from-yellow-50 to-amber-50",
    imgSrc  : img4
  };
};

// ═══════════════════════════════════════════════════════════════════════════
//  DAILY WORDS  (30 entries, rotates by day-of-year)
// ═══════════════════════════════════════════════════════════════════════════
const DAILY_WORDS = [
  { word: "Acquire",     pos: "Verb",      meaning: "to get or obtain something",                               example: "Children acquire language naturally through immersion.",             arabic: "يكتسب / يحصل على" },
  { word: "Fluent",      pos: "Adjective", meaning: "able to speak a language easily and accurately",           example: "She became fluent in English after two years of practice.",          arabic: "طلق / متقن للغة" },
  { word: "Immerse",     pos: "Verb",      meaning: "to involve yourself completely in something",              example: "The best way to learn is to immerse yourself in the language.",      arabic: "يغمر / ينغمس في" },
  { word: "Context",     pos: "Noun",      meaning: "the situation or circumstances around an event",           example: "Understanding context helps you learn vocabulary faster.",            arabic: "السياق" },
  { word: "Articulate",  pos: "Adjective", meaning: "able to express ideas clearly and effectively",            example: "An articulate speaker communicates with precision.",                  arabic: "بليغ / واضح التعبير" },
  { word: "Persist",     pos: "Verb",      meaning: "to continue doing something despite difficulties",          example: "You must persist to reach fluency in any language.",                 arabic: "يصر / يثابر" },
  { word: "Intuition",   pos: "Noun",      meaning: "a feeling about something without conscious reasoning",    example: "After much practice, grammar becomes intuition.",                    arabic: "الحدس / الإحساس الفطري" },
  { word: "Comprehend",  pos: "Verb",      meaning: "to understand something fully",                            example: "It takes time to comprehend advanced grammar rules.",                arabic: "يستوعب / يفهم" },
  { word: "Dedicate",    pos: "Verb",      meaning: "to give time or effort to a particular purpose",           example: "Dedicate 30 minutes a day to English practice.",                    arabic: "يكرّس / يخصص" },
  { word: "Mindset",     pos: "Noun",      meaning: "a way of thinking that affects how you behave",            example: "A growth mindset is essential for language learning.",               arabic: "عقلية / منهجية التفكير" },
  { word: "Elaborate",   pos: "Verb",      meaning: "to add more detail to an explanation",                     example: "Could you elaborate on your answer, please?",                       arabic: "يوضح / يتوسع في الشرح" },
  { word: "Consistent",  pos: "Adjective", meaning: "always behaving in the same way",                          example: "Consistent practice leads to fluency.",                              arabic: "ثابت / منتظم" },
  { word: "Curiosity",   pos: "Noun",      meaning: "a strong desire to know or learn something",               example: "Curiosity is the engine of language acquisition.",                   arabic: "الفضول" },
  { word: "Precise",     pos: "Adjective", meaning: "exact and accurate in every detail",                       example: "Using precise vocabulary makes you sound professional.",             arabic: "دقيق" },
  { word: "Innovative",  pos: "Adjective", meaning: "introducing new ideas or methods",                         example: "Sara uses innovative methods to teach English naturally.",           arabic: "مبتكر / ريادي" },
  { word: "Empower",     pos: "Verb",      meaning: "to give someone the confidence to do something",           example: "Learning English empowers you globally.",                            arabic: "يمكّن / يمنح القوة" },
  { word: "Navigate",    pos: "Verb",      meaning: "to find your way through a complex situation",             example: "Good vocabulary helps you navigate professional conversations.",      arabic: "يتنقل / يهتدي في" },
  { word: "Reflect",     pos: "Verb",      meaning: "to think carefully about something",                       example: "Reflect on your mistakes to improve faster.",                        arabic: "يتأمل / يعكس" },
  { word: "Engage",      pos: "Verb",      meaning: "to participate or become involved in something",           example: "Engage in daily conversations to build confidence.",                 arabic: "يشارك / يتفاعل" },
  { word: "Breakthrough",pos: "Noun",      meaning: "an important discovery or achievement",                    example: "That lesson was a real breakthrough in my learning journey.",        arabic: "اختراق / إنجاز كبير" },
  { word: "Resilience",  pos: "Noun",      meaning: "the ability to recover from difficulties",                 example: "Language learning requires patience and resilience.",                arabic: "المرونة / الصمود" },
  { word: "Authentic",   pos: "Adjective", meaning: "real, genuine, and not copied",                            example: "Authentic conversations accelerate language acquisition.",           arabic: "أصيل / حقيقي" },
  { word: "Ambitious",   pos: "Adjective", meaning: "having strong desire for success",                         example: "Be ambitious — aim for fluency, not just basics.",                  arabic: "طموح" },
  { word: "Mentor",      pos: "Noun",      meaning: "an experienced person who guides another",                 example: "A good mentor can change your learning journey forever.",            arabic: "المرشد / الموجّه" },
  { word: "Milestone",   pos: "Noun",      meaning: "an important event in progress or development",            example: "Speaking your first fluent sentence is a huge milestone.",           arabic: "معلم / محطة مهمة" },
  { word: "Stimulate",   pos: "Verb",      meaning: "to encourage interest or activity",                        example: "Good stories stimulate natural language acquisition.",               arabic: "يحفّز / يُنشّط" },
  { word: "Enrich",      pos: "Verb",      meaning: "to improve the quality or value of something",             example: "Reading enriches your vocabulary in every subject.",                 arabic: "يُثري / يُغني" },
  { word: "Coherent",    pos: "Adjective", meaning: "logical and well-organized",                               example: "A coherent argument is essential in academic writing.",             arabic: "متماسك / منطقي" },
  { word: "Illuminate",  pos: "Verb",      meaning: "to make something clear or easier to understand",          example: "Good examples illuminate complex grammar rules.",                    arabic: "يوضح / ينير" },
  { word: "Cultivate",   pos: "Verb",      meaning: "to develop or improve something through effort",           example: "Cultivate the habit of thinking in English.",                       arabic: "يزرع / يطوّر" },
];

/**
 * Returns the word for today, rotating through DAILY_WORDS by day-of-year.
 * @returns {typeof DAILY_WORDS[0]}
 */
export const getDailyWord = () => {
  const ms     = new Date() - new Date(new Date().getFullYear(), 0, 0);
  const dayIdx = Math.floor(ms / 86_400_000) % DAILY_WORDS.length;
  return DAILY_WORDS[dayIdx];
};

// ── Legacy named exports kept for backwards-compatibility ──────────────────
export const kidsQuestions   = QUESTIONS.kids;
export const adultsQuestions = QUESTIONS.adults;
