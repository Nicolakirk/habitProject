import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View , ScrollView, TouchableOpacity , swipe } from 'react-native';
import { fetchHabitsbyUser } from "../utils/api";
import { SwipeListView } from 'react-native-swipe-list-view';
import{ MaterialIcons } from '@expo/vector-icons';

export default function HabitView ({ habit, pressHandler}) {

  const handleDelete = () => {
    pressHandler(habit.habit_id);
  };



      

   return(
    
    
            <TouchableOpacity onPress={handleDelete} >
              <View key={habit.habit_id} style={styles.list} >
              <MaterialIcons name='delete'size={20} color='#333'/>
            <View style={styles.habitView}>
            <Text  style={styles.text}>Habit -{ habit.name} </Text>
            <Text  style={styles.text}>Motivate - {habit.motivational_message}</Text>
            <Text style={styles.text} >Frequency - {habit.frequency}</Text>
            </View>
</View>
            </TouchableOpacity>
      
   )



}




const styles = StyleSheet.create({
list: {
  marginTop:16,
alignItems:'center',
   borderColor:'grey',
   padding:16,
   borderWidth:1,
   borderRadius:20,
   borderStyle: "dashed",
   flexDirection: 'row',
   
   

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  habitView:{
    flexDirection:'column',
    alignItems:'flex-start',
    marginLeft:10,
    padding:5,
  }
  

 

});

