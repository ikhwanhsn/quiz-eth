import Link from "next/link";

const leaderboardData = [
  { rank: 1, name: "Alice", score: 95, reward: "500 QTH" },
  { rank: 2, name: "Bob", score: 90, reward: "400 QTH" },
  { rank: 3, name: "Charlie", score: 85, reward: "300 QTH" },
  { rank: 4, name: "David", score: 80, reward: "250 QTH" },
  { rank: 5, name: "Eve", score: 75, reward: "200 QTH" },
];

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#2b044d] to-[#0a0114] p-6">
      <h1 className="text-4xl font-bold text-white mb-6">🏆 Leaderboard</h1>

      <div className="w-full max-w-3xl bg-[#1b1e29] p-6 rounded-xl shadow-lg border border-gray-700">
        <table className="w-full text-white">
          <thead>
            <tr className="text-lg text-gray-300 border-b border-gray-700">
              <th className="py-3">Rank</th>
              <th className="py-3">Player</th>
              <th className="py-3">Score</th>
              <th className="py-3">Reward</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map(({ rank, name, score, reward }) => (
              <tr
                key={rank}
                className={`text-center text-lg ${
                  rank === 1
                    ? "text-yellow-400"
                    : rank === 2
                    ? "text-gray-300"
                    : rank === 3
                    ? "text-orange-400"
                    : "text-white"
                } hover:bg-[#2c3143] transition duration-300`}
              >
                <td className="py-4 font-bold">{rank}</td>
                <td className="py-4">{name}</td>
                <td className="py-4">{score}</td>
                <td className="py-4">{reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href="/">
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-bold shadow-md btn btn-lg">
          🔙 Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Leaderboard;
