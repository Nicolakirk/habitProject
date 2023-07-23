import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import HomePage from '../screens/HomePage';
import LoginScreen from '../screens/LoginScreen';
import HabitDetails from '../screens/HabitDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
   
      <Stack.Navigator
      initialRouteName ="Login"
       
      
      >
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          
        />
       
       
         <Stack.Screen
          name="Habit"
          component={HabitDetails}
          
        />
      </Stack.Navigator>
  
  );
};

export default HomeStack;

