import React, { Component } from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Router, Route } from 'react-router';

const store = createStore(reducers);

export default class Root extends Component {

  static willTransitionTo() {
    console.log('willTransitionTo in Root component');
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route path='/' component={App} />
            </Router>
          }
        </Provider>
      </div>
    );
  }
}