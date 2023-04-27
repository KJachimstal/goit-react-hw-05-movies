import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const Reviews = () => {
  const params = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const response = await api.fetchMovieReviews(id);
        setMovieReviews(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews(params.movieId);
  });

  if (movieReviews.length === 0) return <h6>There is no reviews.</h6>;

  return (
    <ul>
      {movieReviews.map(review => (
        <li>
          <h4>Author: {review.author}</h4>
          <span>{review.content}</span>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
