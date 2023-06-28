import React, { useState, useEffect } from 'react'
import { StyleSheet , Text, View , ScrollView, TouchableOpacity } from 'react-native';


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My habits</Text>
        </View>
    )
}

const styles =StyleSheet.create({
header:{
    height:80,
    paddingTop:38,
    backgroundColor:'navy',
},
title:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
}

})