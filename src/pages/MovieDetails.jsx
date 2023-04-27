import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieById = async movieId => {
      try {
        const response = await api.fetchMovieById(movieId);
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieById(movieId);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="movie_container">
      <img
        className="movie__image"
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        alt="Movie poster"
      />
      <h3 className="movie__title">{movie.title}</h3>
      User Score: {movie.vote_average}%<h5>Overview</h5> {movie.overview}
      <h5>Genres</h5>
      {movie.genres.map(genre => (
        <span key={genre.id}>{genre.name} </span>
      ))}
      <h5>Additional information</h5>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
