import img1 from "../assets/courses/1.jpg";
import img2 from "../assets/courses/2.jpg";
import img3 from "../assets/courses/3.jpg";
import img4 from "../assets/courses/4.jpg";
// ═══════════════════════════════════════════════════════════════════════════
//  QUESTIONS  —  تحديث م. سارة اليافعي
//  الأطفال (عربي) | الكبار (إنجليزي مطابق للمنهج)
// ═══════════════════════════════════════════════════════════════════════════
export const QUESTIONS = Object.freeze({

  kids: [
    // ── الحروف والأصوات ──────────────────────────────────────────────────
    {
      q       : "ما هو الحرف الذي يأتي بعد حرف 'C'؟",
      options : ["A", "D", "B", "E"],
      answer  : 1,
      category: "Letters 🔤",
    },
    {
      q       : "كلمة 'Apple' تبدأ بحرف الـ ...",
      options : ["B", "C", "A", "D"],
      answer  : 2,
      category: "Phonics 🔊",
    },
    {
      q       : "ما هو شكل حرف الـ 'S' الصغير (Small)؟",
      options : ["s", "z", "c", "e"],
      answer  : 0,
      category: "Letters 🔤",
    },
    // ── الألوان ────────────────────────────────────────────────────────────
    {
      q       : "ما معنى لون 'Blue'؟",
      options : ["أخضر", "أحمر", "أزرق", "أصفر"],
      answer  : 2,
      category: "Colors 🌈",
    },
    {
      q       : "ما هو لون الموز (Banana) بالإنجليزية؟",
      options : ["Red", "Yellow", "Green", "Blue"],
      answer  : 1,
      category: "Colors 🌈",
    },
    {
      q       : "أي من الألوان التالية هو اللون 'Red'؟",
      options : ["أصفر", "أبيض", "أخضر", "أحمر"],
      answer  : 3,
      category: "Colors 🌈",
    },
    // ── الحيوانات ───────────────────────────────────────────────────────────
    {
      q       : "ماذا نطلق على القطة بالإنجليزية؟",
      options : ["Dog", "Cat", "Cow", "Bird"],
      answer  : 1,
      category: "Animals 🐾",
    },
    {
      q       : "أي حيوان هو الـ 'Lion'؟",
      options : ["فيل", "أسد", "زرافة", "نمر"],
      answer  : 1,
      category: "Animals 🐾",
    },
    {
      q       : "ما معنى كلمة 'Bird'؟",
      options : ["سمكة", "أرنب", "طائر", "حصان"],
      answer  : 2,
      category: "Animals 🐾",
    },
    // ── الأرقام ───────────────────────────────────────────────────────────
    {
      q       : "ما هو رقم عشرة (10) بالإنجليزية؟",
      options : ["Eight", "Nine", "Ten", "Seven"],
      answer  : 2,
      category: "Numbers 🔢",
    },
    {
      q       : "كم عدد أصابع اليد الواحدة؟",
      options : ["Four", "Six", "Five", "Three"],
      answer  : 2,
      category: "Numbers 🔢",
    },
    // ── القواعد البسيطة ──────────────────────────────────────────────────
    {
      q       : "ماذا نستخدم قبل كلمة 'Apple'؟",
      options : ["a", "an", "the", "some"],
      answer  : 1,
      category: "Grammar 📖",
    },
    {
      q       : "ماذا نستخدم قبل كلمة 'Dog'؟",
      options : ["an", "a", "the", "some"],
      answer  : 1,
      category: "Grammar 📖",
    },
    // ── التعريف بالنفس ─────────────────────────────────────────────────
    {
      q       : "عندما تسأل شخصاً عن اسمه تقول: What is your ___?",
      options : ["Age", "Name", "Color", "Book"],
      answer  : 1,
      category: "Self Intro 👋",
    },
    {
      q       : "كيف تقول 'مع السلامة' بالإنجليزية؟",
      options : ["Hello", "Please", "Goodbye", "Thank you"],
      answer  : 2,
      category: "Greetings 👋",
    },
    // ── العائلة والمشاعر ────────────────────────────────────────────────────
    {
      q       : "ما معنى كلمة 'Father'؟",
      options : ["الأم", "الأخت", "الأب", "الجد"],
      answer  : 2,
      category: "Family 👨‍👩‍👧",
    },
    {
      q       : "إذا كنت تشعر بالسعادة، فأنت ___.",
      options : ["Sad", "Angry", "Happy", "Tired"],
      answer  : 2,
      category: "Feelings 😊",
    },
    {
      q       : "ما عكس كلمة 'Happy' (سعيد)؟",
      options : ["Angry", "Sad", "Scared", "Small"],
      answer  : 1,
      category: "Feelings 😊",
    },
    // ── الأفعال ───────────────────────────────────────────────────────
    {
      q       : "ما معنى فعل 'Eat'؟",
      options : ["ينام", "يجري", "يأكل", "يقرأ"],
      answer  : 2,
      category: "Verbs 🏃",
    },
    {
      q       : "عندما ألعب بالكرة أستخدم فعل:",
      options : ["Sleep", "Eat", "Play", "Drink"],
      answer  : 2,
      category: "Verbs 🏃",
    },
  ],

  adults: [
    // ── Greetings & Daily Routine (تأسيس المحادثة) ──────────────────────────
    {
      q       : "How would you respond to 'Nice to see you'?",
      options : ["I am fine.", "Nice to see you too.", "Good morning.", "I don't know."],
      answer  : 1,
      category: "Greetings 🤝",
    },
    {
      q       : "Which question is used to ask about someone's origin?",
      options : ["Where do you live?", "What is your job?", "Where are you from?", "How are you?"],
      answer  : 2,
      category: "Personal Info 🪪",
    },
    {
      q       : "I usually ___ up at 7 o'clock every morning.",
      options : ["wake", "wakes", "waking", "woke"],
      answer  : 0,
      category: "Daily Routine 📅",
    },
    // ── Grammar Base (قواعد تأسيس) ────────────────────────────────────────────────────
    {
      q       : "Choose the correct sentence:",
      options : [
        "She don't like coffee.",
        "She doesn't likes coffee.",
        "She doesn't like coffee.",
        "She not like coffee.",
      ],
      answer  : 2,
      category: "Present Simple 📗",
    },
    {
      q       : "Jack ___ houses for a living.",
      options : ["build", "builds", "building", "is build"],
      answer  : 1,
      category: "Present Simple 📗",
    },
    {
      q       : "I have been studying ___ two hours.",
      options : ["since", "for", "ago", "at"],
      answer  : 1,
      category: "P.P. Continuous 📘",
    },
    // ── Intermediate Conversation (المحادثة المكثفة) ───────────────────────────────────
    {
      q       : "Which phrase is used to give a personal opinion?",
      options : ["In my opinion...", "I need to...", "Can you repeat?", "Where is..."],
      answer  : 0,
      category: "Opinion 💬",
    },
    {
      q       : "If you didn't hear someone, you should say:",
      options : [
        "I didn't catch that.",
        "What do you want?",
        "Go away.",
        "I don't like that."
      ],
      answer  : 0,
      category: "Conversation 💬",
    },
    // ── Advanced Topics (AI & Research) ──────────────────────────────────────────────
    {
      q       : "Ahmed recommended a paper about the ___ of modern technology.",
      options : ["evolution", "food", "colors", "games"],
      answer  : 0,
      category: "Tech & AI 🤖",
    },
    {
      q       : "What is a 'Research Paper' in Arabic?",
      options : ["قصة قصيرة", "ورقة بحثية", "كتاب طبخ", "جريدة"],
      answer  : 1,
      category: "Academic 📚",
    },
    {
      q       : "Artificial Intelligence (AI) has a huge ___ on various industries.",
      options : ["impact", "sound", "color", "taste"],
      answer  : 0,
      category: "Tech & AI 🤖",
    },
    // ── Grammar Advanced (ملف القواعد) ──────────────────────────────────────────────────
    {
      q       : "By the time the movie started, she ___ the book.",
      options : ["read", "reads", "had read", "reading"],
      answer  : 2,
      category: "Past Perfect 📙",
    },
    {
      q       : "They ___ a new car last week.",
      options : ["buy", "buys", "bought", "buying"],
      answer  : 2,
      category: "Past Simple 📙",
    },
    {
      q       : "Which tense describes an action that started in the past and is still continuing?",
      options : ["Past Simple", "Present Perfect Continuous", "Future Simple", "Past Perfect"],
      answer  : 1,
      category: "P.P. Continuous 📘",
    },
    // ── General Context (50 Self Intro Questions) ──────────────────────────
    {
      q       : "What's the meaning of 'Unique'?",
      options : ["Something common", "Something special or one of a kind", "Something boring", "Something old"],
      answer  : 1,
      category: "Vocabulary 📚",
    },
    {
      q       : "Who is your 'Role Model'?",
      options : ["A famous place", "A person you admire/follow", "A type of food", "A daily routine"],
      answer  : 1,
      category: "Vocabulary 📚",
    },
    {
      q       : "I ___ hang out with my cousins on weekends.",
      options : ["usually", "is", "am", "be"],
      answer  : 0,
      category: "Conversation 💬",
    },
    {
      q       : "What is the meaning of 'Soft and Gentle'?",
      options : ["قوي وشجاع", "ناعم ولطيف", "سريع وغاضب", "كبير ومرعب"],
      answer  : 1,
      category: "Vocabulary 📚",
    },
    {
      q       : "How do you ask about someone's major at university?",
      options : ["How are you?", "What do you study?", "Where is the lab?", "Do you like food?"],
      answer  : 1,
      category: "Academic 📚",
    },
    {
      q       : "I take time to clean my room and ___ relax.",
      options : ["just", "is", "not", "no"],
      answer  : 0,
      category: "Daily Routine 📅",
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
