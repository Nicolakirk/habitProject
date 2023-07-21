import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './Homestack';

import HomePage from '../screens/HomePage';
import LoginScreen from '../screens/LoginScreen';
import AboutPage from '../screens/AboutPage';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
   
      <Stack.Navigator
      initialRouteName="About"
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: 'green',
        //     height: 100,
        //   },
        // }}
      >
        <Stack.Screen
          name="About"
          component={AboutPage}
          options={{
            title: 'Login', // Set the title for the screen
          }}
        />
       
      </Stack.Navigator>
  
  );
};

export default AboutStack;
