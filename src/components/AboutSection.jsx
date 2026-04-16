import { memo } from "react";
import { User } from "lucide-react";

/**
 * "نبذة عني" — About Eng. Sara section.
 * Placed between Hero and Courses.
 * Features a 2-column layout on desktop (Photo & Text) and centered on mobile.
 */
export default memo(function AboutSection() {
  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center animate-slide-up-delay">
        <div className="pill-badge mb-4 w-fit">
          <User className="w-3.5 h-3.5" />
          نبذة عني
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
          <span className="gradient-text">من سارة اليافعي ؟</span>
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-balance line-clamp-8">
          مهندسة برمجيات وخريجة تقنية معلومات بمرتبة الشرف الأولى، لدي خبرة 4 سنوات في تعليم اللغة الإنجليزية أؤمن أن تعلم اللغة الإنجليزية يشبه بناء الأنظمة الذكية؛ يحتاج إلى منطق، ممارسة، وفطرة وعفوية!. دمجت خبرتي التقنية مع شغفي بالتعليم لأبتكر أسلوباً يركز على اكتساب اللغة لا حفظها، مكنت من خلاله مئات الطلاب من التحدث بطلاقة وثقة.
        </p>
      </div>
    </section>
  );
});
