import React, {useState, useEffect} from 'react';
import { StyleSheet , Text, View , ScrollView, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { deleteHabit, fetchHabitsbyUser, postHabit } from '../utils/api';
import HabitForm from './HabitForm';


export default function HomePage ({ 
    navigation,  route, userLoggedIn }) {
      const { values } = route.params;
// const newUser = navigation.getParam("values")

    //  const updatedUser= values.username
     console.log("in",values)
        const [frequencyList, setFrequency] = useState('Every day');
       
      const [ habitList, setHabitList ]= useState ([]);
      const [owner, setOwner ]= useState("");
      const[keyList, setkeyList]=useState("")
      const[modalOpen, setModalOpen]= useState(false);

      useEffect(() => {
     setOwner(values.username)
        fetchHabitsbyUser(owner)
          .then((habits) => {
         
            if(habits.length < 1){
Alert.alert("Welcome to Habits app, start by setting a new habit ", undefined,[
  {text:"Not yet",
  style:'cancel',
},{
  text:"+ Habit",
  onPress:()=> setModalOpen(true)
}
])
            }
            else{
            setHabitList(habits);
            }
          })
          .catch((error) => {
            console.error('Error fetching habits:', error);
          });
      }, [owner]);
   
      const submitHandler = (habit) => {
       
        const inputHabit = {
          name: habit.name,
          body: habit.body,
          frequency: frequencyList,
          motivational_message: habit.motivational_message,
          key: keyList,
          habit_id: keyList,
        };
      
        setkeyList(Math.random().toString());
      
        // if (nameList.length > 3) {
          // Add the habit to the UI immediately
          setHabitList((prevHabits) => {
            return [
              {
                name: habit.name,
                body: habit.body,
                frequency: frequencyList,
                motivational_message: habit.motivational_message,
                key: keyList,
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
                return prevHabits.filter((habit) => habit.key !== keyList);
              });
            });
        //  else {
        //   Alert.alert('Oops', 'Habits must be over 3 characters long', {
        //     text: 'OK',
        //     onPress: () => console.log('Alert closed'),
        //   });
        // }
        setModalOpen(false);
      };

      const handleDelete = (key) => {
        // Delete the habit from the API
        console.log("hi")

        deleteHabit(key)
      
          .then(() => {
         
            console.log('Habit deleted successfully from the API');
      
            // Remove the habit from the local state
            setHabitList((currentHabits) => {
              return currentHabits.filter((habit) => habit.habit_id !== key);
            });
            navigation.navigate("Home",{ values } )
          })
        
          .catch((err) => {
            console.log('Error deleting habit:', err);
          });
      };
      

    return(
        <View style = {globalStyles.container}>
         <Modal visible={modalOpen} animationType = "slide">

         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     
      <View style={{ ...styles.modalContent, ...styles.modalClose}}>
      <MaterialIcons 
        name='close'
        size={26}
        style={styles.modalToggle}
        onPress={()=>setModalOpen(false)}
        />
        <HabitForm submitHandler={submitHandler} />
        </View>
        </TouchableWithoutFeedback>
     </Modal>
        <MaterialIcons 
        name='add'
        size={26}
        style={styles.modalToggle}
        onPress={()=>setModalOpen(true)}
        />
       
    

    <View style={styles.container}>
     
<View style={styles.content}>
  
  <View >
    <ScrollView>
      
      {habitList.map((habit)=>{
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('Habit', 
            { habit, handleDelete  
            }) 
             
             
               }>
            <View key={habit.habit_id} style={styles.list} >
            
          <View >
          <Text  style={styles.text}>Habit -{ habit.name} </Text>

          {habit.amount_days  === 90 && (
        <MaterialIcons name="done" size={24} color="coral" />
      )}

          
          </View>
</View>
</TouchableOpacity>

        )
      })}
  
  </ScrollView>
  </View>
  </View>
       
    </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
     alignItems: 'center',
     justifyContent: 'center',
    },
    
   content:{
    flex:1,
  padding:5,
  width:'100%',
  
  margin:10,
   },
  
  
  
  
   
   list: {
    marginTop:16,
    justifyContent:'flex-start',
  alignItems:'centre',
     borderColor:'grey',
     padding:20,
     borderWidth:1,
     borderRadius:20,
     borderStyle: "dashed",
     flexDirection: 'row',
     
     
  
      // alignItems: 'center',
      // justifyContent: 'center',
    },
   modalContent:{
    flex:1,
    padding:20,
    marginTop:40,
   },
   modalToggle:{
    marginBottom:10,
    marginRight:16,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'flex-end'
   },
   modalClose:{
    marginTop:30,
    marginBottom:0,
   }
  
    
  });
  

