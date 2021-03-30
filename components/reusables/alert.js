import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Alert = ({children, isType = null}) => {
  if (isType == 1) {
    return (
      <View style={[styles.container, {backgroundColor: 'green'}]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  } else if (isType == 0) {
    return (
      <View style={[styles.container, {backgroundColor: 'red'}]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    color: 'white',
    top: 0,
    width: Dimensions.get('window').width - 4,

    paddingVertical: 10,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Alert;
