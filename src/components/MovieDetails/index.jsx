import React from 'react';
import {
  image,
  description,
  content,
  genre,
  genreItem,
} from '../MovieDetails/MovieDetails.module.css';

const MovieDetail = ({
  title,
  overview,
  genres,
  vote_average,
  poster_path,
  original_title,
}) => (
  <div className={description}>
    <img
      className={image}
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={original_title}
    />
    <div className={content}>
      <h2>{title}</h2>
      <p>User Score: {vote_average * 10}%</p>
      <h4>Overview</h4>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul className={genre}>
        {genres.map(item => (
          <li className={genreItem} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MovieDetail;
