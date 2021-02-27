import React, {Children} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FloatButtom = ({children, ...othersProps}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...othersProps}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100000,
    bottom: 1,
    bottom: 15,
    right: 15,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#ffffff',
    fontWeight: 'bold',
    paddingVertical: 13,
    alignSelf: 'center',
  },
});
export default FloatButtom;
