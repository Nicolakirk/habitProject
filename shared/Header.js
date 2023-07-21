import React from "react";
import { StyleSheet, Text, View  } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export default function Header () {
    return (
        <View style={styles.header}>
<Text style={styles.headerText}>
Habit
</Text>
        </View>
    )

}


const styles = StyleSheet.create ({
    header:{
        width:'100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        
        color:'white',
        letterSpacing: 1,
    }
})