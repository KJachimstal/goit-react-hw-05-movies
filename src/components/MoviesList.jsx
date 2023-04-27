import { Link } from 'react-router-dom';

export const MoviesList = props => {
  return (
    <>
      {props.moviesList.map(movie => (
        <li className="movie-list" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};
