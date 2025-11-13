import Image from "next/image";
import Link from "next/link";

import { buildImageUrl } from "@/lib/image";
import type { TMDBMovie } from "@/types/tmdb";

interface MovieCardProps {
  movie: TMDBMovie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = buildImageUrl(movie.poster_path, "poster");
  const fallbackInitial = movie.title.charAt(0).toUpperCase();

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative flex h-56 w-40 flex-none overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl sm:h-64 sm:w-48"
    >
      {posterUrl ? (
        <Image
          src={posterUrl}
          alt={movie.title}
          fill
          sizes="(max-width: 640px) 160px, 192px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-700 text-3xl font-bold text-white">
          {fallbackInitial}
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-xs font-medium text-white">
        <div className="line-clamp-2 drop-shadow-lg">{movie.title}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </Link>
  );
}

export default MovieCard;


