import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  static willTransitionTo() {
    console.log('willTransitionTo in App component');
  }

  render() {
    let { fname, lname } = this.props;

    return (
      <div>Hello {fname} {lname}!</div>
    );
  }

}

function select(state) {
  return state;
}

export default connect(select)(App)