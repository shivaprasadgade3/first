import "server-only";

import type { MovieCategory, TMDBMovie, TMDBMovieDetail, TMDBPaginatedResponse } from "@/types/tmdb";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

type SearchParams = Record<string, string | number | null | undefined>;

const defaultParams: SearchParams = {
  language: "en-US",
  include_adult: "false",
};

function buildUrl(endpoint: string, params: SearchParams = {}) {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    throw new Error("TMDB_API_KEY is not set. Add it to your environment variables.");
  }

  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", apiKey);
  Object.entries({ ...defaultParams, ...params }).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });
  return url.toString();
}

async function tmdbFetch<T>(endpoint: string, params?: SearchParams, init?: RequestInit): Promise<T> {
  const response = await fetch(buildUrl(endpoint, params), {
    ...init,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchMoviesByCategory(category: MovieCategory) {
  return tmdbFetch<TMDBPaginatedResponse<TMDBMovie>>(`/movie/${category}`);
}

export async function fetchMovieById(id: string) {
  return tmdbFetch<TMDBMovieDetail>(`/movie/${id}`);
}


