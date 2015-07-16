
import React from 'react';

import {
  Route,
  Router,
  DefaultRoute
} from 'react-router';

import App from './components/App/App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <Route handler={About} name="about" />
    <Route handler={Contacts} name="contacts" />
  </Route>
);