import React, { Component } from 'react';
import { fetchCastById } from '../../api/movies';
import { list, image } from '../Cast/Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchCastById(movieId).then(data => this.setState({ cast: data.cast }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast.length > 0 && (
          <ul className={list}>
            {cast.map(item => (
              <li key={item.id}>
                <img
                  className={image}
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
