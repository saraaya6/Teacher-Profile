// ─── App-wide Constants ────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "966572697195";

/** Page/screen identifiers used in the root state machine */
export const SCREEN = Object.freeze({
  PORTFOLIO : "portfolio",
  QUIZ      : "quiz",
  RESULT    : "result",
});

/** Labels shown on option buttons */
export const OPTION_LABELS = ["A", "B", "C", "D"];

/** Tailwind classes cycled per option index (before reveal) */
export const COLORS_CYCLE = [
  "border-teal-300   hover:bg-teal-50   hover:border-teal-500",
  "border-cyan-300   hover:bg-cyan-50   hover:border-cyan-500",
  "border-blue-300   hover:bg-blue-50   hover:border-blue-500",
  "border-indigo-300 hover:bg-indigo-50 hover:border-indigo-500",
];
