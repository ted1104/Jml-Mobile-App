import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoadingIcon from 'react-native-awesome-loading';
import FastImage from 'react-native-fast-image';
// import Image from './../../assets/loading/indicator3.gif';

const Loading = ({size}) => {
  return (
    <View style={styles.containerLoading}>
      <FastImage
        style={{width: size, height: size}}
        source={require('./../../assets/loading/indicator3.gif')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerLoading: {
    // borderWidth: 1,
    alignItems: 'center',
  },
});
export default Loading;
