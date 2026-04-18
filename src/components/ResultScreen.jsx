import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { GraduationCap, Sparkles, RefreshCw } from "lucide-react";
import { getResult } from "../data/quizData";
import { WaIcon, StarRating, waLink } from "../utils/helpers";
import ShimmerImage from "./ShimmerImage";

/**
 * Displays the CEFR result, recommended course poster, and WhatsApp CTA.
 *
 * @param {{
 *   user     : { name: string, isKids: boolean },
 *   score    : number,
 *   onRestart: () => void,
 * }} props
 */
export default function ResultScreen({ user, score, onRestart }) {
  const result = getResult(score, user.isKids);
  const pct = Math.round((score / 20) * 100);
  const confettiRan = useRef(false);

  // Fire confetti exactly once on mount
  useEffect(() => {
    if (confettiRan.current) return;
    confettiRan.current = true;

    const end = Date.now() + 2800;
    const colors = ["#0d9488", "#14b8a6", "#f59e0b", "#0ea5e9", "#ffffff"];
    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  // Dynamic WhatsApp message includes student name + CEFR level + course name
  const waMsg = [
    `أهلاً م. سارة 👋`,
    `أسمي ${user.name}، أكملت اختبار تحديد المستوى ونتيجتي هي ${result.level} — ${result.labelAr}.`,
    `أريد التسجيل في دورة: "${result.courseAr}" 📚`,
  ].join("\n");

  return (
    <div className="quiz-bg min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full animate-slide-up">
        <br />
        {/* Level badge */}
        <div className="text-center mb-6">
          <div
            className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${result.gradient} flex flex-col items-center justify-center mx-auto mb-4 shadow-2xl animate-bounce-gentle`}
          >
            <span className="text-4xl">{result.emoji}</span>
          </div>
          <div
            className={`inline-block bg-gradient-to-br ${result.gradient} text-white text-xs font-black tracking-widest px-4 py-1.5 rounded-full shadow mb-3`}
          >
            CEFR {result.level}
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-1">
            مستواك: <span className="gradient-text">{result.labelAr}</span>
          </h2>
          <p className="text-gray-400 text-sm">{result.labelEn}</p>
        </div>

        {/* Main card */}
        <div className="glass-card rounded-3xl p-6 shadow-2xl">

          {/* Score + circular progress */}
          <div className="flex items-center justify-between mb-5 bg-gray-50 rounded-2xl p-4">
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-0.5">نتيجتك</p>
              <p className="text-3xl font-black text-gray-800">
                {score}<span className="text-lg text-gray-400">/20</span>
              </p>
            </div>
            <div className="w-20 h-20 relative flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke="#0d9488" strokeWidth="3"
                  strokeDasharray={`${pct} ${100 - pct}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <span className="absolute text-sm font-black text-teal-700">{pct}%</span>
            </div>
          </div>

          {/* Stars */}
          <div className="text-center mb-5">
            <p className="text-xs text-gray-500 mb-2">تقييمك</p>
            <StarRating count={result.stars} />
          </div>

          {/* Course recommendation + poster */}
          <div className="bg-white rounded-2xl p-5 border border-teal-50 mb-5">
            <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-teal-500" />
              الدورة الموصى بها
            </p>
            <h3 className="text-xl font-black text-teal-700 mb-1">{result.courseAr}</h3>
            <p className="text-xs text-gray-400 mb-4">{result.courseEn}</p>

            {/* Course Poster */}
            <div
              className={`aspect-[9/16] w-full max-w-[300px] mx-auto rounded-2xl relative overflow-hidden shadow-md group`}
            >
              {result.imgSrc ? (
                <ShimmerImage
                  src={result.imgSrc}
                  alt={result.courseAr}
                  className="w-full h-full absolute inset-0"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${result.gradient} p-8 text-white flex flex-col items-center justify-center relative`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
                  />
                  <GraduationCap className="w-14 h-14 mx-auto mb-3 drop-shadow-lg relative z-10" />
                  <p className="font-black text-lg mb-1 relative z-10 text-center">{result.courseAr}</p>
                  <p className="text-xs opacity-80 mb-3 relative z-10 text-center">مع المهندسة سارة اليافعي</p>
                </div>
              )}
              {/* Level badge overlay */}
              <span
                className={`absolute top-4 left-4 bg-gradient-to-r ${result.gradient} text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md z-20`}
              >
                {result.level}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 mb-6 text-right">
            <p className="text-gray-700 text-sm leading-relaxed">{result.descAr}</p>
          </div>

          {/* WhatsApp CTA */}
          <a
            id="result-whatsapp-btn"
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa w-full text-base py-4"
          >
            <WaIcon />
            تواصل مع المهندسة سارة عبر واتساب
          </a>
        </div>

        {/* Restart */}
        <button
          id="restart-btn"
          onClick={onRestart}
          className="w-full mt-4 text-gray-400 hover:text-teal-600 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
        >
          <RefreshCw className="w-4 h-4" />
          إعادة الاختبار
        </button>
      </div>
    </div>
  );
}
