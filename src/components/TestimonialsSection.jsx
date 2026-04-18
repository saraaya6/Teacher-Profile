import { useEffect, useRef } from "react";
import { useAnimationFrame, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";
import ShimmerImage from "./ShimmerImage";
import { WaIcon, waLink } from "../utils/helpers";

// Split into two tracks (odd / even indices)
const TRACK_A = TESTIMONIALS.filter((_, i) => i % 2 === 0);
const TRACK_B = TESTIMONIALS.filter((_, i) => i % 2 !== 0);

// Triple for seamless loop
const looped = (arr) => [...arr, ...arr, ...arr];

/* ─── Smooth infinite marquee track using Framer Motion ─── */
function MarqueeTrack({ items, initialSpeed = 0.5, reverse = false }) {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const x = useRef(0);
  const speedRef = useRef(initialSpeed);

  // Only run animation cycle when physically visible on screeen
  const isInView = useInView(containerRef, { margin: "200px" });

  useEffect(() => {
    if (ref.current && reverse) {
      x.current = -(ref.current.scrollWidth / 3);
      ref.current.style.transform = `translateX(${x.current}px)`;
    }
  }, [reverse]);

  useAnimationFrame(() => {
    if (!isInView || !ref.current) return;
    const totalW = ref.current.scrollWidth / 3; // one copy
    const dir = reverse ? 1 : -1;
    x.current += dir * speedRef.current;

    // Reset seamlessly
    if (!reverse && x.current <= -totalW) x.current += totalW;
    if (reverse && x.current >= 0) x.current -= totalW;

    ref.current.style.transform = `translateX(${x.current}px)`;
  });

  const tripled = looped(items);

  return (
    <div className="marquee-container" dir="ltr" ref={containerRef}>
      <div
        ref={ref}
        className="flex gap-5 w-max will-change-transform"
        style={{ willChange: "transform" }}
        onMouseEnter={() => { speedRef.current = 0; }}
        onMouseLeave={() => { speedRef.current = initialSpeed; }}
      >
        {tripled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} item={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Individual Card ─── */
function TestimonialCard({ item }) {
  return (
    <div className="testi-screenshot-card flex-shrink-0">
      {item.imgSrc ? (
        <ShimmerImage
          src={item.imgSrc}
          alt={item.imgAlt || "تقييم طالب"}
          className="w-full h-full rounded-3xl"
          imgClassName="rounded-3xl"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl flex flex-col items-center justify-center gap-3">
          <WaIcon className="w-10 h-10 text-green-400 opacity-40" />
          <p className="text-xs text-gray-300 font-medium">WhatsApp Screenshot</p>
        </div>
      )}
    </div>
  );
}

/**
 * Dual-track testimonials section with Framer Motion infinite scroll.
 * Track A scrolls RTL, Track B scrolls LTR — creates visual depth.
 */
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-5 mb-12 text-center">
        <div className="pill-badge mx-auto mb-4 w-fit">
          <MessageCircle className="w-3.5 h-3.5" />
          قصص النجاح
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
          ماذا يقول <span className="gradient-text">طلابي</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          آراء حقيقية من طلاب وطالبات تحولت رحلتهم في اللغة الإنجليزية
        </p>
      </div>
      <div className="section-divider mb-12" />

      {/* Track A — moves left */}
      <div className="mb-6">
        <MarqueeTrack items={TRACK_A} speed={0.4} />
      </div>

      {/* Track B — moves right */}
      <div>
        <MarqueeTrack items={TRACK_B} speed={0.35} reverse />
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href={waLink("أهلاً م. سارة 👋 أريد الانضمام لدوراتك     !")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa inline-flex"
        >
          <WaIcon />
          انضم لعائلة الطلاب الناجحين
        </a>
      </div>
    </section>
  );
}
