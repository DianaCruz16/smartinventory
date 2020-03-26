import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './js/app';
var reducers = require('./js/redux/reducers');

import {
  AppRegistry
} from 'react-native';

let store = createStore(reducers);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Figment', () => Root);