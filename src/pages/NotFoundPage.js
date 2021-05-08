import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const NotFoundPage = () => {
  return (
    <>
      <h1>404 - page not found</h1>
      <Link to={routes.home}>
        <p>go to main page</p>
      </Link>
      .
    </>
  );
};

export default NotFoundPage;
