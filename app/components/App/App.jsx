
import './App.styl';

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div classNames="App">
        <h2>Base Application</h2>
        <RouteHandler />
      </div>
    );
  }
};