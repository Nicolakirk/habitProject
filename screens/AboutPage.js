import React from 'react';
import{ StyleSheet, View, Text } from'react-native';
import { globalStyles } from '../styles/global';

export default function AboutPage () {

    return(
        <View style = {globalStyles.container}>
        <Text>Welcome to Habit Stack. 
            You can add new habits you want to create to your stack. 
            Once you've added the habit you can click on it and add to your habit. Once you reaach 100% (90 times) your new habit has been completed.
        </Text>
        </View>
    )
}

 const styles = StyleSheet.create ({
    container: {
        padding: 24,
    }
 })