import { createDrawerNavigator } from '@react-navigation/drawer';


import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import AboutPage from '../screens/AboutPage';
import HomeStack from './Homestack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
   
      <Drawer.Navigator
      initialRouteName="Login"
       
      >
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
        //   options={{
        //     title: 'Login', // Set the title for the screen
        //   }}
        />
         <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
        //   options={{
        //     title: 'About Page', // Set the title for the screen
        //   }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
        //   options={{
        //     title: 'About Page', // Set the title for the screen
        //   }}
        />
      </Drawer.Navigator>
  
  );
};

export default HomeDrawer;