import React, { Suspense } from "react";
import { Target } from "lucide-react";
import HeroSection         from "./HeroSection";
import AboutSection        from "./AboutSection";
import DailyWordSection    from "./DailyWordSection";
import QuizFormSection     from "./QuizFormSection";

// Lazy loaded heavy sections with images
const CoursesSection      = React.lazy(() => import("./CoursesSection"));
const TestimonialsSection = React.lazy(() => import("./TestimonialsSection"));

// Simple block loader
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse flex gap-2">
      <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
    </div>
  </div>
);
import ResourcesSection    from "./ResourcesSection";
import SiteFooter          from "./SiteFooter";
import FloatingWA          from "./FloatingWA";

const scrollToQuizSection = () =>
  document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });

/**
 * Assembles all portfolio sections into a single scrollable page.
 *
 * @param {{
 *   onScrollToQuiz : () => void,   navbar / hero CTA → smooth-scroll to form
 *   onFormSubmit   : (data) => void   quiz form → launch quiz
 * }} props
 */
export default function PortfolioPage({ onScrollToQuiz, onFormSubmit }) {
  return (
    <div>
      <HeroSection onStartTest={onScrollToQuiz} />
      <AboutSection />
      
      <Suspense fallback={<SectionLoader />}>
        <CoursesSection />
      </Suspense>

      {/* ── Embedded Quiz Section ── */}
      <section
        id="quiz-section"
        className="py-20 px-5 bg-gradient-to-br from-teal-600 to-teal-800 relative overflow-hidden"
      >
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize : "30px 30px",
          }}
        />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              اعرف مستواك الحقيقي
            </h2>
            <p className="text-teal-100 text-base">
              الاختبار الذكي الذي يحدد مستواك CEFR ويوصي بالدورة المثالية لك
            </p>
          </div>

          <QuizFormSection onSubmit={onFormSubmit} />
        </div>
      </section>

      <DailyWordSection />

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      <ResourcesSection />
      <SiteFooter onStartTest={scrollToQuizSection} />

      {/* Floating WhatsApp button — always visible */}
      <FloatingWA />
    </div>
  );
}
