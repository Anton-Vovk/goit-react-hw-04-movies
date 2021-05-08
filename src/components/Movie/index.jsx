import React from 'react';
import PropTypes from 'prop-types';
import movies from '../../api/movies';
import styles from '../Movie/Movie.module.css';

const MovieCard = ({ movie, genres }) => (
  <div className={styles.container}>
    <img
      className={styles.img}
      src={`${movies.BASE_IMG_URL}${movie.poster_path}`}
      alt={movie.title}
    />
    <div className={styles.description}>
      <h1>{movie.title}</h1>

      <h3>Genres</h3>
      <p>{genres}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
    </div>
  </div>
);

export default MovieCard;

MovieCard.propType = {
  movie: PropTypes.object,
  genres: PropTypes.string,
};
