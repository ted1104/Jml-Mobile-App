import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CustomButton from './../reusables/button';

const CardItem = () => {
  return (
    // <Text>
    //   {/* CARD ITEM (Date, Destination, chauffeur, Tel, plaque, Detail article) */}
    // </Text>
    <View style={styles.container}>
      <View>
        <View style={styles.element}>
          <Text style={styles.textLeft}>Date : </Text>
          <Text style={styles.textRight}>2021-01-10 </Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.textLeft}>Heure Départ : </Text>
          <Text style={styles.textRight}>16H30 - 17H40 (1h30min) </Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.textLeft}>Destination : </Text>
          <Text style={styles.textRight}>BUKAVU </Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.textLeft}>Chauffeur : </Text>
          <Text style={styles.textRight}>JORDACH CIZA </Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.textLeft}>Téléphone : </Text>
          <Text style={styles.textRight}>+243972194053</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.textLeft}>Plaque : </Text>
          <Text style={styles.textRight}>01898298AF</Text>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <View style={styles.textStatus}>
          <View style={styles.badgeStatus}>
            <Text style={styles.text}>Arriver</Text>
          </View>
        </View>
        <View style={styles.btnDetail}>
          <CustomButton>
            <Text>Voir Détails</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#e5e5e5',
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  containerFooter: {
    // flex: 1,
    paddingVertical: 3,
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // elevation: 1,
  },
  textStatus: {
    flex: 2,
    paddingLeft: 10,
    // borderWidth: 1,
    // textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  btnDetail: {
    flex: 2,
  },
  badgeStatus: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    paddingVertical: 2,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'green',
  },
  element: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 2,
  },
  textLeft: {
    fontSize: 14,
    fontWeight: 'bold',
    // fontStyle: 'italic',
  },
  textRight: {
    color: '#2a9d8f',
    fontWeight: 'bold',
  },
});
export default CardItem;
