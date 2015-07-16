
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {

  render() {
    return (
      <div>
        <h4>About Page</h4>
        <Link to="home">Go home</Link>
      </div>
    );
  }
}