import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {connect} from 'react-redux';
//COMPONENT EXPORTS
import LoginScreen from './../components/screens/Login';
import HomeScreen from './../components/screens/Home';
import ExpeditionsScreen from './../components/screens/Expeditions';
import AddExpeditionsScreen from './../components/screens/AddExpedition';
import ReceptionsScreen from './../components/screens/Receptions';
import AddReceptionsScreen from './../components/screens/AddReception';

//NAVIGATION
import CustomDrawerNavigation from './CustomDrawerNavigation';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = ({users, usersState}) => {
  return !users.isLogged ? (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Expeditions"
        component={ExpeditionsScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  ) : (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerNavigation {...props} userData={usersState} />
      )}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Tableau de Bord',
        }}
      />
      <Drawer.Screen
        name="Expeditions"
        component={ExpeditionsScreen}
        options={{
          headerShown: false,
          title: 'Expeditions',
        }}
      />
      <Drawer.Screen
        name="AddExpedition"
        component={AddExpeditionsScreen}
        options={{
          headerShown: false,
          title: 'Expeditions',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Receptions"
        component={ReceptionsScreen}
        options={{
          headerShown: false,
          title: 'Receptions',
        }}
      />
      <Drawer.Screen
        name="AddReceptions"
        component={AddReceptionsScreen}
        options={{
          headerShown: false,
          title: 'Add Reception',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
};
const mapToStateProps = (state) => ({
  usersState: state,
});
export default connect(mapToStateProps)(MainNavigation);
