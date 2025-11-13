export type ImageSize = "poster" | "backdrop" | "original";

const IMAGE_BASES: Record<ImageSize, string> = {
  poster: "https://image.tmdb.org/t/p/w500",
  backdrop: "https://image.tmdb.org/t/p/w1280",
  original: "https://image.tmdb.org/t/p/original",
};

export function buildImageUrl(path: string | null, size: ImageSize = "poster"): string | null {
  if (!path) return null;
  return `${IMAGE_BASES[size]}${path}`;
}


