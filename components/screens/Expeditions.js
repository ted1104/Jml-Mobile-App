import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
import CartItem from './../container/card-item';
import Entete from './../reusables/Entente';
import RoundButton from '../reusables/RoundButton';
import DATA_EXPED from './../../api/data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ExpeditionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expeditionData: DATA_EXPED,
    };
  }
  componentDidMount() {
    // console.log(this.state.expeditionData);
  }
  render() {
    console.log('===Expedtions===');
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Entete props={this.props}>
          <Text>EXPEDITIONS</Text>
        </Entete>

        <View style={styles.b2}>
          {/* <CartItem /> */}
          <FlatList
            style={styles.list}
            data={this.state.expeditionData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <CartItem exp={item} />}
          />
        </View>

        <View style={styles.float}>
          <RoundButton
            onPress={() => this.props.navigation.navigate('AddExpedition')}>
            <Icon name="plus-thick" color="#fff" size={20} />
          </RoundButton>
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
    paddingVertical: 35,
    paddingHorizontal: 15,
  },
  list: {
    flex: 1,
  },
  float: {
    position: 'absolute',
    zIndex: 100000,
    bottom: 1,
    bottom: 15,
    right: 15,
  },
});

export default ExpeditionScreen;
