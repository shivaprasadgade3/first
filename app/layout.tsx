import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StreamSphere | Streaming Dashboard",
  description:
    "Discover trending, top-rated, and upcoming movies in a sleek streaming dashboard powered by TMDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
          <Header />
          <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 pb-16 pt-28 sm:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
