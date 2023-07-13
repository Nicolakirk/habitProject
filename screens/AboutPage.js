import React from 'react';
import{ StyleSheet, View, Text } from'react-native';
import { globalStyles } from '../styles/global';

export default function AboutPage () {

    return(
        <View style = {globalStyles.container}>
        <Text> About 
        </Text></View>
    )
}

 const styles = StyleSheet.create ({
    container: {
        padding: 24,
    }
 })