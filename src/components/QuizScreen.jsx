import { useState } from "react";
import { BookOpen, ChevronRight, ChevronLeft, Award, CheckCircle2 } from "lucide-react";
import { OPTION_LABELS, COLORS_CYCLE } from "../constants";

/**
 * Runs the 20-question quiz for the given user.
 * All transition and answer state is local — only the final score bubbles up.
 *
 * @param {{
 *   user      : { name: string, isKids: boolean },
 *   questions : Array,
 *   onFinish  : (score: number) => void,
 *   onBack    : () => void,
 * }} props
 */
export default function QuizScreen({ user, questions, onFinish, onBack }) {
  const [current,      setCurrent]  = useState(0);
  const [selected,     setSelected] = useState(null);
  const [answers,      setAnswers]  = useState([]);
  const [revealed,     setRevealed] = useState(false);
  const [transitioning, setTrans]   = useState(false);

  const q        = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const isLast   = current === questions.length - 1;

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleSelect = (idx) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  const handleNext = () => {
    if (selected === null) return;

    const newAnswers = [...answers, { question: current, selected, correct: q.answer }];

    if (isLast) {
      const score = newAnswers.filter((a) => a.selected === a.correct).length;
      onFinish(score);
      return;
    }

    // Animate out → update → animate in
    setTrans(true);
    setTimeout(() => {
      setAnswers(newAnswers);
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
      setTrans(false);
    }, 350);
  };

  // ── Style helpers (derived from state, not stored in state) ───────────────
  const optionClass = (idx) => {
    const base =
      "option-btn w-full rounded-2xl border-2 px-5 py-4 text-right font-medium text-gray-700 bg-white flex items-center gap-4 text-sm md:text-base";
    if (!revealed) return `${base} ${COLORS_CYCLE[idx % 4]} border-gray-200`;
    if (idx === q.answer)                    return `${base} border-green-500 bg-green-50 text-green-700`;
    if (idx === selected && idx !== q.answer) return `${base} border-red-400 bg-red-50 text-red-700`;
    return `${base} border-gray-200 opacity-50`;
  };

  const labelClass = (idx) => {
    const base = "w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0";
    if (!revealed) return `${base} bg-gray-100 text-gray-600`;
    if (idx === q.answer)                    return `${base} bg-green-500 text-white`;
    if (idx === selected && idx !== q.answer) return `${base} bg-red-400 text-white`;
    return `${base} bg-gray-100 text-gray-400`;
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="quiz-bg min-h-screen flex flex-col px-4 py-6">
      {/* Progress bar */}
      <br />
      <br />
      <br />
      <div className="max-w-2xl w-full mx-auto mb-6">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-gray-400 text-sm hover:text-teal-600 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            رجوع
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">
              {user.isKids ? "🎈 اختبار الأطفال" : "👤 اختبار الكبار"}
            </span>
            <span className="text-sm font-black text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              {current + 1} / {questions.length}
            </span>
          </div>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div className="progress-fill h-full rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div
        className={`max-w-2xl w-full mx-auto glass-card rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-300 ${
          transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Category badge + question number */}
        <div className="flex items-center justify-between mb-6">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full ${
              user.isKids ? "bg-teal-100 text-teal-700" : "bg-blue-100 text-blue-700"
            }`}
          >
            {q.category}
          </span>
          <div className="flex items-center gap-2 text-gray-300">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs">سؤال {current + 1}</span>
          </div>
        </div>

        {/* Question text */}
        <p className="text-gray-800 font-bold text-lg md:text-xl leading-relaxed mb-8 ltr-text">
          {q.q}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              id={`option-${idx}`}
              onClick={() => handleSelect(idx)}
              className={optionClass(idx)}
            >
              <span className={labelClass(idx)}>{OPTION_LABELS[idx]}</span>
              <span className="flex-1 ltr-text">{opt}</span>
              {revealed && idx === q.answer && (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Instant feedback */}
        {revealed && (
          <div
            className={`mt-5 rounded-2xl px-5 py-3 text-sm font-semibold text-center animate-fade-in ${
              selected === q.answer
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {selected === q.answer
              ? "🎉 أحسنت! إجابة صحيحة"
              : `✗ الإجابة الصحيحة: ${q.options[q.answer]}`}
          </div>
        )}

        {/* Next / Finish button */}
        <button
          id="quiz-next-btn"
          onClick={handleNext}
          disabled={selected === null}
          className={`mt-6 w-full rounded-2xl py-4 font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
            selected !== null
              ? "btn-teal shadow-lg hover:scale-105"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
          }`}
        >
          {isLast ? (
            <><span>إنهاء الاختبار</span><Award className="w-5 h-5" /></>
          ) : (
            <><span>السؤال التالي</span><ChevronLeft className="w-5 h-5" /></>
          )}
        </button>

        <p className="text-center text-xs text-gray-300 mt-3">
          أهلاً <span className="text-teal-500 font-semibold">{user.name}</span> — أجب بصدق للحصول على أفضل توصية
        </p>
      </div>
    </div>
  );
}
