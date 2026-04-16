import { GraduationCap, Sparkles, Target } from "lucide-react";
import { WaIcon, waLink } from "../utils/helpers";

const STATS = [
  { num: "+200", label: "طالب وطالبة" },
  { num: "4", label: "دورات متخصصة" },
  { num: "A1→C1", label: "كل المستويات" },
];

/**
 * Full-viewport hero section with professional photo placeholder, 
 * heading, stats grid, and dual CTAs.
 *
 * @param {{ onStartTest: () => void }} props
 */
export default function HeroSection({ onStartTest }) {
  return (
    <section className="hero-section" id="hero">
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Top badge */}

        {/* Caption */}
        <p className="text-sm text-teal-600 font-semibold mb-4 animate-slide-up">
          م. سارة اليافعي — مهندسة · معلمة لغة إنجليزية
        </p>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          تعلم الإنجليزية{" "}
          <span className="gradient-text">بفطرة الطفل</span>
          <br />
          وذكاء المهندس
        </h1>

        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-3 animate-slide-up-delay">
          تعلم الإنجليزية كما تعلمت لغتك الأم — من خلال الاكتساب الطبيعي، لا الحفظ والتكرار
        </p>

        <br />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10 animate-slide-up-delay2">
          {STATS.map((s) => (
            <div key={s.num} className="text-center p-4 rounded-2xl bg-white border border-teal-100 shadow-sm">
              <p className="text-2xl font-black text-teal-600">{s.num}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay2">
          <button id="hero-start-test" onClick={onStartTest} className="btn-teal text-lg py-4 px-8">
            <Target className="w-5 h-5" />
            ابدأ اختبار تحديد المستوى
          </button>
          <a
            href={waLink("أهلاً م. سارة 👋 أريد الاستفسار عن دوراتك في اللغة الإنجليزية")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa text-base py-4 px-6"
          >
            <WaIcon />
            تواصل معي عبر واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
