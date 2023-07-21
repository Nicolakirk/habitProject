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
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: 'green',
        //     height: 100,
        //   },
        // }}
      >
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{
          //   title: 'Login', // Set the title for the screen
          // }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Home Page', // Set the title for the screen
          }}
        />
       
       
         <Stack.Screen
          name="Habit"
          component={HabitDetails}
          options={{
            title: 'Habit Details', // Set the title for the screen
          }}
        />
      </Stack.Navigator>
  
  );
};

export default HomeStack;

