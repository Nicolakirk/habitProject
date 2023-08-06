import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { deleteHabit, fetchhabitById, patchHabit, patchPercentageHabit } from '../utils/api';
import Checkbox from 'expo-checkbox';
import { MaterialIcons } from '@expo/vector-icons';

export default function HabitDetails({ navigation, route }) {
  
  const {habit, handleDelete } = route.params;
  
 

  const [newPercentage, setNewPercentage] = useState(0);
  const [addDay, setAddDay] = useState(0);
  const [err, setErr] = useState('');
  const id = habit.habit_id;
  const [habitsById, setHabitsById] = useState({});
  const [isChecked, setIsChecked] = useState('');
  const key = habit.habit_id;
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchhabitById(id)
      .then((habits) => {
       console.log("new habit", habits[0])
        setHabitsById(habits);
      })
      .catch((error) => {
        console.log('Error fetching habit details:', error);
      });
  }, [id]);

  useEffect(() => {
    if (habitsById.length > 0) {
      const days = habitsById[0]?.amount_days;
      setNewPercentage(Math.round(((days + addDay) / 90) * 100));
    }
  }, [habitsById]);

  useEffect(() => {
    if (habitsById.length > 0 && habitsById[0]?.amount_days < 20) {
      setMessage('Great start');
    }
    if (habitsById.length > 0 &&  habitsById[0]?.amount_days > 20 && habitsById[0]?.amount_days < 40 ) {
      setMessage('Keep Going!');
    }
    if (habitsById.length > 0 &&  habitsById[0]?.amount_days > 40 && habitsById[0]?.amount_days < 60 ) {
      setMessage('You are doing so well!');
    }
    if (habitsById.length > 0 &&  habitsById[0]?.amount_days > 60 && habitsById[0]?.amount_days < 89 ) {
      setMessage('You"ve nearly created a new habit!');
    }
    if (habitsById.length === 0 && habitsById[0]?.amount_days === 90) {
      setMessage('Well done, You"ve  created a new habit!');
    }
  }, [habitsById]);

  const handleAdd = () => {

    if (habitsById[0]?.amount_days + addDay >= 90) {
      // Show the alert
      Alert.alert('New habit is completed ');
  
      // Disable the button
      return;
    }  if (habitsById[0].amount_days + addDay <90){
      Alert.alert('Are you sure you want to change this habit?', undefined, [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => handlePlus(),
        },
      ]);
    }
  }

  const handlePlus =() => {
    const updatedAddDay = addDay + 1
    const updatedPercentage = Math.round(((habitsById[0]?.amount_days + updatedAddDay) / 90) * 100);
    setAddDay((currentDay) => currentDay + 1);
    setErr('');
    setNewPercentage(Math.round(((habitsById[0]?.amount_days + addDay + 1) / 90) * 100));
    patchHabit(id, 1)
    patchPercentageHabit(id,updatedPercentage)
      .catch((err) => {
        setAddDay((currentDay) => currentDay - 1);
        console.log('Something went wrong, try again later');
      });
  };


  const handleSubtract = () => {
    if (habitsById[0]?.amount_days + addDay >= 90) {
      // Show the alert
      Alert.alert('New habit is completed ');
  
      // Disable the button
      return;
    }
    if (habitsById[0].amount_days + addDay <90){
      Alert.alert('Are you sure you want to change this habit?', undefined, [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => handleTakeaway(),
        },
      ]);
    }
  }

    const handleTakeaway =() => {
      const updatedAddDay = addDay - 1;
      const updatedPercentage = Math.round(((habitsById[0]?.amount_days + updatedAddDay) / 90) * 100);

    setAddDay((currentDay) => currentDay - 1);
    setErr('');
    setNewPercentage(Math.round(((habitsById[0]?.amount_days + addDay - 1) / 90) * 100));
    patchHabit(id, -1)
    patchPercentageHabit(id,updatedPercentage)
      .catch((err) => {
        setAddDay((currentDay) => currentDay + 1);
        console.log('Something went wrong, try again later');
      });
  };
  
  const onPressDelete = () => {
    Alert.alert('Are you sure you want to delete this habit?', undefined, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => handleDelete(key),
      },
    ]);
  };

  if (!habitsById.length) {
    return <Text>Loading...</Text>;
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.listTitle}>Name:{habitsById[0]?.name}</Text>
        <Text style={styles.listText}>Frequency: {habitsById[0]?.frequency}</Text>
        <Text style={styles.listText}>Motivation:{habitsById[0]?.motivational_message}</Text>
        <Text style={styles.listText}>Amount of habit days: {habitsById[0]?.amount_days + addDay}</Text>
      </View>
      <View>
        <Text style ={globalStyles.titleText}>{message}</Text>
      </View>
      <View style={styles.circleContainer}>
        <Text style={styles.percentageText}>{newPercentage}%</Text>
        <Text>{habitsById[0].percentage}</Text>
        
      </View>

      <View style={styles.addHabitContainer}>
        <Button title="+ Habit" color="green" onPress={handleAdd} />
        <Button title="- Habit" color="green" onPress={handleSubtract} />
      </View>

      <Button title="Delete Habit" color="green"  onPress={onPressDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  list: {
    alignItems: 'flex-start',
    borderColor: 'grey',
    padding: 20,
   
   
    borderRadius: 20,
    borderStyle: 'dashed',
    flexDirection: 'column',
    marginTop: 20,
    width:300,
  },
  circleContainer: {
    marginTop: 16,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 50,
    borderColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  percentageText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addHabitContainer: {
    flexDirection: 'row',
  },
  listTitle:{
    fontWeight:'bold',
    padding:10,
  },
  listText:{
   padding:10,
  }
});
