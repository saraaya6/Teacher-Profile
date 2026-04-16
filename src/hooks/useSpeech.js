/**
 * Speaks a word aloud using the Web Speech API.
 * Returns a `speak(text)` function that is a no-op when the API is unavailable.
 *
 * @param {{ lang?: string, rate?: number }} options
 * @returns {{ speak: (text: string) => void, supported: boolean }}
 */
export function useSpeech({ lang = "en-US", rate = 0.85 } = {}) {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const speak = (text) => {
    if (!supported) return;
    window.speechSynthesis.cancel(); // stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  return { speak, supported };
}
