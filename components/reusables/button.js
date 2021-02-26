import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const Input = ({...othersProps}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
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
export default Input;
