import type { MovieCategory, TMDBMovie, TMDBMovieDetail, TMDBPaginatedResponse } from "@/types/tmdb";

// Mock movies data - using real TMDB image paths (public, no API key needed)
const mockMovies: TMDBMovie[] = [
  {
    id: 550,
    title: "Fight Club",
    original_title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    release_date: "1999-10-15",
    vote_average: 8.433,
    vote_count: 27952,
    genre_ids: [18],
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    original_title: "The Shawshank Redemption",
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates.",
    poster_path: null,
    backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    vote_count: 26887,
    genre_ids: [18, 80],
  },
  {
    id: 238,
    title: "The Godfather",
    original_title: "The Godfather",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    release_date: "1972-03-24",
    vote_average: 9.2,
    vote_count: 19220,
    genre_ids: [18, 80],
  },
  {
    id: 424,
    title: "Schindler's List",
    original_title: "Schindler's List",
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    release_date: "1993-12-15",
    vote_average: 8.9,
    vote_count: 14590,
    genre_ids: [18, 36, 10752],
  },
  {
    id: 240,
    title: "The Godfather Part II",
    original_title: "The Godfather Part II",
    overview: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    backdrop_path: "/kGzFbGhp99zva6oZODW5atcTNjX.jpg",
    release_date: "1974-12-20",
    vote_average: 9.0,
    vote_count: 11532,
    genre_ids: [18, 80],
  },
  {
    id: 497,
    title: "The Green Mile",
    original_title: "The Green Mile",
    overview: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    poster_path: "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    backdrop_path: "/yuNSFeoyTqzJbMK9q0VLvK8bq2s.jpg",
    release_date: "1999-12-10",
    vote_average: 8.5,
    vote_count: 16320,
    genre_ids: [14, 18, 80],
  },
  {
    id: 13,
    title: "Forrest Gump",
    original_title: "Forrest Gump",
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop_path: "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
    release_date: "1994-06-23",
    vote_average: 8.5,
    vote_count: 26018,
    genre_ids: [35, 18, 10749],
  },
  {
    id: 122,
    title: "The Lord of the Rings: The Return of the King",
    original_title: "The Lord of the Rings: The Return of the King",
    overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
    poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    release_date: "2003-12-01",
    vote_average: 8.8,
    vote_count: 22897,
    genre_ids: [12, 14, 28],
  },
  {
    id: 680,
    title: "Pulp Fiction",
    original_title: "Pulp Fiction",
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    release_date: "1994-09-10",
    vote_average: 8.9,
    vote_count: 26887,
    genre_ids: [80, 18],
  },
  {
    id: 11216,
    title: "Cinema Paradiso",
    original_title: "Nuovo Cinema Paradiso",
    overview: "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    poster_path: "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
    backdrop_path: null,
    release_date: "1988-11-17",
    vote_average: 8.5,
    vote_count: 4012,
    genre_ids: [18, 10749],
  },
  {
    id: 129,
    title: "Spirited Away",
    original_title: "千と千尋の神隠し",
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    release_date: "2001-07-20",
    vote_average: 8.5,
    vote_count: 15220,
    genre_ids: [16, 10751, 14],
  },
  {
    id: 120,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    original_title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    release_date: "2001-12-18",
    vote_average: 8.4,
    vote_count: 23820,
    genre_ids: [12, 14, 28],
  },
  {
    id: 155,
    title: "The Dark Knight",
    original_title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    release_date: "2008-07-14",
    vote_average: 9.0,
    vote_count: 31857,
    genre_ids: [18, 28, 80, 53],
  },
  {
    id: 27205,
    title: "Inception",
    original_title: "Inception",
    overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    release_date: "2010-07-15",
    vote_average: 8.8,
    vote_count: 36022,
    genre_ids: [28, 878, 53],
  },
  {
    id: 157336,
    title: "Interstellar",
    original_title: "Interstellar",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    release_date: "2014-11-05",
    vote_average: 8.4,
    vote_count: 34523,
    genre_ids: [18, 878],
  },
  {
    id: 49026,
    title: "The Dark Knight Rises",
    original_title: "The Dark Knight Rises",
    overview: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest.",
    poster_path: "/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    backdrop_path: "/3bgs3pX3kfvmk6L6B9Q3Yz9Vjv5.jpg",
    release_date: "2012-07-16",
    vote_average: 8.2,
    vote_count: 21000,
    genre_ids: [28, 80, 18, 53],
  },
  {
    id: 429,
    title: "The Good, the Bad and the Ugly",
    original_title: "Il buono, il brutto, il cattivo",
    overview: "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of the strongbox containing $200,000 in stolen gold.",
    poster_path: "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    backdrop_path: "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
    release_date: "1966-12-23",
    vote_average: 8.8,
    vote_count: 7890,
    genre_ids: [37],
  },
  {
    id: 389,
    title: "12 Angry Men",
    original_title: "12 Angry Men",
    overview: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    poster_path: "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    backdrop_path: "/mSDsSDwaP3E7dEfupWy92B7OYL8.jpg",
    release_date: "1957-04-10",
    vote_average: 9.0,
    vote_count: 8200,
    genre_ids: [18],
  },
  {
    id: 475557,
    title: "Joker",
    original_title: "Joker",
    overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    release_date: "2019-10-02",
    vote_average: 8.2,
    vote_count: 24500,
    genre_ids: [80, 18, 53],
  },
  {
    id: 496243,
    title: "Parasite",
    original_title: "기생충",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    release_date: "2019-05-30",
    vote_average: 8.5,
    vote_count: 18200,
    genre_ids: [35, 18, 53],
  },
  {
    id: 19404,
    title: "Dilwale Dulhania Le Jayenge",
    original_title: "दिलवाले दुल्हनिया ले जायेंगे",
    overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family.",
    poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    backdrop_path: "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
    release_date: "1995-10-20",
    vote_average: 8.7,
    vote_count: 4200,
    genre_ids: [35, 18, 10749],
  },
  {
    id: 724089,
    title: "Gabriel's Inferno Part II",
    original_title: "Gabriel's Inferno Part II",
    overview: "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
    poster_path: "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
    backdrop_path: "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
    release_date: "2020-07-31",
    vote_average: 8.7,
    vote_count: 1500,
    genre_ids: [10749],
  },
  {
    id: 121,
    title: "The Lord of the Rings: The Two Towers",
    original_title: "The Lord of the Rings: The Two Towers",
    overview: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    release_date: "2002-12-18",
    vote_average: 8.7,
    vote_count: 21000,
    genre_ids: [12, 14, 28],
  },
  {
    id: 181808,
    title: "Star Wars: The Last Jedi",
    original_title: "Star Wars: The Last Jedi",
    overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    poster_path: null,
    backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
    release_date: "2017-12-13",
    vote_average: 6.9,
    vote_count: 18000,
    genre_ids: [28, 12, 878],
  },
];

// Helper to find movie by ID
function findMovieById(id: number): TMDBMovie | undefined {
  return mockMovies.find(m => m.id === id);
}

// Extended movie details for detail pages
const mockMovieDetails: Record<number, TMDBMovieDetail> = {
  550: {
    ...findMovieById(550)!,
    genres: [{ id: 18, name: "Drama" }],
    runtime: 139,
    status: "Released",
    tagline: "Mischief. Mayhem. Soap.",
    homepage: "https://www.foxmovies.com/movies/fight-club",
    imdb_id: "tt0137523",
  },
  278: {
    ...findMovieById(278)!,
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }],
    runtime: 142,
    status: "Released",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    homepage: null,
    imdb_id: "tt0111161",
  },
  238: {
    ...findMovieById(238)!,
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }],
    runtime: 175,
    status: "Released",
    tagline: "An offer you can't refuse.",
    homepage: "https://www.paramount.com/movies/godfather",
    imdb_id: "tt0068646",
  },
  424: {
    ...findMovieById(424)!,
    genres: [{ id: 18, name: "Drama" }, { id: 36, name: "History" }, { id: 10752, name: "War" }],
    runtime: 195,
    status: "Released",
    tagline: "Whoever saves one life, saves the world entire.",
    homepage: null,
    imdb_id: "tt0108052",
  },
  240: {
    ...findMovieById(240)!,
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }],
    runtime: 202,
    status: "Released",
    tagline: "All the power on earth can't change destiny.",
    homepage: null,
    imdb_id: "tt0071562",
  },
  497: {
    ...findMovieById(497)!,
    genres: [{ id: 14, name: "Fantasy" }, { id: 18, name: "Drama" }, { id: 80, name: "Crime" }],
    runtime: 189,
    status: "Released",
    tagline: "Walk a mile you'll never forget.",
    homepage: null,
    imdb_id: "tt0120689",
  },
  13: {
    ...findMovieById(13)!,
    genres: [{ id: 35, name: "Comedy" }, { id: 18, name: "Drama" }, { id: 10749, name: "Romance" }],
    runtime: 142,
    status: "Released",
    tagline: "The world will never be the same once you've seen it through the eyes of Forrest Gump.",
    homepage: null,
    imdb_id: "tt0109830",
  },
  122: {
    ...findMovieById(122)!,
    genres: [{ id: 12, name: "Adventure" }, { id: 14, name: "Fantasy" }, { id: 28, name: "Action" }],
    runtime: 201,
    status: "Released",
    tagline: "The journey ends.",
    homepage: null,
    imdb_id: "tt0167260",
  },
  680: {
    ...findMovieById(680)!,
    genres: [{ id: 80, name: "Crime" }, { id: 18, name: "Drama" }],
    runtime: 154,
    status: "Released",
    tagline: "Just because you are a character doesn't mean you have character.",
    homepage: null,
    imdb_id: "tt0110912",
  },
  11216: {
    ...findMovieById(11216)!,
    genres: [{ id: 18, name: "Drama" }, { id: 10749, name: "Romance" }],
    runtime: 155,
    status: "Released",
    tagline: "A celebration of youth, friendship, and the everlasting magic of the movies.",
    homepage: null,
    imdb_id: "tt0095765",
  },
  129: {
    ...findMovieById(129)!,
    genres: [{ id: 16, name: "Animation" }, { id: 10751, name: "Family" }, { id: 14, name: "Fantasy" }],
    runtime: 125,
    status: "Released",
    tagline: "The tunnel led Chihiro to a mysterious town...",
    homepage: null,
    imdb_id: "tt0245429",
  },
  120: {
    ...findMovieById(120)!,
    genres: [{ id: 12, name: "Adventure" }, { id: 14, name: "Fantasy" }, { id: 28, name: "Action" }],
    runtime: 178,
    status: "Released",
    tagline: "One ring to rule them all.",
    homepage: null,
    imdb_id: "tt0120737",
  },
  155: {
    ...findMovieById(155)!,
    genres: [{ id: 18, name: "Drama" }, { id: 28, name: "Action" }, { id: 80, name: "Crime" }, { id: 53, name: "Thriller" }],
    runtime: 152,
    status: "Released",
    tagline: "Why So Serious?",
    homepage: null,
    imdb_id: "tt0468569",
  },
  27205: {
    ...findMovieById(27205)!,
    genres: [{ id: 28, name: "Action" }, { id: 878, name: "Science Fiction" }, { id: 53, name: "Thriller" }],
    runtime: 148,
    status: "Released",
    tagline: "Your mind is the scene of the crime.",
    homepage: null,
    imdb_id: "tt1375666",
  },
  157336: {
    ...findMovieById(157336)!,
    genres: [{ id: 18, name: "Drama" }, { id: 878, name: "Science Fiction" }],
    runtime: 169,
    status: "Released",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    homepage: null,
    imdb_id: "tt0816692",
  },
  49026: {
    ...findMovieById(49026)!,
    genres: [{ id: 28, name: "Action" }, { id: 80, name: "Crime" }, { id: 18, name: "Drama" }, { id: 53, name: "Thriller" }],
    runtime: 164,
    status: "Released",
    tagline: "The Legend Ends",
    homepage: null,
    imdb_id: "tt1345836",
  },
  429: {
    ...findMovieById(429)!,
    genres: [{ id: 37, name: "Western" }],
    runtime: 178,
    status: "Released",
    tagline: "For three men the Civil War wasn't hell. It was practice.",
    homepage: null,
    imdb_id: "tt0060196",
  },
  389: {
    ...findMovieById(389)!,
    genres: [{ id: 18, name: "Drama" }],
    runtime: 96,
    status: "Released",
    tagline: "Life is in their hands. Death is on their minds.",
    homepage: null,
    imdb_id: "tt0050083",
  },
  475557: {
    ...findMovieById(475557)!,
    genres: [{ id: 80, name: "Crime" }, { id: 18, name: "Drama" }, { id: 53, name: "Thriller" }],
    runtime: 122,
    status: "Released",
    tagline: "Put on a happy face.",
    homepage: null,
    imdb_id: "tt7286456",
  },
  496243: {
    ...findMovieById(496243)!,
    genres: [{ id: 35, name: "Comedy" }, { id: 18, name: "Drama" }, { id: 53, name: "Thriller" }],
    runtime: 132,
    status: "Released",
    tagline: "Act like you own the place.",
    homepage: null,
    imdb_id: "tt6751668",
  },
  19404: {
    ...findMovieById(19404)!,
    genres: [{ id: 35, name: "Comedy" }, { id: 18, name: "Drama" }, { id: 10749, name: "Romance" }],
    runtime: 189,
    status: "Released",
    tagline: "Come... Fall in Love",
    homepage: null,
    imdb_id: "tt0112870",
  },
  724089: {
    ...findMovieById(724089)!,
    genres: [{ id: 10749, name: "Romance" }],
    runtime: 105,
    status: "Released",
    tagline: null,
    homepage: null,
    imdb_id: "tt1242432",
  },
  121: {
    ...findMovieById(121)!,
    genres: [{ id: 12, name: "Adventure" }, { id: 14, name: "Fantasy" }, { id: 28, name: "Action" }],
    runtime: 179,
    status: "Released",
    tagline: "A New Power Is Rising.",
    homepage: null,
    imdb_id: "tt0167261",
  },
  181808: {
    ...findMovieById(181808)!,
    genres: [{ id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 878, name: "Science Fiction" }],
    runtime: 152,
    status: "Released",
    tagline: "The Saga Continues",
    homepage: null,
    imdb_id: "tt2527336",
  },
};

// Helper function to get movies by category
export function getMockMoviesByCategory(category: MovieCategory): TMDBPaginatedResponse<TMDBMovie> {
  // Shuffle and return different sets for different categories
  const shuffled = [...mockMovies].sort(() => Math.random() - 0.5);
  
  return {
    page: 1,
    results: shuffled.slice(0, 20),
    total_pages: 1,
    total_results: shuffled.length,
  };
}

// Helper function to get movie by ID
export function getMockMovieById(id: string): TMDBMovieDetail | null {
  const movieId = parseInt(id, 10);
  if (mockMovieDetails[movieId]) {
    return mockMovieDetails[movieId];
  }
  
  // Fallback: find in basic movies array and create detail
  const movie = mockMovies.find(m => m.id === movieId);
  if (movie) {
    return {
      ...movie,
      genres: movie.genre_ids?.map(id => ({ id, name: "Unknown" })) || [],
      runtime: 120,
      status: "Released",
      tagline: null,
      homepage: null,
      imdb_id: null,
    };
  }
  
  return null;
}

// Helper function to get similar/recommended movies
export function getSimilarMovies(movieId: string, limit: number = 12): TMDBMovie[] {
  const id = parseInt(movieId, 10);
  const currentMovie = mockMovies.find(m => m.id === id);
  
  if (!currentMovie) {
    // If movie not found, return random movies
    return [...mockMovies].sort(() => Math.random() - 0.5).slice(0, limit);
  }
  
  // Find movies with similar genres
  const currentGenres = currentMovie.genre_ids || [];
  const similarMovies = mockMovies
    .filter(m => m.id !== id) // Exclude current movie
    .map(m => {
      // Calculate similarity score based on shared genres
      const sharedGenres = (m.genre_ids || []).filter(g => currentGenres.includes(g)).length;
      return { movie: m, score: sharedGenres };
    })
    .filter(item => item.score > 0) // Only include movies with at least one shared genre
    .sort((a, b) => b.score - a.score) // Sort by similarity score
    .slice(0, limit)
    .map(item => item.movie);
  
  // If we don't have enough similar movies, fill with random ones
  if (similarMovies.length < limit) {
    const remaining = limit - similarMovies.length;
    const randomMovies = mockMovies
      .filter(m => m.id !== id && !similarMovies.some(sm => sm.id === m.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, remaining);
    similarMovies.push(...randomMovies);
  }
  
  return similarMovies;
}

