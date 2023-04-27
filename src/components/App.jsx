import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Search } from '../pages/Search';
import { Trending } from '../pages/Trending';
import { MovieDetails } from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound.jsx';
import { useState } from 'react';
import api from '../services/api';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  const [movies, setMovies] = useState();

  const handleSearch = async event => {
    event.preventDefault();
    const searchQuery = event.target.query.value;

    try {
      const response = await api.fetchMoviesWithQuery(searchQuery);
      // console.log(response.data);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route
          path="/movies"
          element={<Search onSearch={handleSearch} movieList={movies} />}
        />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
