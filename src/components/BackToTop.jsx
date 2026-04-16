import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only mount listener when needed or limit frequency
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 300);
      }, 50); // slight debounce for performance
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Do not render anything if not visible, saving memory
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="العودة للأعلى"
      className="fixed bottom-24 left-6 z-40 p-3 rounded-full bg-teal-600 text-white shadow-xl hover:bg-teal-700 hover:scale-110 transition-all duration-300 animate-fade-in focus:outline-none focus:ring-4 focus:ring-teal-200"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
