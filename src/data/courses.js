import { waLink } from "../utils/helpers";
import img1 from "../assets/courses/1.jpg";
import img2 from "../assets/courses/2.jpg";
import img3 from "../assets/courses/3.jpg";
import img4 from "../assets/courses/4.jpg";

/**
 * 4 core courses offered by Eng. Sara Al-Yafai.
 * Each object drives a card in CoursesSection.
 * `posterBg` is a gradient placeholder — swap with <img> when real posters are ready.
 */
export const COURSES = Object.freeze([
  {
    id      : "kids-foundation",
    nameAr  : "تأسيس الأطفال",
    nameEn  : "Kids Foundation",
    level   : "A1",
    descAr  : "بناء أساس قوي للغة الإنجليزية بأسلوب ممتع — حروف، ألوان، حيوانات وجمل بسيطة.",
    waMsg   : waLink("أهلاً م. سارة 👋 أرغب بالتسجيل في دورة تأسيس الأطفال"),
    color   : "from-teal-400 to-emerald-500",
    posterBg: "from-teal-100 via-teal-50 to-emerald-100",
    emoji   : "🌱",
    imgSrc  : img1,
  },
  {
    id      : "kids-conversation",
    nameAr  : "محادثة الأطفال",
    nameEn  : "Kids Conversation",
    level   : "A2",
    descAr  : "تطوير مهارات المحادثة للأطفال في بيئة تفاعلية ومشجعة على التعبير بثقة.",
    waMsg   : waLink("أهلاً م. سارة 👋 أرغب بالتسجيل في دورة محادثة الأطفال"),
    color   : "from-blue-400 to-cyan-500",
    posterBg: "from-blue-100 via-sky-50 to-cyan-100",
    emoji   : "⭐",
    imgSrc  : img2,
  },
  {
    id      : "foundation-conversation",
    nameAr  : "تأسيس المحادثة",
    nameEn  : "Foundation Conversation",
    level   : "A1–A2",
    descAr  : "من الصفر حتى الاستقلالية — اكتساب طبيعي بعيداً عن الحفظ والقواعد الجامدة.",
    waMsg   : waLink("أهلاً م. سارة 👋 أرغب بالتسجيل في دورة تأسيس المحادثة"),
    color   : "from-violet-400 to-purple-500",
    posterBg: "from-violet-100 via-purple-50 to-fuchsia-100",
    emoji   : "📗",
    imgSrc  : img3,
  },
  {
    id      : "intensive-conversation",
    nameAr  : "المحادثة المكثفة",
    nameEn  : "Intensive Conversation",
    level   : "B1–C1",
    descAr  : "صقل الطلاقة مع مواقف حياتية متنوعة وعميقة — للمتقدمين الطموحين.",
    waMsg   : waLink("أهلاً م. سارة 👋 أرغب بالتسجيل في دورة المحادثة المكثفة"),
    color   : "from-amber-400 to-orange-500",
    posterBg: "from-amber-100 via-yellow-50 to-orange-100",
    emoji   : "🚀",
    imgSrc  : img4,
  },
]);
