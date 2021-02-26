import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Input from './../reusables/input';
import Buttom from './../reusables/button';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTilte}>
          <Text style={styles.title}>JML SYSTEM</Text>
          <Text style={styles.titleSecond}>Se connecter !</Text>
        </View>
        <View style={styles.containerBloc}>
          <Input placeholder="Nom d'utilisateur" />
          <Input placeholder="Mot de passe" secureTextEntry={true} />
          <Buttom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  containerTilte: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // marginBottom: 20,
  },
  containerBloc: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    marginBottom: 2,
    color: '#0096c7',
  },
  titleSecond: {
    fontSize: 20,
    color: '#0096c7',
    // marginBottom: 2,
  },
});

export default LoginScreen;
