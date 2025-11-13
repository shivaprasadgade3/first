import Image from "next/image";
import Link from "next/link";

import { buildImageUrl } from "@/lib/image";
import type { TMDBMovie } from "@/types/tmdb";

interface HeroBannerProps {
  movie: TMDBMovie;
}

export function HeroBanner({ movie }: HeroBannerProps) {
  const imageUrl = buildImageUrl(movie.backdrop_path ?? movie.poster_path, "original");

  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
      <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8 sm:p-12">
        <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
          Featured
        </span>
        <h1 className="text-3xl font-bold text-white drop-shadow sm:text-4xl md:text-5xl">
          {movie.title}
        </h1>
        {movie.overview && (
          <p className="max-w-2xl text-sm text-zinc-200 sm:text-base">
            {movie.overview}
          </p>
        )}
        <div className="flex gap-3">
          <Link
            href={`/movie/${movie.id}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Watch Trailer
          </Link>
          <Link
            href={`/movie/${movie.id}`}
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;


