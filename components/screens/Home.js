import React, {Component} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import Entete from './../reusables/Entente';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navigation);
  }
  render() {
    return (
      <View style={styles.container}>
        <Entete props={this.props}>
          <Text>TABLEAU DE BORD</Text>
        </Entete>
        {/* CORPS */}
        <View style={styles.b2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  b2: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
