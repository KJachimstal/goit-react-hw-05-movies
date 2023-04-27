import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const Cast = () => {
  const params = useParams();
  const [movieCasts, setMovieCasts] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async id => {
      try {
        const response = await api.fetchMovieCredits(id);
        setMovieCasts(response.data.cast);
        console.log(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCredits(params.movieId);
  }, [params.movieId]);

  if (movieCasts.length === 0) return null;

  return (
    <ul>
      {movieCasts.map(cast => (
        <>
          <li className="cast__item">
            <img
              className="cast__photo"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`}
              alt="actor"
            />
            Name: {cast.name}
            <br />
            Character: {cast.character}
          </li>
        </>
      ))}
    </ul>
  );
};

export default Cast;
