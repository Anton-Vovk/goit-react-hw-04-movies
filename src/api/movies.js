const API_KEY = '892c9b9f1c704261a0f515abd746d990';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const fetchTrend = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(resp =>
    resp.json().then(data => data.results),
  );
};

export const fetchSearch = query => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
  ).then(resp => resp.json().then(data => data.results));
};

export const fetchDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(resp =>
    resp.json(),
  );
};

export const fetchActors = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  ).then(resp => resp.json());
};

export const fetchReviews = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
  ).then(resp => resp.json());
};
