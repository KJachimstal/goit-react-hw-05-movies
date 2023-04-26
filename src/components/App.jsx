import { Navigation } from './Navigation';
import { Search } from './Search';
import { Trending } from './Trending';

export const App = () => {
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
      <Search />
      <Trending />
    </div>
  );
};
