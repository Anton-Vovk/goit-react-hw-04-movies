import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <Spinner
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={2000}
      />
    );
  }
}

export default Loader;
