import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      params: {
        api_key: '8645c0fb88a26a8ad33046f58e6535b4',
      },
    }
  );
  return response;
};

export const fetchMoviesWithQuery = async searchQuery => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: '8645c0fb88a26a8ad33046f58e6535b4',
        query: searchQuery,
      },
    }
  );
  return response;
};

const api = {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
};

export default api;
