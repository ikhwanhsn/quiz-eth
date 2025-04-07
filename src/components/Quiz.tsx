"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { allQuestions } from "@/services/question";

// Function to get 5 random questions
const getRandomQuestions = () => {
  return [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [highestScore, setHighestScore] = useState<number>(0);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const totalQuestions: number = 10;

  // User Stats
  const [totalQuizzesPlayed, setTotalQuizzesPlayed] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

  // Timer
  const [timeLeft, setTimeLeft] = useState(5);

  // Load user stats
  useEffect(() => {
    const storedScore = localStorage.getItem("highestScore");
    const storedQuizzes = localStorage.getItem("totalQuizzesPlayed");
    const storedCorrectAnswers = localStorage.getItem("totalCorrectAnswers");

    if (storedScore) setHighestScore(parseInt(storedScore));
    if (storedQuizzes) setTotalQuizzesPlayed(parseInt(storedQuizzes));
    if (storedCorrectAnswers)
      setTotalCorrectAnswers(parseInt(storedCorrectAnswers));
  }, []);

  const startQuiz = () => {
    setQuestions(getRandomQuestions()); // Get new 5 random questions
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsQuizFinished(false);
    setShowStartScreen(false);
    setTimeLeft(5);
  };

  const handleSelect = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);

      if (option === questions[currentQuestion].answer) {
        setScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => nextQuestion(), 1000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(5);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Timer logic
  useEffect(() => {
    if (!showStartScreen && !isAnswered) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setIsAnswered(true);
        setTimeout(() => nextQuestion(), 1000);
      }
    }
  }, [timeLeft, isAnswered, showStartScreen]);

  // Handle quiz completion
  useEffect(() => {
    if (isQuizFinished) {
      alert(`Quiz completed! Your final score: ${score}/${questions.length}`);

      // Update highest score
      if (score > highestScore) {
        setHighestScore(score);
        localStorage.setItem("highestScore", score.toString());
      }

      // Update total quizzes played and correct answers
      const newTotalQuizzes = totalQuizzesPlayed + 1;
      const newTotalCorrectAnswers = totalCorrectAnswers + score;

      setTotalQuizzesPlayed(newTotalQuizzes);
      setTotalCorrectAnswers(newTotalCorrectAnswers);

      localStorage.setItem("totalQuizzesPlayed", newTotalQuizzes.toString());
      localStorage.setItem(
        "totalCorrectAnswers",
        newTotalCorrectAnswers.toString()
      );

      setShowStartScreen(true);
    }
  }, [isQuizFinished]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {showStartScreen ? (
        <Card className="w-full max-w-lg p-6 bg-gray-800/90 rounded-2xl shadow-lg shadow-purple-500/50 border border-purple-500 text-white">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to the QuizETH!</h2>
            <p className="text-lg">
              Highest Score:{" "}
              <span className="font-bold text-yellow-400">
                {highestScore}/5
              </span>
            </p>
            <p className="text-lg">
              Total Quizzes Played:{" "}
              <span className="font-bold text-lime-400">
                {totalQuizzesPlayed}
              </span>
            </p>
            <p className="text-lg">
              Win Rate:{" "}
              <span className="font-bold text-purple-400">
                {totalQuizzesPlayed > 0
                  ? (
                      (totalCorrectAnswers / (totalQuizzesPlayed * 5)) *
                      100
                    ).toFixed(2)
                  : "0.00"}
                %
              </span>
            </p>
            <p className="text-lg">
              Reward: <span className="font-bold text-green-400">1820 QET</span>{" "}
              <button className="btn btn-xs btn-success text-white">
                Claim
              </button>
            </p>
            <button
              onClick={startQuiz}
              className="btn px-6 py-2 mt-4 bg-blue-500 border-blue-400 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Start Quiz
            </button>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-lg p-6 bg-gray-800/90 rounded-2xl shadow-lg shadow-purple-500/50 border border-purple-500 text-white">
          <CardContent>
            <h2 className="text-xl font-bold mb-3">
              {questions[currentQuestion]?.question}
            </h2>
            <p className="text-sm text-yellow-400 mb-2">
              Time left: {timeLeft}s
            </p>
            <div className="space-y-3">
              {questions[currentQuestion]?.options.map(
                (option: string, index: number) => (
                  <button
                    key={index}
                    className={`w-full cursor-pointer py-2 px-4 text-left rounded-lg transition-all 
                    ${
                      selectedOption === option
                        ? option === questions[currentQuestion].answer
                          ? "bg-green-500"
                          : "bg-red-500"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => handleSelect(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
