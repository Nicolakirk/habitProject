g
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import{ StyleSheet, View, Text,Button } from'react-native';
import { globalStyles } from '../styles/global';
import { fetchhabitById, patchHabit } from '../utils/api';
import Checkbox from 'expo-checkbox';
import {Calendar, LocaleConfig, CalendarUtils} from 'react-native-calendars';
import  dateFns from "date-fns"
import { format } from "date-fns"


export default function HabitDetails ({ navigation }) {

    const[percentage, setPercentage] = useState(0)
    const[addDay, setAddDay] = useState(0);
    const [err, setErr] =useState('');
    const id = navigation.getParam('habit_id')
    const days = navigation.getParam('amount_days')
    const[habitsById, setHabitListById]= useState([])
    const[isChecked, setIsChecked]=useState("")
   
    useEffect(() => {
       
        setPercentage(Math.round((days / 90) * 100))
      }, [days])


    

      const handleAdd = () => {
        setAddDay((currentDay) => currentDay + 1);
        setErr('');
        setPercentage(Math.round(((days + 1) / 90) * 100));
        patchHabit(id)
          .catch((err) => {
            setAddDay((currentDay) => currentDay - 1);
            console.log('Something went wrong, try again later');
          });
        
      };

      const handleSubtract = () => {
        setAddDay((currentDay) => currentDay - 1);
        setErr('');
        setPercentage(Math.round(((days + 1) / 90) * 100));
        patchHabit(id)
          .catch((err) => {
            setAddDay((currentDay) => currentDay + 1);
            console.log('Something went wrong, try again later');
          });
         
      };
     
    

    return(
        <View style = {styles.container} key={navigation.getParam('habit_id')}>
            <View  style={styles.list}>
            <Text> {navigation.getParam('name')}
        </Text>
        <Text> {navigation.getParam('body')}
        </Text>
        <Text> How often : {navigation.getParam('frequency')}
        </Text>
        <Text> {navigation.getParam('motivational_message')}
        </Text>
        <Text> Amount of days : {days  + addDay}
        </Text>
        </View>
        <View style={styles.circleContainer}>
       
        <Text style={styles.percentageText}>  {percentage}% </Text>
        </View>
       
        <Calendar
     
        />
        <Button title="Add Habit" onPress={handleAdd}/>
        {/* <Checkbox value ={isChecked} color={ isChecked?"coral":undefined } onValueChange={setIsChecked}/> */}
       
       
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: '#fff',
       
       alignItems: 'center',
       justifyContent: 'flex-start',
      },
    list: {
        
      alignItems:'flex-start',
         borderColor:'grey',
         padding:20,
         borderWidth:1,
         borderRadius:20,
         borderStyle: "dashed",
         flexDirection: 'column',
         
         
      
          // alignItems: 'center',
          // justifyContent: 'center',
        },
        circleContainer: {
            marginTop:16,
            width: 100,
            height: 100,
           
           
            borderWidth:10,
            borderRadius:50,
            borderColor:'coral',
            justifyContent:"center",
            alignItems:"center",
            marginBottom:20
          },
          percentageText:{
            justifyContent:"center",
            alignItems:"center"
          },
          calendar:{
            borderWidth:1,
            borderColor:'gray',
            height:350,
            borderRadius:10,
          }
    });

