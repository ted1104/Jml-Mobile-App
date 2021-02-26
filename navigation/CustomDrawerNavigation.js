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
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class DrawerCustomNavigation extends React.Component {
  constructor(props) {
    super(props);
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
              <Text style={styles.titlemain}>Teddy Walter</Text>
              <Caption>Expediteur</Caption>
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
              conosole.log('Deconnexion');
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
export default DrawerCustomNavigation;
