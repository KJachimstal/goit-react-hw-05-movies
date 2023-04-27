import { useEffect, useState } from 'react';
import api from '../services/api';
import MoviesList from './MoviesList';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await api.fetchTrendingMovies();
        setMovies(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        setApiError(error);
        console.log(apiError);
      }
    };

    fetchTrendingMovies();
  }, [apiError]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Trending today:</h1>
      <ul>
        <MoviesList moviesList={movies} />
      </ul>
    </div>
  );
};

export default Trending;
