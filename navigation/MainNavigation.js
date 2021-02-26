import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//COMPONENT EXPORTS
import LoginScreen from './../components/screens/Login';
import HomeScreen from './../components/screens/Home';
import ExpeditionsScreen from './../components/screens/Expeditions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = ({users}) => {
  return !users.isLogged ? (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  ) : (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'Accueil',
        }}
      />
      <Drawer.Screen
        name="Expeditions"
        component={ExpeditionsScreen}
        options={{
          headerShown: true,
          title: 'Expeditions',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
