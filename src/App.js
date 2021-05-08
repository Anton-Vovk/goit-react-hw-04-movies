import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';
import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <Suspense fallback={<h1>Загружаем...</h1>}>
    <Container>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.details} component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  </Suspense>
);
export default App;
