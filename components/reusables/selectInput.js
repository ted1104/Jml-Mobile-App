import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SelectInput = ({...props}) => {
  return (
    <View style={styles.select}>
      <Picker {...props}>
        <Picker.Item label="Bukavu" value="1" />
        <Picker.Item label="Goma" value="2" />
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  select: {
    backgroundColor: '#e0e0e0',
    marginBottom: 5,
    paddingVertical: -5,
    // paddingLeft: 5,
    borderRadius: 5,
  },
});

export default SelectInput;
