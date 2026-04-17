import { memo } from "react";
import { User } from "lucide-react";
import aboutImg from '../assets/about.png';

/**
 * "نبذة عني" — About Eng. Sara section.
 * Placed between Hero and Courses.
 * Features a 2-column layout on desktop (Photo & Text) and centered on mobile.
 */
export default memo(function AboutSection() {
  return (
    <section id="about" className="py-20 px-5 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Section (Right side on desktop, Bottom on mobile) */}
        <div className="w-full flex-1 flex flex-col items-center md:items-start text-center md:text-start animate-slide-up-delay order-2 md:order-1">
          <div className="pill-badge mb-4 w-fit">
            <User className="w-3.5 h-3.5" />
            نبذة عني
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            <span className="gradient-text"> سارة اليافعي </span>
          </h2>
          <br />

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-balance">
            مهندسة برمجيات وخريجة تقنية معلومات بمرتبة الشرف الأولى، لدي خبرة 4 سنوات في تعليم اللغة الإنجليزية أؤمن أن تعلم اللغة الإنجليزية يشبه بناء الأنظمة الذكية؛ يحتاج إلى منطق، ممارسة، وفطرة وعفوية!. دمجت خبرتي التقنية مع شغفي بالتعليم لأبتكر أسلوباً يركز على اكتساب اللغة لا حفظها، مكنت من خلاله مئات الطلاب من التحدث بطلاقة وثقة.
          </p>
        </div>

        {/* Image Section (Left side on desktop, Top on mobile) */}
        <div className="w-full flex-1 flex justify-center order-1 md:order-2 animate-slide-up-delay">
          <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-primary/5">
            <div className="-mb-[10%]">
              <img
                src={aboutImg}
                alt="سارة اليافعي"
                className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});
