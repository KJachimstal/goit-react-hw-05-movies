import axios from 'axios';

const API_KEY = '8645c0fb88a26a8ad33046f58e6535b4';

const fetchTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response;
};

const fetchMoviesWithQuery = async searchQuery => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query: searchQuery,
      },
    }
  );
  return response;
};

const fetchMovieById = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};

const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response;
};

const fetchMovieCredits = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response;
};

const api = {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieById,
  fetchMovieReviews,
  fetchMovieCredits,
};

export default api;
