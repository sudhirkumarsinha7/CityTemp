/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {store, persistor} from './src/config/reduxConfig';
import _ from 'lodash';
import Main from './src/component/HomeScreen/HomeScreen.js';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider, connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Main />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
