"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { TMDBMovie } from "@/types/tmdb";
import MovieCard from "./MovieCard";

interface MovieRowProps {
  movies: TMDBMovie[];
  categoryTitle: string;
  anchorId?: string;
}

function ScrollButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg transition hover:bg-white/20 md:flex"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

export default function MovieRow({ movies, categoryTitle, anchorId }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  if (!movies.length) {
    return null;
  }

  return (
    <section id={anchorId} className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white md:text-2xl">{categoryTitle}</h2>
        <div className="hidden items-center gap-3 md:flex">
          <ScrollButton direction="left" onClick={() => handleScroll(-400)} />
          <ScrollButton direction="right" onClick={() => handleScroll(400)} />
        </div>
      </div>
      <div className="relative">
        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {movies.map((movie) => (
            <div key={movie.id} className="snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


