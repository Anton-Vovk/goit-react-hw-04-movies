import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MoviesDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <div>
    <Navigation />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
