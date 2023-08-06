import React, {useState, useEffect} from 'react';
import { StyleSheet , Text, View , Alert, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store';
import { fetchUserbyUsers, postUser } from '../utils/api';


export default function CreateLogIn ({ handleCreateAccount}) {


    const [newUserName, setNewUserName] = useState('');
    const [newName, setNewName] =useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const[noUserExists, setNoUserExists]=useState(false)



async function save(newUserName, newPassword) {
  await SecureStore.setItemAsync(newUserName, newPassword);
  
};

const handlePassword =()=>{
  
  const inputBody = {
    username: newUserName,
    name:newName
  }
  console.log(inputBody)
  fetchUserbyUsers(newUserName)
  .then((user) => {
    if (user.length === 0) {
      // User does not exist
      setNoUserExists(true);
      // Proceed to account creation
      if (newPassword === confirmPassword) {
        save(newUserName, newPassword).then(() => {
          console.log('account created');
          handleCreateAccount(newUserName);
          postUser(inputBody)
            .then(() => {
              console.log('new user added');
            })
            .catch((err) => {
              console.log('Error adding user:', err);
            });
        });
      } else {
        Alert.alert('Passwords do not match');
      }
    } else {
      // User already exists
      Alert.alert('User already exists');
    }
  })
  .catch((error) => {
    console.log('Error fetching user:', error);
  });
};
    

    return (
        <View style={globalStyles.container}>
          <View>
          <Text style={globalStyles.titleText}> Create an Account </Text>
          </View>
             <TextInput  style={globalStyles.input}
              value={newUserName}
              onChangeText={(newUserName) => setNewUserName(newUserName)}
              placeholder='Username'
              fontSize={16}
             />

<TextInput style={globalStyles.input}
              value={newName}
              onChangeText={(newName) => setNewName(newName)}
              placeholder='name'
              fontSize={16}
             />

<TextInput  style={globalStyles.input}
              value={newPassword}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            placeholder='Password'
                secureTextEntry
                fontSize={16}
             />
             <TextInput  style={globalStyles.input}
              value={confirmPassword}
              onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            placeholder='Confirm Password'
                secureTextEntry
                fontSize={16}
             />
          
        <View style ={styles.buttonContainer}>
          

        <Button
          title='+ Account'
        color="coral"
          onPress={handlePassword }
          
        />
        </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignItems:'center',
   
      marginTop:16,
      padding:10,
     
    },
    input: {
        width: 200,
        height: 44,
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginTop:16,
        marginBottom: 10,
      },
      buttonContainer:{
        alignitems:"center"
      },
      text: {
        marginBottom: 10,
      },
});