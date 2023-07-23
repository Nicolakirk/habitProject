import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { StyleSheet , Text, View , ScrollView, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { deleteHabit, fetchHabitsbyUser, postHabit } from './utils/api';



import HomeDrawer from './routes/HomeDrawer';




const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};



export default function App() {
 
 



  
  return (
    <NavigationContainer>
<HomeDrawer/>

</NavigationContainer>
  )
}

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    justifyContent:'center',
   
   
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
 content:{
  flex:1,
padding:20,
backgroundColor:'red',
margin:20,
 },

 list:{
 flex:1,
marginTop:20,


 }

  
});
