import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "QuizETH",
  description: "Decentralize quiz platform on the Ethereum blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-white text-black`}>
        <Provider>
          <AppShell>{children}</AppShell>
        </Provider>
      </body>
    </html>
  );
}
