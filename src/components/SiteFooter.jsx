import { memo } from "react";
import { GraduationCap, Target } from "lucide-react";
import { WaIcon, waLink } from "../utils/helpers";

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FOOTER_LINKS = [
  { label: "من أنا؟",      id: "about"       },
  { label: "دوراتي",      id: "courses"       },
  { label: " تحديد المستوى", id: "quiz-section" },
  { label: "كلمة اليوم",  id: "daily-word"    },
  { label: "آراء الطلاب", id: "testimonials"  },
  { label: "مجانا",     id: "resources"     },
];

/**
 * Dark site footer with brand identity, quick scroll links, LinkedIn, and dual CTAs.
 *
 * @param {{ onStartTest: () => void }} props
 */
export default memo(function SiteFooter({ onStartTest }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          {/* 
            FOOTER LOGO SLOT
            Replace with: <img src="/logo-white.png" alt="Eng. Sara" className="w-12 h-12 object-contain" />
          */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-black mb-2">م. سارة اليافعي</h3>
        <p className="text-gray-400 text-sm mb-6" dir="ltr">
        تعلم الإنجليزية كما تعلمت لغتك الأم  
        </p>

        {/* Quick links */}
        <nav className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400" aria-label="Footer navigation">
          {FOOTER_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="hover:text-teal-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <LinkedinIcon className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href={waLink("أهلاً م. سارة 👋")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-green-600/30 flex items-center justify-center transition-colors"
          >
            <WaIcon className="w-5 h-5 text-gray-300" />
          </a>
        </div>
        <div className="w-full h-px bg-gray-800 mb-6" />
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Eng. Sara Al-Yafey · All rights reserved
        </p>
      </div>
    </footer>
  );
});
