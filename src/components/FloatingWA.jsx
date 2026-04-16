import { WaIcon, waLink } from "../utils/helpers";

/**
 * Fixed floating WhatsApp button — always visible in bottom-left (RTL: bottom-right visually).
 * Features a double-pulse ring animation for attention.
 */
export default function FloatingWA() {
  return (
    <a
      href={waLink("أهلاً م. سارة 👋 أحب أستفسر عن دوراتك")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="floating-wa group"
    >
      {/* Pulse rings */}
      <span className="floating-wa-ring floating-wa-ring-1" />
      <span className="floating-wa-ring floating-wa-ring-2" />

      {/* Icon */}
      <WaIcon className="w-7 h-7 relative z-10 transition-transform group-hover:scale-110" />
    </a>
  );
}
