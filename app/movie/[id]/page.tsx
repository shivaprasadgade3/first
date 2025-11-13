import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buildImageUrl } from "@/lib/image";
import { fetchMovieById } from "@/lib/tmdb";

type MovieDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params }: MovieDetailPageProps,
): Promise<Metadata> {
  const movie = await fetchMovieById(params.id).catch(() => null);

  if (!movie) {
    return {
      title: "Movie Not Found | StreamSphere",
    };
  }

  return {
    title: `${movie.title} | StreamSphere`,
    description: movie.overview,
  };
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const movie = await fetchMovieById(params.id).catch(() => null);

  if (!movie) {
    notFound();
  }

  const backdropUrl = buildImageUrl(movie.backdrop_path ?? movie.poster_path, "original");
  const posterUrl = buildImageUrl(movie.poster_path, "poster");

  return (
    <article className="space-y-10">
      <div className="relative min-h-[50vh] overflow-hidden rounded-3xl border border-white/5">
        {backdropUrl && (
          <Image
            src={backdropUrl}
            alt={movie.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
        <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-12 lg:flex-row">
          {posterUrl && (
            <div className="mx-auto w-48 flex-shrink-0 sm:mx-0 sm:w-60 lg:w-64">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={posterUrl}
                  alt={`${movie.title} poster`}
                  fill
                  sizes="(max-width: 1024px) 240px, 256px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="flex flex-1 flex-col gap-4 text-white">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                {movie.release_date?.slice(0, 4) ?? "Unknown Year"}
              </span>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className="text-base italic text-white/70">“{movie.tagline}”</p>
              )}
            </div>
            {movie.overview && (
              <p className="max-w-3xl text-sm text-white/80 sm:text-base">
                {movie.overview}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              {movie.genres?.length ? (
                <span>
                  <strong className="text-white">Genres:</strong>{" "}
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              ) : null}
              {typeof movie.runtime === "number" && movie.runtime > 0 ? (
                <span>
                  <strong className="text-white">Runtime:</strong> {movie.runtime} min
                </span>
              ) : null}
              <span>
                <strong className="text-white">Rating:</strong>{" "}
                {movie.vote_average.toFixed(1)} / 10
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-4 text-sm">
              <Link
                href="/"
                className="rounded-full bg-white px-5 py-2 font-semibold text-black transition hover:bg-white/80"
              >
                Back to Browse
              </Link>
              {movie.homepage && (
                <Link
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-5 py-2 font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Official Site
                </Link>
              )}
              {movie.imdb_id && (
                <Link
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-5 py-2 font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  View on IMDb
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

