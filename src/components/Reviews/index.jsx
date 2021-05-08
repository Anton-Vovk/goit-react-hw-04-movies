import React, { Component } from 'react';
import movies from '../../api/movies';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movId;
    movies
      .fetchReviews(movieId)
      .then(resp => this.setState({ reviews: resp.results }));
  }

  render() {
    const { reviews } = this.state;
    return reviews.length > 0 ? (
      <>
        <h2>Reviews</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p>No reviews</p>
    );
  }
}
