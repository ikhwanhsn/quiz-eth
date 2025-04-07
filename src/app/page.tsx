import { ChatWidget } from "@/components/ChatWidget";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0d2b] text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center justify-center py-20 px-6 min-h-screen">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          🚀 Welcome to QuizETH
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          A Web3-powered quiz platform where knowledge meets rewards! Compete,
          earn, and climb the leaderboard.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/quiz">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg rounded-lg font-bold shadow-md transition-all btn btn-lg">
              🎯 Start Quiz
            </button>
          </Link>
          <Link href="/leaderboard">
            <button className="px-6 py-3 border-2 border-blue-500 hover:bg-blue-500 text-lg rounded-lg font-bold shadow-md transition-all btn btn-lg">
              🏆 View Leaderboard
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-[#13133f] text-center">
        <h2 className="text-4xl font-bold">✨ Why QuizETH?</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          {[
            {
              title: "🔗 Web3 Integration",
              desc: "Secure login with crypto wallets.",
            },
            {
              title: "🏆 Global Leaderboard",
              desc: "Compete with top players worldwide.",
            },
            { title: "🎁 Crypto Rewards", desc: "Earn QTH tokens by winning." },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="w-64 p-6 bg-[#1e1e50] rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">⚡ How It Works</h2>
        <div className="flex flex-wrap justify-center mt-6 gap-6">
          {["1️⃣ Connect Wallet", "2️⃣ Play Quiz", "3️⃣ Earn Rewards"].map(
            (step, idx) => (
              <div
                key={idx}
                className="w-64 p-6 bg-[#1a1a44] rounded-lg shadow-md border border-gray-700"
              >
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="text-gray-300 mt-2">
                  {idx === 0
                    ? "Use MetaMask or WalletConnect."
                    : idx === 1
                    ? "Answer correctly to earn points."
                    : "Claim crypto for high scores."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* LEADERBOARD PREVIEW */}
      <section className="py-16 bg-[#13133f] text-center">
        <h2 className="text-4xl font-bold">🏅 Top Players</h2>
        <div className="max-w-lg mx-auto mt-6 bg-[#1a1a44] p-6 rounded-lg shadow-md border border-gray-700">
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-3">Rank</th>
                <th className="py-3">Player</th>
                <th className="py-3">Score</th>
              </tr>
            </thead>
            <tbody>
              {["Alice", "Bob", "Charlie"].map((player, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx === 0
                      ? "text-yellow-400"
                      : idx === 1
                      ? "text-gray-300"
                      : "text-orange-400"
                  }`}
                >
                  <td className="py-4">{idx + 1}</td>
                  <td className="py-4">{player}</td>
                  <td className="py-4">{95 - idx * 5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/leaderboard">
          <button className="mt-6 px-6 py-3 border-2 border-blue-500 hover:bg-blue-500 rounded-lg font-bold btn btn-lg">
            🔥 Full Leaderboard
          </button>
        </Link>
      </section>

      {/* CTA GET STARTED */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-extrabold">🚀 Ready to Play?</h2>
        <p className="mt-4 text-gray-300">
          Join QuizETH and start earning rewards today!
        </p>
        <Link href="/quiz">
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-lg rounded-lg font-bold shadow-md transition btn btn-lg">
            🎯 Start Quiz Now
          </button>
        </Link>
      </section>
      <ChatWidget />
    </div>
  );
};

export default Home;
