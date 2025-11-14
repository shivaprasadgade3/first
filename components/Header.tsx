"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Popular", href: "/#popular" },
  { label: "Top Rated", href: "/#top-rated" },
  { label: "Upcoming", href: "/#upcoming" },
];

export function Header() {
  const pathname = usePathname();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-[#E50914] md:text-xl">
          StreamSphere
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={isHome}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;


