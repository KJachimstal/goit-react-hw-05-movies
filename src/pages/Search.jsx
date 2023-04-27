import { MoviesList } from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

export const Search = props => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const renderMovieList = movies => {
    if (movies != null) {
      return <MoviesList moviesList={movies} />;
    }
  };

  useEffect(() => {
    if (query === '') return;
    const fetchMoviesWithQuery = async event => {
      try {
        const response = await api.fetchMoviesWithQuery(query);
        // console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoviesWithQuery(query);
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          name="query"
          placeholder="Search movies"
          value={query}
          onChange={event => setSearchParams({ query: event.target.value })}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
      {renderMovieList(movies)}
    </div>
  );
};
