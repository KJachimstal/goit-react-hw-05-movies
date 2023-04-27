import { MoviesList } from 'components/MoviesList';

export const Search = props => {
  const renderMovieList = movies => {
    if (movies != null) {
      return <MoviesList moviesList={movies} />;
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={props.onSearch}>
        <input
          className="search-form__input"
          type="text"
          name="query"
          placeholder="Search movies"
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
      {renderMovieList(props.movieList)}
    </div>
  );
};
