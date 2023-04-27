import { Navigation } from 'components/Navigation';
import { Trending } from 'components/Trending';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Navigation />
      <Trending />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
