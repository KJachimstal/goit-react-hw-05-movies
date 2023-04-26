import { useEffect, useState } from 'react';
import api from '../services/api';

export const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await api.fetchTrendingMovies();
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        setApiError(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      <ul>
        {movies.map(movie => (
          <li>
            <a href="#">{movie.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
