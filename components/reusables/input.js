import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = ({...othersProps}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.formInput} {...othersProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 5,
  },
  formInput: {
    // borderColor: 'red',
    // borderWidth: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 4,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
export default Input;
