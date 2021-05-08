import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import movies from '../api/movies';
import MovieCard from '../Components/Movie';
import routes from '../services/routes';

const asyncCast = lazy(() =>
  import('../Components/Cast.js' /* webpackChunkName: "movie_cast" */),
);
const asyncReviews = lazy(() =>
  import('../Components/Reviews.js' /* webpackChunkName: "movie_reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    genres: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { movId } = this.props.match.params;
    // console.log(movId);

    movies
      .fetchDetails(movId)
      .then(movie => this.setState({ movie, genres: movie.genres }))
      .catch(err => console.log(err));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    // переход на страницу movies, если фильм был открыт в новой вкладке
    this.props.history.push(routes.movies);
  };

  render() {
    const { match } = this.props;
    const { state } = this.props.location;
    const { movie } = this.state;
    let stateFrom = state && state.from ? state.from : routes.home;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <br />

        {this.state.error && <p>Error:{this.state.error}</p>}

        {movie && (
          <MovieCard
            movie={movie}
            // poster_path={movie.poster_path}
            genres={this.state.genres.map(genre => genre.name).toString()}
          />
        )}

        <h3>Additional</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: match.url + routes.cast,
                state: { from: stateFrom },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: match.url + routes.reviews,
                state: { from: stateFrom },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Route path={`${match.path}${routes.cast}`} component={asyncCast} />
          <Route
            path={`${match.path}${routes.reviews}`}
            component={asyncReviews}
          />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
