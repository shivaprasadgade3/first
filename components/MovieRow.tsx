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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 backdrop-blur-sm text-white shadow-lg transition-all hover:bg-white/20 hover:scale-110 active:scale-95 z-10"
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
      {(categoryTitle || anchorId) && (
        <div className="flex items-center justify-between">
          {categoryTitle && (
            <h2 className="text-lg font-semibold text-white md:text-2xl">{categoryTitle}</h2>
          )}
          <div className="flex items-center gap-3">
            <ScrollButton direction="left" onClick={() => handleScroll(-400)} />
            <ScrollButton direction="right" onClick={() => handleScroll(400)} />
          </div>
        </div>
      )}
      {!categoryTitle && !anchorId && (
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3">
            <ScrollButton direction="left" onClick={() => handleScroll(-400)} />
            <ScrollButton direction="right" onClick={() => handleScroll(400)} />
          </div>
        </div>
      )}
      <div className="relative">
        <div 
          ref={scrollRef} 
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="snap-start flex-none">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


