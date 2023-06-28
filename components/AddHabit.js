import React from "react";
import { useState } from "react";
import { StyleSheet, View , TextInput, Button, Alert } from 'react-native';
import { postHabit } from "../utils/api";


export default function AddHabit ({ submitHandler }) {

    const[nameList, setName]= useState("");
   


    const changeHandler =(value)=>{
        setName(value);
       
    }


    return (
        <View>
            <TextInput
            style={styles.input}
            
            placeholder="new habit"
            onChangeText={changeHandler}
            />
              {/* <TextInput
            style={styles.input}
            value={motivate}
            placeholder="Motivate yourself"
            onChangeText={setMotivate}
            /> */}
<Button onPress={ ()=> submitHandler(nameList, setName)} title='+ Habit' color='coral'/>
        </View>
    )



}

const styles = StyleSheet.create({
    input:{
        marginBottom:15,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    }
})