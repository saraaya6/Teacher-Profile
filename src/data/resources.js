import { waLink } from "../utils/helpers";
import pdfFile from "../assets/Self_Introduction_Questions.pdf";

/**
 * Free resources shown in the Resources section.
 * JSX icons are resolved here so the component is declarative.
 * `link` uses waLink() so WHATSAPP_NUMBER stays as the single source.
 */
export const getResources = () => [
  {
    id      : "pdf-50-questions",
    iconName: "FileText",
    emoji   : "📄",
    title   : "50 سؤال لتعريف نفسك",
    subtitle: "50 Self-Introduction Questions",
    desc    : "ملف PDF مجاني يحتوي على أهم 50 سؤالاً لتتعلم كيف تعرّف بنفسك بالإنجليزية في أي موقف.",
    cta     : "تحميل PDF مجاناً",
    action  : "download",
    link    : pdfFile,
    color   : "from-teal-400 to-teal-600",
    tag     : "PDF · مجاني",
  },
  {
    id      : "demo-lesson",
    iconName: "Play",
    emoji   : "🎬",
    title   : "درس تجريبي مجاني",
    subtitle: "Free Demo Lesson",
    desc    : "جرّب أسلوب م. سارة في التدريس مباشرة — بالاكتساب الطبيعي، بعيداً عن القواعد الحفظية.",
    cta     : "جرب درسك التجريبي",
    action  : "link",
    link    : "https://t.me/trywithsara",
    color   : "from-blue-400 to-cyan-500",
    tag     : "مجاني · 30 دقيقة",
  },
];
