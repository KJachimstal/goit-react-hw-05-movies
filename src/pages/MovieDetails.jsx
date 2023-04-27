import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import api from '../services/api';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieById = async movieId => {
      try {
        const response = await api.fetchMovieById(movieId);
        setMovie(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieById(movieId);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="movie__container">
      <Link to={location.state.from}>Back</Link>
      <div className="movie__general">
        <img
          className="movie__image"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt="Movie poster"
        />
        <div className="movie__info">
          <h3 className="movie__title">{movie.title}</h3>
          User Score: {movie.vote_average}%<h5>Overview</h5> {movie.overview}
          <h5>Genres</h5>
          {movie.genres.map(genre => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </div>
      </div>
      <hr className="divider" />
      <h5>Additional information</h5>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr className="divider" />
      <Outlet />
    </div>
  );
};
