import React, {Children} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RoundButton = ({children, ...othersProps}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...othersProps}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: '#6a040f',
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
export default RoundButton;
