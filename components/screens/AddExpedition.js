import React, {Component} from 'react';
import {Text, Button, View, StyleSheet, ScrollView} from 'react-native';
import Entete from './../reusables/Entente';
import Input from './../reusables/input';
import RoundBouton from './../reusables/RoundButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Entete props={this.props}>
          <Text>AJOUTER EXPEDITION</Text>
        </Entete>
        {/* CORPS */}
        <View style={styles.b2}>
          <ScrollView>
            <View style={styles.form}>
              <Input placeholder="Date" />
              <Input placeholder="Lieu Destination" />
              <Input placeholder="Nom Chauffeur" />
              <Input placeholder="Tél Chauffeur" />
              <Input placeholder="Plaque vehicule" />
            </View>
            <View style={styles.formArticle}>
              <View style={styles.formCode}>
                <Input placeholder="Code Article" />
              </View>
              <View style={styles.formQte}>
                <Input placeholder="Quantité" />
              </View>
              <View style={styles.formBtn}>
                <RoundBouton>
                  <Icon name="plus-thick" color="#fff" size={20} />
                </RoundBouton>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  b2: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    paddingVertical: 35,
    paddingHorizontal: 15,
    // borderWidth: 1,
  },
  form: {
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  formArticle: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  formQte: {
    flex: 1,
  },
  formCode: {
    flex: 1,
  },
});

export default HomeScreen;
