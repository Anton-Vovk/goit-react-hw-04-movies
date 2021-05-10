import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import movies from '../api/movies';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (prevQuery === nextQuery) {
      return;
    }
    this.fetchMovies(nextQuery);
  }
  fetchMovies = query => {
    this.setState({ isLoading: true });
    movies
      .searchMovies(query)
      .then(({ results }) => {
        if (results.length === 0) {
          toast.error(`No results were found for your search.`);
        }
        this.setState({
          movies: results,
        });
      })
      .catch(error => toast.error('Try again'))
      .finally(() => this.setState({ isLoading: false }));
  };

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
    this.setState({ movies: [], loading: true });
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <>
        <SearchBox onSubmit={this.setSearchQuery} />
        {loading && <Loader />}
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <NavLink
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
