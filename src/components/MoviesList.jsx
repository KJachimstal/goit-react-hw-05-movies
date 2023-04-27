import { Link, useLocation } from 'react-router-dom';

export const MoviesList = props => {
  const location = useLocation();

  return (
    <>
      {props.moviesList.map(movie => (
        <li className="movie-list" key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};
