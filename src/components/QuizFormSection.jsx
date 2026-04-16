import { useState } from "react";
import { User, CheckCircle2, Zap } from "lucide-react";

const AGE_OPTIONS = [
  { val: "kids",   emoji: "🎈", title: "12 سنة وأقل",    sub: "الفئة أ" },
  { val: "adults", emoji: "👤", title: "أكبر من 12 سنة", sub: "الفئة ب" },
];

/**
 * Collects the student's name and age group before starting the quiz.
 * Delegates form-validation errors to local state; calls onSubmit only when valid.
 *
 * @param {{ onSubmit: (data: { name: string, isKids: boolean }) => void }} props
 */
export default function QuizFormSection({ onSubmit }) {
  const [name,     setName]  = useState("");
  const [ageGroup, setAge]   = useState("");
  const [error,    setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) { setError("من فضلك أدخل اسمك");           return; }
    if (!ageGroup)    { setError("من فضلك اختر فئتك العمرية");   return; }
    setError("");
    onSubmit({ name: name.trim(), isKids: ageGroup === "kids" });
  };

  return (
    <div id="quiz-form" className="glass-card rounded-3xl p-8 max-w-md w-full mx-auto animate-slide-up">
      {/* Header */}
      <div className="text-center mb-7">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-black text-gray-800 mb-1">أخبرنا عنك</h2>
        <p className="text-gray-400 text-sm">حتى نقدم لك تجربة مخصصة تماماً</p>
      </div>

      {/* Name field */}
      <div className="mb-5">
        <label htmlFor="quiz-name-input" className="block text-gray-700 font-semibold mb-2 text-sm">
          الاسم الكريم
        </label>
        <input
          id="quiz-name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اكتب اسمك هنا..."
          dir="rtl"
          className="w-full border-2 border-gray-200 focus:border-teal-400 rounded-2xl px-5 py-3.5
                     text-gray-800 placeholder-gray-300 outline-none transition-all duration-300
                     bg-white text-base font-medium"
        />
      </div>

      {/* Age group — the "logical placement" question */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1 text-sm">كم عمرك؟</label>
        <p className="text-gray-400 text-xs mb-3">يحدد هذا الاختيار نوع الأسئلة المناسبة لك</p>
        <div className="grid grid-cols-2 gap-4">
          {AGE_OPTIONS.map((g) => (
            <button
              key={g.val}
              id={`age-option-${g.val}`}
              onClick={() => setAge(g.val)}
              className={`rounded-2xl p-5 border-2 text-center transition-all duration-300 hover:scale-105 ${
                ageGroup === g.val
                  ? "border-teal-500 bg-teal-50 shadow-teal-100 shadow-lg"
                  : "border-gray-200 bg-white hover:border-teal-300"
              }`}
            >
              <div className="text-3xl mb-2">{g.emoji}</div>
              <div className="font-bold text-gray-800 text-sm">{g.title}</div>
              <div className="text-xs text-gray-400 mt-0.5">{g.sub}</div>
              {ageGroup === g.val && (
                <CheckCircle2 className="w-4 h-4 text-teal-500 mx-auto mt-2" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Validation error */}
      {error && (
        <p className="text-red-500 text-sm text-center mb-4 bg-red-50 rounded-xl py-2 px-4">
          ⚠️ {error}
        </p>
      )}

      <button id="quiz-start-btn" onClick={handleSubmit} className="btn-teal w-full text-lg py-4">
        ابدأ الاختبار الآن
        <Zap className="w-5 h-5" />
      </button>
    </div>
  );
}
