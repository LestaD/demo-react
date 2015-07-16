
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contacts extends Component {

  render() {
    return (
      <div>
        <h4>Contacts</h4>
        <ul>
          <li>lestad.net</li>
          <li>vk.com/lestad</li>
          <li>ok.ru/lestad</li>
          <li>github.com/lestad</li>
        </ul>
        <Link to="home">Go home</Link>
      </div>
    );
  }
}