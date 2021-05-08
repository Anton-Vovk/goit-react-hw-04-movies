import React from 'react';
import AppBar from '../AppBar';

const Container = ({ children }) => (
  <div className="Container">
    <AppBar />
    <hr />
    {children}
  </div>
);

export default Container;
