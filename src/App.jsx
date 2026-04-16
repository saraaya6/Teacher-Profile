import React, { Suspense } from "react";
import { SCREEN }        from "./constants";
import { useQuiz }       from "./hooks/useQuiz";

import Navbar            from "./components/Navbar";
import BackToTop         from "./components/BackToTop";

// Lazy load heavy screens
const PortfolioPage = React.lazy(() => import("./components/PortfolioPage"));
const QuizScreen    = React.lazy(() => import("./components/QuizScreen"));
const ResultScreen  = React.lazy(() => import("./components/ResultScreen"));

// Simple fallback loader
const FullScreenLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-200 border-t-teal-600"></div>
  </div>
);

/**
 * App root — owns only the top-level state machine via useQuiz().
 * All rendering is delegated to focused child components.
 */
export default function App() {
  const { state, questions, actions } = useQuiz();
  const { screen, user, score }       = state;
  const { startQuiz, finishQuiz, restart, scrollToQuiz } = actions;

  const navigateToSection = (id) => {
    if (screen !== SCREEN.PORTFOLIO) {
      restart();
      // Wait for React to mount the portfolio screen before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar 
        onStartTest={() => navigateToSection("quiz-section")} 
        onNavigateHome={(id) => navigateToSection(id)}
      />

      <Suspense fallback={<FullScreenLoader />}>
        {screen === SCREEN.PORTFOLIO && (
          <PortfolioPage
            onScrollToQuiz={scrollToQuiz}
            onFormSubmit={startQuiz}
          />
        )}

        {screen === SCREEN.QUIZ && user && (
          <QuizScreen
            user={user}
            questions={questions}
            onFinish={finishQuiz}
            onBack={() => {
              restart();
            }}
          />
        )}

        {screen === SCREEN.RESULT && user && (
          <ResultScreen
            user={user}
            score={score}
            onRestart={restart}
          />
        )}
      </Suspense>

      <BackToTop />
    </div>
  );
}
