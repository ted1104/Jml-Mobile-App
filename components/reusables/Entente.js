import React, {Children} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Entete = ({children, ...othersProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.m1}>
        <TouchableOpacity
          onPress={() => othersProps.props.navigation.openDrawer()}>
          <Icon name="menu-open" color="#a8dadc" size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.m2}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    flex: 1,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomEndRadius: 80,
    backgroundColor: '#457b9d',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    flexDirection: 'column',
  },
  m1: {
    flex: 1,
    marginLeft: 9,
  },
  m2: {
    flex: 3,
    // borderWidth: 1,
  },
});
export default Entete;
