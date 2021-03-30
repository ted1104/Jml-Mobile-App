import React, {useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';

const Alert = ({children, isType = null}) => {
  if (isType == 1) {
    return (
      <View style={[styles.container, {backgroundColor: '#006d77'}]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  } else if (isType == 0) {
    return (
      <View style={[styles.container, {backgroundColor: '#6a040f'}]}>
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
    paddingHorizontal: 5,
    marginHorizontal: 2,
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Alert;
