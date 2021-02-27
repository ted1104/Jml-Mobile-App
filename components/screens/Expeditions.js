import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
import CartItem from './../container/card-item';
import Entete from './../reusables/Entente';
import FloatButtom from './../reusables/floatButton';
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
    console.log(this.state.expeditionData);
  }
  render() {
    console.log(this.props);
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

        <FloatButtom>
          <Icon name="plus-thick" color="#fff" size={20} />
        </FloatButtom>
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
  list: {
    flex: 1,
  },
});

export default ExpeditionScreen;
