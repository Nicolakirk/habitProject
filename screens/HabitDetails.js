import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { fetchhabitById, patchHabit } from '../utils/api';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HabitDetails({ navigation }) {
  const [percentage, setPercentage] = useState(0);
  const [addDay, setAddDay] = useState(0);
  const [err, setErr] = useState('');
  const id = navigation.getParam('habit_id');
  const days = navigation.getParam('amount_days');
  const [habitsById, setHabitListById] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [showWellDone, setShowWellDone] = useState(false);

  useEffect(() => {
    retrieveData();
    setCheckboxStates(Array.from({ length: 7 }, () => false));
  }, []);

  useEffect(() => {
    patchHabit(id)
      .catch((err) => {
        console.log('Something went wrong, try again later');
      });
    storeData();
  }, [addDay]);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(`habit_progress_${id}`);
      if (value !== null) {
        const { savedDays, savedPercentage } = JSON.parse(value);
        setAddDay(savedDays);
        setPercentage(savedPercentage);
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const storeData = async () => {
    try {
      const data = { savedDays: addDay, savedPercentage: percentage };
      await AsyncStorage.setItem(`habit_progress_${id}`, JSON.stringify(data));
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };

  const handleCheckboxChange = (index, value) => {
    if (value) {
      setAddDay((currentAddDay) => currentAddDay + 1);
    } else {
      setAddDay((currentAddDay) => currentAddDay - 1);
    }
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = value;
    setCheckboxStates(updatedCheckboxStates);
  };

  useEffect(() => {
    if (addDay % 7 === 0) {
      setCheckboxStates(Array.from({ length: 7 }, () => false));
    }

    setPercentage(Math.round(((days + addDay) / 90) * 100));

    if (addDay >= 90 && percentage >= 100) {
      setShowWellDone(true);
    } else {
      setShowWellDone(false);
    }
  }, [addDay]);

  const renderCheckboxes = () => {
    const checkboxesToRender = [];

    const startIndex = Math.floor(addDay / 7) * 7;

    for (let i = 0; i < 7; i++) {
      const index = startIndex + i;
      if (index < 90) {
        checkboxesToRender.push(
          <View style={styles.checkboxContainer} key={index}>
            <Checkbox
              value={checkboxStates[index - startIndex]}
              color={checkboxStates[index - startIndex] ? 'coral' : undefined}
              onValueChange={(value) => handleCheckboxChange(index - startIndex, value)}
            />
          </View>
        );
      }
    }

    return checkboxesToRender;
  };

  return (
    <View style={styles.container} key={navigation.getParam('habit_id')}>
      <View style={styles.list}>
        <Text>{navigation.getParam('name')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>How often: {navigation.getParam('frequency')}</Text>
        <Text>{navigation.getParam('motivational_message')}</Text>
        <Text>Amount of days: {days + addDay}</Text>
      </View>
      <View style={styles.circleContainer}>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>

      {!showWellDone && (
        <View style={styles.checkboxesContainer}>
          {renderCheckboxes()}
        </View>
      )}

      {showWellDone && (
        <View style={styles.wellDoneContainer}>
          <Text style={styles.wellDoneText}>Well done!</Text>
        </View>
      )}
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
    borderWidth: 1,
    borderRadius: 20,
    borderStyle: 'dashed',
    flexDirection: 'column',
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
  checkboxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxContainer: {
    marginHorizontal: 10,
  },
  wellDoneContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wellDoneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});



