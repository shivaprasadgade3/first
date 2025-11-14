import "server-only";

import type { MovieCategory, TMDBMovie, TMDBMovieDetail, TMDBPaginatedResponse } from "@/types/tmdb";
import { getMockMoviesByCategory, getMockMovieById, getSimilarMovies } from "./mockData";

// Using mock data - no API key required
export async function fetchMoviesByCategory(category: MovieCategory): Promise<TMDBPaginatedResponse<TMDBMovie>> {
  // Simulate API delay for realism
  await new Promise(resolve => setTimeout(resolve, 100));
  return getMockMoviesByCategory(category);
}

export async function fetchMovieById(id: string): Promise<TMDBMovieDetail> {
  // Simulate API delay for realism
  await new Promise(resolve => setTimeout(resolve, 100));
  const movie = getMockMovieById(id);
  if (!movie) {
    throw new Error(`Movie with id ${id} not found`);
  }
  return movie;
}

export async function fetchSimilarMovies(movieId: string, limit: number = 12): Promise<TMDBMovie[]> {
  // Simulate API delay for realism
  await new Promise(resolve => setTimeout(resolve, 100));
  return getSimilarMovies(movieId, limit);
}


