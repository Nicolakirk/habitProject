import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View , ScrollView, TouchableOpacity , swipe } from 'react-native';
import { fetchHabitsbyUser } from "../utils/api";
import { SwipeListView } from 'react-native-swipe-list-view';

export default function HabitView ({ habit, pressHandler}) {

  const handleDelete = () => {
    pressHandler(habit.habit_id);
  };



      

   return(
    
    <View key={habit.habit_id} style={styles.list} >
            <TouchableOpacity onPress={handleDelete} >
            <Text style={styles.item} > Habit -{ habit.name} </Text>
            <Text  style={styles.item}>Motivate - {habit.motivational_message}</Text>
            <Text style={styles.item}>Frequency - {habit.frequency}</Text>
            </TouchableOpacity>
          </View>
   )



}




const styles = StyleSheet.create({
list: {
  margingTop:16,
    backgroundColor: '#fff',
   borderColor:'grey',
   padding:16,
   borderWidth:1,
   borderRadius:20,
   borderStyle:"dashed"

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  

 

});

