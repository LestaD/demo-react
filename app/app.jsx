
import 'babel-core/polyfill';
import './favicon.ico';
import './stylus/app.styl';
import './index.html';


import React from 'react';
import Router from 'react-router';

import routes from './routes';

const appElement = document.getElementById('app');

Router.run(routes, (Handler) => {
  React.render(<Handler />, appElement);
});