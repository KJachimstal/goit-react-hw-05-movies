import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Search } from '../pages/Search';
import { Trending } from '../pages/Trending';
import { MovieDetails } from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound.jsx';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
