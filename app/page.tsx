import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import { fetchMoviesByCategory } from "@/lib/tmdb";
import type { MovieCategory } from "@/types/tmdb";

const CATEGORY_CONFIG: Array<{
  key: MovieCategory;
  title: string;
  anchorId: string;
}> = [
  { key: "popular", title: "Popular Picks", anchorId: "popular" },
  { key: "top_rated", title: "Top Rated", anchorId: "top-rated" },
  { key: "upcoming", title: "Coming Soon", anchorId: "upcoming" },
];

export default async function HomePage() {
  const categoryData = await Promise.all(
    CATEGORY_CONFIG.map(async ({ key, title, anchorId }) => {
      try {
        const data = await fetchMoviesByCategory(key);
        return {
          key,
          title,
          anchorId,
          movies: data.results ?? [],
          error: null as string | null,
        };
      } catch (error) {
        console.error(`Failed to fetch TMDB category: ${key}`, error);
        return {
          key,
          title,
          anchorId,
          movies: [],
          error: (error as Error).message,
        };
      }
    }),
  );

  const heroMovie = categoryData.find((category) => category.movies.length > 0)?.movies[0];
  const hadErrors = categoryData.some((category) => category.error);

  return (
    <div className="space-y-14">
      {hadErrors && (
        <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-100">
          Unable to load TMDB data. Double-check that TMDB_API_KEY is set in your environment variables.
        </div>
      )}
      {heroMovie && <HeroBanner movie={heroMovie} />}
      <section className="space-y-12">
        {categoryData.map(({ key, title, anchorId, movies }) => (
          <MovieRow
            key={key}
            categoryTitle={title}
            anchorId={anchorId}
            movies={key === "popular" ? movies.slice(1, 13) : movies.slice(0, 12)}
          />
        ))}
      </section>
    </div>
  );
}
