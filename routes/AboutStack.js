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
      initialRouteName="How"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
            height: 100,
          },
        }}
      >
        <Stack.Screen
          name="How to use Habit Stack"
          component={AboutPage}
         
        />
       
      </Stack.Navigator>
  
  );
};

export default AboutStack;
