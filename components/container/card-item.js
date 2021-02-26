import {DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import CustomButton from './../reusables/button';

const CardItem = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <View style={styles.ententeCard}>
            <View style={styles.element}>
              <Text style={styles.textRight}>2021-01-10 : 10h30 </Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.statusText}>Arrivé</Text>
            </View>
          </View>
          <View style={styles.corps}>
            <View style={styles.b_horiz}>
              <Text style={styles.textLine}>Heure Départ </Text>
              <View style={styles.BlocData}>
                <Text style={styles.textData}>16H30</Text>
              </View>
            </View>
            <View style={styles.b_horiz}>
              <Text style={styles.textLine}>Heure Arrivée </Text>
              <View style={styles.BlocData}>
                <Text style={styles.textData}>17H30</Text>
              </View>
            </View>
            <View style={styles.b_horiz}>
              <Text style={styles.textLine}>Destination </Text>
              <View style={styles.BlocData}>
                <Text style={styles.textData}>BUKAVU</Text>
              </View>
            </View>
          </View>
          <View style={styles.corps}>
            <View style={styles.b_horiz}>
              <Text style={styles.textLine}>Chauffeur </Text>
              <View style={styles.BlocData}>
                <Text style={styles.textData}>TEDDY WALTER</Text>
              </View>
            </View>
            <View style={styles.b_horiz}>
              <Text style={styles.textLine}>Téléphone </Text>
              <View style={styles.BlocData}>
                <Text style={styles.textData}>+243972194053</Text>
              </View>
            </View>
            <View style={styles.b_horiz}>
              <Text style={styles.textLine}>Plaque </Text>
              <View style={styles.BlocData}>
                <Text style={styles.textData}>AC01101110</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
  ententeCard: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  element: {
    backgroundColor: '#003049',
    flex: 1,
    paddingLeft: 4,
    borderRadius: 2,
  },
  status: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textRight: {
    color: '#fff',
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  statusText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  corps: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  b_horiz: {
    flex: 1,
    flexDirection: 'column',
  },
  textLine: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#003049',
  },
  BlocData: {
    // borderWidth: 1,
  },
  textData: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  //   containerFooter: {
  //     // flex: 1,
  //     paddingVertical: 3,
  //     // borderWidth: 1,
  //     alignItems: 'center',
  //     flexDirection: 'row',
  //     // elevation: 1,
  //   },
  //   textStatus: {
  //     flex: 2,
  //     paddingLeft: 10,
  //     // borderWidth: 1,
  //     // textAlign: 'center',
  //   },
  //   text: {
  //     fontSize: 14,
  //     color: '#fff',
  //     fontWeight: 'bold',
  //     paddingLeft: 5,
  //   },
  //   btnDetail: {
  //     flex: 2,
  //   },
  //   badgeStatus: {
  //     flex: 0,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     paddingHorizontal: 3,
  //     paddingVertical: 2,
  //     width: 100,
  //     borderRadius: 100,
  //     backgroundColor: 'green',
  //   },
  //   element: {
  //     // flex: 1,
  //     justifyContent: 'space-between',
  //     flexDirection: 'row',
  //     marginBottom: 2,
  //     flexWrap: 'wrap',
  //   },
  //   textLeft: {
  //     fontSize: 14,
  //     fontWeight: 'bold',
  //     // fontStyle: 'italic',
  //   },
  //   textRight: {
  //     color: '#2a9d8f',
  //     fontWeight: 'bold',
  //   },
});
export default CardItem;
