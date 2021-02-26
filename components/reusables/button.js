import React, {Children} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({children, ...othersProps}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...othersProps}>
        <Text style={styles.textBtn}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 5,
  },
  button: {
    backgroundColor: '#1d3557',
    borderRadius: 100,
  },
  textBtn: {
    color: '#ffffff',
    fontWeight: 'bold',
    paddingVertical: 13,
    alignSelf: 'center',
  },
});
export default Button;
