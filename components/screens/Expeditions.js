import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import CartItem from './../container/card-item';
import Entete from './../reusables/Entente';

class ExpeditionScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Entete props={this.props}>
          <Text>EXPEDITIONS</Text>
        </Entete>

        <View style={styles.b2}>
          <CartItem />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  b1: {
    flex: 1,
  },
  b2: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default ExpeditionScreen;
