import { GraduationCap, Zap, Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { useState } from "react";

/**
 * Sticky navigation bar with brand logo image slot.
 * Becomes opaque + adds a subtle shadow once the user scrolls past 40 px.
 * Includes a mobile hamburger menu.
 *
 * @param {{ onStartTest: () => void }} props
 */
export default function Navbar({ onStartTest, onNavigateHome }) {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigateHome) {
      onNavigateHome(id);
    }
  };

  const NAV_LINKS = [
    { label: "الرئيسية",         id: "hero" },
    { label: "عنّي",         id: "about" },
    { label: "دوراتي",         id: "courses" },
    { label: "تحديد المستوى", id: "quiz-section" },
    { label: "كلمة اليوم",      id: "daily-word" },
    { label: "آراء الطلاب",     id: "testimonials" },
    { label: "مجانا!",         id: "resources" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Brand logo — supports image or icon fallback */}
        <div 
          className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105" 
          onClick={() => scrollTo("hero")}
        >
          {/* 
            LOGO IMAGE SLOT — Replace src with your logo path:
            <img src="/logo.png" alt="Logo" className="w-9 h-9 rounded-xl object-contain" />
          */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-black text-gray-800 text-sm leading-none">م. سارة اليافعي</p>
            <p className="text-teal-600 text-xs font-medium">English Educator</p>
          </div>
        </div>

        {/* Section links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <button id="nav-start-test" onClick={onStartTest} className="btn-teal text-sm py-2.5 px-5">
            <Zap className="w-4 h-4" />
            ابدأ الاختبار
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-teal-50 px-5 py-4 flex flex-col gap-3 animate-slide-up">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="nav-link text-right py-2">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
