"use client";

import { getContract } from "@/services/contract";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type LeaderboardEntry = {
  player: string;
  score: number;
};

export const getLeaderboardData = async () => {
  const contract = await getContract();
  const data = await contract.getLeaderboard();
  return data;
};

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboardData();

        const formatted = data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((entry: any) => ({
            player: entry.player,
            score: Number(entry.score),
          }))
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .sort((a: any, b: any) => b.score - a.score);
        setLeaderboard(formatted);
      } catch (error) {
        toast.error("Failed to fetch leaderboard data.");
        console.error("Leaderboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#2b044d] to-[#0a0114] p-6">
      <h1 className="text-4xl font-bold text-white mb-6">🏆 Leaderboard</h1>

      <div className="w-full max-w-3xl bg-[#1b1e29] p-6 rounded-xl shadow-lg border border-gray-700">
        {loading ? (
          <p className="text-white text-center">Loading leaderboard...</p>
        ) : leaderboard.length === 0 || leaderboard.every(entry => entry.score === 0) ? (
          <p className="text-white text-center py-8">No leaderboard data yet. Be the first to submit your score! 🏃‍♂️</p>
        ) : (
          <table className="w-full text-white">
            <thead>
              <tr className="text-lg text-gray-300 border-b border-gray-700">
                <th className="py-3">Rank</th>
                <th className="py-3">Address</th>
                <th className="py-3">Score</th>
                <th className="py-3">Reward</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(({ player, score }, index) => {
                const rewardTable = [500, 400, 300, 250, 200];
                const reward = index < rewardTable.length ? `${rewardTable[index]} QET` : "-";
                const rank = index + 1;

                return (
                  <tr
                    key={`${player}-${index}`}
                    className={`text-center text-lg ${rank === 1
                      ? "text-yellow-400"
                      : rank === 2
                        ? "text-gray-300"
                        : rank === 3
                          ? "text-orange-400"
                          : "text-white"
                      } hover:bg-[#2c3143] transition duration-300`}
                  >
                    <td className="py-4 font-bold">{rank}</td>
                    <td className="py-4">
                      {player.slice(0, 6)}...{player.slice(-4)}
                    </td>
                    <td className="py-4">{score}</td>
                    <td className="py-4">{reward}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <Link href="/">
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-bold shadow-md btn btn-lg mb-12">
          🔙 Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Leaderboard;
