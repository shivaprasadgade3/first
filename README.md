# StreamSphere

A streamlined streaming dashboard built with Next.js 14 App Router, TypeScript, and Tailwind CSS. The app pulls in real-time movie data from TMDB, showcases a hero banner, horizontally scrollable rows, and detailed movie pages.

## Features
- Server-rendered homepage with hero banner and curated movie rows for Popular, Top Rated, and Coming Soon titles
- Responsive Tailwind design with fixed navigation header and smooth horizontal scrolling
- Dynamic movie detail route with rich metadata, external links, and optimized images
- Shared TMDB data access layer with TypeScript typings and server-only fetch helpers

## Getting Started
1. Copy the environment template and add your TMDB key:
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` and set `TMDB_API_KEY` to a valid TMDB v3 API key.

2. Install dependencies (including dev tooling for linting):
   ```bash
   npm install --include=dev
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to view the dashboard.

4. Lint the project:
   ```bash
   npm run lint
   ```

## Deployment
- Deploy via Vercel and add `TMDB_API_KEY` as a Production environment variable.
- After deploying, redeploy or trigger a rebuild when keys change; responses are cached for 60 seconds.

## Project Structure
- `app/` - App Router pages, including dynamic movie detail route
- `components/` - Reusable UI pieces such as header, hero banner, and movie rows/cards
- `lib/` - TMDB API client and image helper utilities
- `types/` - TypeScript interfaces for TMDB responses

## Scripts
- `npm run dev` - Start local development server
- `npm run build` - Create an optimized production build
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint against the project

## License
This project is for the Frontend Developer technical task and is not licensed for redistribution.
