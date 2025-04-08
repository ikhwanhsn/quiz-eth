"use client";

import { useAccount } from "wagmi";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { isConnected } = useAccount();
  const pathname = usePathname();
  return (
    <main className="min-h-screen relative">
      <Navbar />
      {pathname === "/" && <section className="h-16 w-full"></section>}
      {children}
      <footer
        className={`bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white text-center p-4 text-sm shadow-lg shadow-purple-500/50 bottom-0 w-full`}
      >
        <p className="tracking-wide">© 2025 QuizETH | Built for Hackathons</p>
      </footer>
    </main>
  );
};

export default AppShell;
