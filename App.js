/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider, connect} from 'react-redux';
import Store from './store/ConfigurationStore';
import InitNavigation from './navigation/InitNavigation';
import {NavigationContainer} from '@react-navigation/native';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <InitNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
