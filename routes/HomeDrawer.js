import { createDrawerNavigator, DrawerItem, DrawerContentComponentProps} from '@react-navigation/drawer';


import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import AboutPage from '../screens/AboutPage';
import HomeStack from './Homestack';
import AboutStack from './AboutStack';
import HomePage from '../screens/HomePage';

const Drawer = createDrawerNavigator();




const HomeDrawer = () => {
  return (
   
      <Drawer.Navigator
      initialRouteName="Login"
      
      screenOptions={{
        headerTintColor:'black',
        headerStyle: {
          backgroundColor: 'white',
          height: 100,
        
     
        },
       
       
      }}
      
      >
        
         <Drawer.Screen
          name="Habit Stack "
          component={HomeStack}
          options={{
            drawerActiveBackgroundColor:"yellow",
          }}
        />
        <Drawer.Screen
          name="How to use"
          component={AboutStack}
          options={{
            
            drawerActiveBackgroundColor:"yellow", // Set the title for the screen
          }}
        />
      </Drawer.Navigator>
  
  );
};

export default HomeDrawer;