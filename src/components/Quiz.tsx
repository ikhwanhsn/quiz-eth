"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { allQuestions } from "@/services/question";
import toast from "react-hot-toast";
import { getContract, getSigner } from "@/services/contract";

// Function to get 5 random questions
const getRandomQuestions = () => {
  return [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [questions, setQuestions] = useState<any[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);

  // Timer
  const [timeLeft, setTimeLeft] = useState(5);

  const [onChainHighestScore, setOnChainHighestScore] = useState(0);
  const [onChainTotalQuizzes, setOnChainTotalQuizzes] = useState(0);
  const [onChainReward, setOnChainReward] = useState(0);

  // Load user stats
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const contract = await getContract();
        const signer = await getSigner();
        const address = await signer.getAddress();

        const { highestScore, totalQuizPlayed, reward } =
          await contract.userDetails(address);

        setOnChainHighestScore(Number(highestScore));
        setOnChainTotalQuizzes(Number(totalQuizPlayed));
        setOnChainReward(Number(reward));
      } catch (err) {
        console.error("Failed to fetch on-chain user details", err);
        toast.error("Unable to load your on-chain quiz data");
      }
    };

    fetchUserDetails();
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
    const handleQuizFinish = async () => {
      if (isQuizFinished) {
        toast.success(`Quiz completed! Your final score: ${score}/${questions.length}`);

        try {
          const contract = await getContract();
          const tx = await contract.submitScore(score);

          toast.loading("Submitting score to blockchain...", { id: "submit" });
          await tx.wait();
          console.log(tx);
          toast.success("Score successfully submitted on-chain!", { id: "submit" });
        } catch (err) {
          console.error("Smart contract error:", err);
          toast.error("Failed to submit score to blockchain!");
        }

        setShowStartScreen(true);
      }
    };

    handleQuizFinish();
  }, [isQuizFinished]);

  const claimReward = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.claimReward();
      toast.loading("Claiming reward...", { id: "claim" });
      await tx.wait();
      toast.success("Reward claimed successfully!", { id: "claim" });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to claim reward");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {showStartScreen ? (
        <Card className="w-full max-w-lg p-6 bg-gray-800/90 rounded-2xl shadow-lg shadow-purple-500/50 border border-purple-500 text-white">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to the QuizETH!</h2>
            <p className="text-lg">
              Highest Score:{" "}
              <span className="font-bold text-yellow-400">
                {onChainHighestScore}/5
              </span>
            </p>
            <p className="text-lg">
              Total Quizzes Played:{" "}
              <span className="font-bold text-lime-400">
                {onChainTotalQuizzes}
              </span>
            </p>
            {/* <p className="text-lg">
              Win Rate:{" "}
              <span className="font-bold text-purple-400">
                {onChainTotalQuizzes > 0
                  ? (
                    ((score) /
                      (onChainTotalQuizzes * 5)) *
                    100
                  ).toFixed(2)
                  : "0.00"}
                %
              </span>
            </p> */}
            <p className="text-lg">
              Reward:{" "}
              <span className="font-bold text-green-400">
                {onChainReward} QET
              </span>
              {onChainReward > 0 && (
                <button
                  className="btn btn-xs btn-success text-white ml-2"
                  onClick={claimReward}
                >
                  Claim
                </button>
              )}
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
                    ${selectedOption === option
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
