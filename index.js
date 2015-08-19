import 'babel/polyfill';
import React from 'react';
import Root from './Root';
import BrowserHistory from 'react-router/lib/BrowserHistory';

React.render(
  <Root history={new BrowserHistory()} />,
  document.getElementsByTagName('body')[0]
);