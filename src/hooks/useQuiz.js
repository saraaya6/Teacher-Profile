import { useReducer, useCallback, useMemo } from "react";
import { SCREEN } from "../constants";
import { QUESTIONS } from "../data/quizData";

// ─── State shape ───────────────────────────────────────────────────────────
const initialState = {
  screen       : SCREEN.PORTFOLIO,
  user         : null,   // { name: string, isKids: boolean }
  score        : 0,
};

// ─── Action types ──────────────────────────────────────────────────────────
const ActionType = Object.freeze({
  START_QUIZ   : "START_QUIZ",
  FINISH_QUIZ  : "FINISH_QUIZ",
  RESTART      : "RESTART",
});

// ─── Pure reducer ─────────────────────────────────────────────────────────
function quizReducer(state, action) {
  switch (action.type) {
    case ActionType.START_QUIZ:
      return { ...state, screen: SCREEN.QUIZ, user: action.payload };

    case ActionType.FINISH_QUIZ:
      return { ...state, screen: SCREEN.RESULT, score: action.payload };

    case ActionType.RESTART:
      return initialState;

    default:
      return state;
  }
}

// ─── Hook ─────────────────────────────────────────────────────────────────
/**
 * Manages the top-level quiz state machine.
 *
 * Returns:
 *  - state   : { screen, user, score }
 *  - actions : { startQuiz, finishQuiz, restart, scrollToQuiz }
 *  - derived : { questions } — the right question bank for the current user
 */
export function useQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const startQuiz = useCallback((userData) => {
    dispatch({ type: ActionType.START_QUIZ, payload: userData });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const finishQuiz = useCallback((finalScore) => {
    dispatch({ type: ActionType.FINISH_QUIZ, payload: finalScore });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: ActionType.RESTART });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToQuiz = useCallback(() => {
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Derived value: correct question bank memoized
  const questions = useMemo(() => {
    return state.user
      ? QUESTIONS[state.user.isKids ? "kids" : "adults"]
      : [];
  }, [state.user]);

  return {
    state,
    questions,
    actions: { startQuiz, finishQuiz, restart, scrollToQuiz },
  };
}
