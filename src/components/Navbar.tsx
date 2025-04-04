import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white shadow-lg shadow-purple-500/50 fixed top-0 z-50 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 border border-purple-500 text-white rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg shadow-purple-500/30"
          >
            <li>
              <Link href="/" className="hover:text-purple-400 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/quiz"
                className="hover:text-purple-400 transition-all"
              >
                Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/leaderboard"
                className="hover:text-purple-400 transition-all"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="hover:text-purple-400 transition-all"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-purple-400 hover:text-purple-300 transition-all"
        >
          QuizETH
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="/quiz" className="hover:text-purple-400 transition-all">
              Quiz
            </Link>
          </li>
          <li>
            <Link
              href="/leaderboard"
              className="hover:text-purple-400 transition-all"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              className="hover:text-purple-400 transition-all"
            >
              Documentation
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
