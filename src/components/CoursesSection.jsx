import { BookOpenCheck } from "lucide-react";
import { COURSES } from "../data/courses";
import { WaIcon } from "../utils/helpers";
import ShimmerImage from "./ShimmerImage";

/**
 * "دوراتي" — My Courses grid section.
 * Each card features a 2:3 poster placeholder and a shiny WhatsApp CTA.
 */
export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-5 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="pill-badge mx-auto mb-4 w-fit">
            <BookOpenCheck className="w-3.5 h-3.5" />
            دوراتي
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            اختر <span className="gradient-text">دورتك المثالية</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            4 دورات مصممة بعناية لكل مستوى — من تأسيس الأطفال إلى المحادثة المكثفة
          </p>
        </div>
        <div className="section-divider mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className="course-card group"
            >
              {/* Poster — 4:5 aspect ratio (Canva size) */}
              <div
                className={`aspect-[4/5] w-full rounded-t-2xl bg-gradient-to-br ${course.posterBg} flex flex-col items-center justify-center gap-4 relative overflow-hidden`}
              >
                {course.imgSrc ? (
                  <ShimmerImage
                    src={course.imgSrc}
                    alt={course.nameAr}
                    className="w-full h-full absolute inset-0"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                    {/* Decorative background pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 40%, currentColor 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    {/* Big emoji placeholder */}
                    <span className="text-7xl relative z-10 transition-transform duration-500 group-hover:scale-110">
                      {course.emoji}
                    </span>
                    <p className="text-sm font-bold text-gray-400 relative z-10">
                      Course Poster
                    </p>
                  </>
                )}
                {/* Level badge */}
                <span
                  className={`absolute top-4 left-4 bg-gradient-to-r ${course.color} text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md z-20`}
                >
                  {course.level}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-1">
                  {course.nameAr}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-2" dir="ltr">
                  {course.nameEn}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {course.descAr}
                </p>

                {/* Shiny WhatsApp CTA */}
                <a
                  href={course.waMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-${course.id}`}
                  className="shiny-btn w-full"
                >
                  <WaIcon className="w-4 h-4" />
                  سجّل الآن عبر واتساب
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
