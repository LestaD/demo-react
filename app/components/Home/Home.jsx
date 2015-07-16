
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {

  render() {
    return (
      <div>
        <h4>Home Page</h4>
        <Link to="about">About</Link> &nbsp;
        <Link to="contacts">Contacts</Link>
      </div>
    );
  }
}