import React, {Children} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Entete = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
    borderBottomEndRadius: 80,
    backgroundColor: '#457b9d',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
export default Entete;
