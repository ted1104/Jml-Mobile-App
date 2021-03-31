import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SelectInput = ({...othersprops}) => {
  return (
    <View style={styles.select}>
      <Picker {...othersprops}>
        <Picker.Item label="-- choisir --" value="" />
        {othersprops.options.map((val, idx) => (
          <Picker.Item label={val.label} value={val.value} key={idx} />
        ))}
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
