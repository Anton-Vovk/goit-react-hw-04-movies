import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const NotFoundPage = () => {
  return (
    <>
      <h1>404 - page not found</h1>
      <p>
        Teg to main page
        <Link to={routes.home}></Link>.
      </p>
    </>
  );
};

export default NotFoundPage;
