import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  TextInput,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Avatar,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {isLogged} from './../store/reducers/users/users.actions';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class DrawerCustomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.name = null;
    this.prenom = null;
    this.profile = null;
    this.lieu = null;
  }
  componentDidMount() {}
  componentDidUpdate() {
    this.name = this.props.userData.dataUser.users.info[0].nom;
    this.prenom = this.props.userData.dataUser.users.info[0].prenom;
    this.profile = this.props.userData.dataUser.profile;
    this.lieu = this.props.userData.dataUser.lieuAffectation;
    // console.log(this.props.userData.dataUser.users.info[0].nom);
  }
  render() {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...this.props}>
          {/* FOR AVATAR */}
          <View style={styles.headerAvatar}>
            <View style={styles.avatar}>
              <Avatar.Image
                source={require('../assets/default.png')}
                size={50}
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.titlemain}>
                {this.name + ' ' + this.prenom}
              </Text>
              <Caption>{this.profile}</Caption>
              <Caption>{this.lieu}</Caption>
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color="#a8dadc" size={size} />
              )}
              label="Tableau de bord"
              labelStyle={styles.itemMeu}
              onPress={() =>
                this.props.navigation.navigate('Home')
              }></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="arrow-expand" color="#a8dadc" size={size} />
              )}
              label="Expeditions"
              labelStyle={styles.itemMeu}
              onPress={() =>
                this.props.navigation.navigate('Expeditions')
              }></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="arrow-expand" color="#a8dadc" size={size} />
              )}
              label="Receptions"
              labelStyle={styles.itemMeu}
              onPress={() =>
                this.props.navigation.navigate('Expeditions')
              }></DrawerItem>
          </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="power" color="#a8dadc" size={size} />
            )}
            label="Deconnexion"
            labelStyle={styles.itemMeu}
            onPress={() => {
              this.props.disconnect(false);
              // console.log('Deconnexion');
            }}></DrawerItem>
        </Drawer.Section>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#457b9d',
  },
  headerAvatar: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row',
    padding: 8,
    marginTop: -4,
  },
  avatar: {
    marginLeft: 20,
  },
  text: {
    flex: 1,
    // borderWidth: 1,
    paddingLeft: 20,
    // marginLeft: 10,
    // alignItems: 'center',
  },
  titlemain: {
    fontWeight: 'bold',
  },
  itemMeu: {
    color: '#e5e5e5',
  },
});
const mapToDispatchToProps = (dispatch) => ({
  disconnect: (item) => dispatch(isLogged(item)),
});
export default connect(null, mapToDispatchToProps)(DrawerCustomNavigation);
