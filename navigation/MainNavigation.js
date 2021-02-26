import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//COMPONENT EXPORTS
import LoginScreen from './../components/screens/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
