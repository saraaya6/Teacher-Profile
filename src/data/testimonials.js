/**
 * Student testimonials data
 * 
 * Includes 6 hand-written text reviews, followed by dynamically imported screenshot reviews.
 */

// Dynamically import all images from the assets/images folder using Vite's import.meta.glob
const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

const screenshotTestimonials = Object.values(imageModules).map((imgSrc, index) => ({
  name: `Screenshot ${index + 1} (${index % 2 === 0 ? "Top" : "Bottom"})`,
  type: "screenshot",
  imgSrc: imgSrc,
  imgAlt: "تقييم طالب"
}));

export const TESTIMONIALS = Object.freeze([
  // --- 1. TEXT REVIEWS (Indices 0 to 5) ---
  
  // Top Track (Index 0)
  {
    name : "فاطمة أ.",
    text : "والله م. سارة غيرت نظرتي للإنجليزي تماماً! كنت أكره القواعد وتعقيداتها، بس معاها صارت اللغة سهلة زي الماء 🌟",
    level: "B1",
    emoji: "🎓",
    type : "text",
  },
  // Bottom Track (Index 1)
  {
    name : "محمد ع.",
    text : "ولدي عمره ٧ سنوات وصار يتكلم إنجليزي بالبيت! المنهج مرة حلو واللي يميزه إنه طبيعي مو حفظ 💚",
    level: "A2",
    emoji: "👨‍👧",
    type : "text",
  },
  // Top Track (Index 2)
  {
    name : "نور ق.",
    text : "بعد الدورة المكثفة رحت مقابلة شغل وتكلمت إنجليزي بثقة — أول مرة ما أتوتر! يعطيها العافية 🚀",
    level: "B2",
    emoji: "💼",
    type : "text",
  },
  // Bottom Track (Index 3)
  {
    name : "سارة م.",
    text : "سبحان الله الطريقة هذي هي نفس طريقة الطفل لما يتعلم لغته — ما تحتاج تحفظ ولا شي! 💡",
    level: "A1",
    emoji: "✨",
    type : "text",
  },
  // Top Track (Index 4)
  {
    name : "يوسف ح.",
    text : "كنت مستواي صفر حرفياً، والحين بعد ٣ شهور وصلت B1 — مو مصدق نفسي بصراحة ⭐",
    level: "B1",
    emoji: "📈",
    type : "text",
  },
  // Bottom Track (Index 5)
  {
    name : "عبدالله ن.",
    text : "كل يوم أتكلم ١٠ دقائق إنجليزي والحين صرت أفهم الأفلام بدون ترجمة — شكراً م. سارة 🎬",
    level: "B1",
    emoji: "🎬",
    type : "text",
  },

  // --- 2. SCREENSHOTS FROM ASSETS ---
  ...screenshotTestimonials
]);

