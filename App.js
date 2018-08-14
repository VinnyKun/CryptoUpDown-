import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Chart from './src/containers/chart';
import Ranges from './src/containers/ranges';
import List from './src/containers/list';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './src/redux';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>

          <Chart />
          <Ranges />
          <List />

        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,        // take up the whole screen
    paddingTop: 20, // put content below status bar
  },
});