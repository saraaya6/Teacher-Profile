import { useState, useEffect } from "react";

/**
 * Detects whether the page has been scrolled past a threshold.
 * @param {number} threshold  px from top (default 40)
 * @returns {boolean}         true when scrolled past threshold
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
