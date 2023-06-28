import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet , Text, View , ScrollView, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { deleteHabit, fetchHabitsbyUser, postHabit } from './utils/api';
import Header from './components/Header';
import HabitView from './components/HabitView';
import AddHabit from './components/AddHabit';
import Swipeable from 'react-native-swipeable';

export default function App() {
 
 
  const[motivateList, setMotivate]=useState('Yeah!');
  const [frequencyList, setFrequency] = useState('Every day');
 const[bodyList, setBodyList]=useState("more info about habit")
const [ habitList, setHabitList ]= useState ([]);
const [owner, setOwner ]= useState("cooljmessy");
const[keyList, setkeyList]=useState("")


useEffect(() => {
  fetchHabitsbyUser(owner)
    .then((habits) => {
      setHabitList(habits);
     
    })
    .catch((error) => {
      console.error('Error fetching habits:', error);
    });
}, []);

const pressHandler = (key) => {
  // Delete the habit from the API
  deleteHabit(key)
    .then(() => {
      console.log('Habit deleted successfully from the API');

      // Remove the habit from the local state
      setHabitList((currentHabits) => {
        return currentHabits.filter((habit) => habit.habit_id !== key);
      });
    })
    .catch((err) => {
      console.log('Error deleting habit:', err);
    });
};

const submitHandler = (nameList) => {
  const inputHabit = {
    name: nameList,
    body: bodyList,
    frequency: frequencyList,
    motivational_message: motivateList,
    habit_id: keyList,
  };

  setkeyList(Math.random().toString());

  if (nameList.length > 3) {
    // Add the habit to the UI immediately
    setHabitList((prevHabits) => {
      return [
        {
          name: nameList,
          body: bodyList,
          frequency: frequencyList,
          motivational_message: motivateList,
          habit_id: keyList,
        },
        ...prevHabits,
      ];
    });

    postHabit(owner, inputHabit)
      .then(() => {
        console.log('Habit added successfully to the API');
      })
      .catch((error) => {
        console.log('Error adding habit:', error);
        // Remove the habit from the UI
        setHabitList((prevHabits) => {
          return prevHabits.filter((habit) => habit.habit_id !== keyList);
        });
      });
  } else {
    Alert.alert('Oops', 'Habits must be over 3 characters long', {
      text: 'OK',
      onPress: () => console.log('Alert closed'),
    });
  }
};






  
  return (
    <TouchableWithoutFeedback onPress={()=>{
Keyboard.dismiss();
      console.log("dismmiss keyboard")
    }}>
    <View style={styles.container}>
      <Header />
<View style={styles.content}>
  <AddHabit habitList={habitList} setHabitList={setHabitList} owner ={owner} setOwner={setOwner}
  submitHandler={submitHandler}/>
    <ScrollView>
      
      {habitList.map((habit)=>{
        return (
          
          <HabitView 
          key ={habit.habit_id} 
          habit = {habit}
           pressHandler =
           {pressHandler} />

        )
      })}
  
  </ScrollView>
     
  </View>
       
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
   
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
 content:{
padding:20,
margin:20,
 }

 

  
});
