import { memo } from "react";
import { BookOpen, Heart, Volume2 } from "lucide-react";
import { getDailyWord } from "../data/quizData";
import { useSpeech }    from "../hooks/useSpeech";

/**
 * Displays today's rotating vocabulary card with a text-to-speech button.
 */
export default memo(function DailyWordSection() {
  const word   = getDailyWord();
  const today  = new Date().toLocaleDateString("ar-YE", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  const { speak } = useSpeech();

  return (
    <section id="daily-word" className="py-20 px-5">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="pill-badge mx-auto mb-4 w-fit">
            <BookOpen className="w-3.5 h-3.5" />
            كلمة اليوم
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              <span className="gradient-text">أثري مفرداتك يوميا</span>
          </h2>
          <br />
          <p className="text-gray-400 text-sm">{today}</p>
        </div>

        {/* Word card */}
        <div className="word-card p-8 md:p-10 text-center">
          {/* Word + speech button */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900" dir="ltr">
              {word.word}
            </h3>
            <button
              onClick={() => speak(word.word)}
              title="استمع للنطق"
              aria-label="استمع للنطق"
              className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center hover:bg-teal-200 transition-colors flex-shrink-0"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Part of speech */}
          <span
            className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-5"
            dir="ltr"
          >
            {word.pos}
          </span>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-300 to-cyan-300 mx-auto mb-5 rounded" />

          {/* Meaning */}
          <p className="text-gray-600 text-base mb-4 leading-relaxed" dir="ltr">
            <span className="font-semibold text-gray-800">Meaning: </span>
            {word.meaning}
          </p>

          {/* Example sentence */}
          <div className="bg-white rounded-2xl p-4 mb-5 border border-teal-100">
            <p className="text-xs text-teal-500 font-bold mb-1 text-right">مثال</p>
            <p className="text-gray-700 text-sm italic leading-relaxed" dir="ltr">
              "{word.example}"
            </p>
          </div>

          {/* Arabic translation */}
          <div className="bg-teal-600 text-white rounded-2xl p-4">
            <p className="text-xs opacity-70 mb-1">الترجمة العربية</p>
            <p className="text-xl font-black">{word.arabic}</p>
          </div>

          {/* Footer hint */}
          <p className="text-xs text-gray-400 mt-5 flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 text-red-400" />
            تعود غداً لكلمة جديدة — كلمة جديدة كل يوم
          </p>
        </div>
      </div>
    </section>
  );
});
