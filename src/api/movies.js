import axios from 'axios';

const API_KEY = '892c9b9f1c704261a0f515abd746d990';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  page: 1,
  language: 'en-US',
};

const searchMovies = async query => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: { query },
    });
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const fetchTrend = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(resp =>
    resp.json().then(data => data.results),
  );
};

const fetchDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(resp =>
    resp.json(),
  );
};

const fetchActors = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  ).then(resp => resp.json());
};

const fetchReviews = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
  ).then(resp => resp.json());
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  BASE_IMG_URL,
  searchMovies,
  fetchTrend,
  fetchDetails,
  fetchActors,
  fetchReviews,
};
