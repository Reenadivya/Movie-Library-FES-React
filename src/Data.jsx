const API_KEY = "b10ae972650314d659a0fc1e4ad88d48";
const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const DISCOVER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`;
const MOVIE_URL = `https://api.themoviedb.org/3/movie/`;

export async function fetchTrendingData() {
  const response = await fetch(TRENDING_URL);
  const { results } = await response.json();
  return results;
}

export async function fetchSearchData(searchValue) {
  const response = await fetch(SEARCH_URL + searchValue);
  const { results } = await response.json();
  return results;
}

export async function fetchDiscoverData(category) {
  const response = await fetch(DISCOVER_URL + category);
  const { results } = await response.json();
  return results;
}

export async function fetchMovieInfo(MovieId) {
  const response = await fetch(
    MOVIE_URL + MovieId + `?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}
