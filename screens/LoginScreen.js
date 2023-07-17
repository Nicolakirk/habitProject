import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import HomePage from './HomePage';


export default function LoginScreen({ navigation }) {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  
console.log(navigation)
    // Check the entered username and password
    console.log(username)
    console.log(password)
    if (username === 'jessjelly' && password === 'password') {
      // User is authenticated
      // setUsername('');
      // setPassword('');
  navigation.navigate('Home');
      
    } else {
      Alert.alert('Invalid credentials', 'Please enter valid username and password');
    }
  };

  const handleCreateAccount = () => {
    // Implement logic to create a new account
    // This could navigate to a separate Create Account screen
    Alert.alert('Create Account', 'Functionality not implemented yet');
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(username)=> setUsername(username)}
      />
      <TextInput
      style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(password)=> setPassword(password)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
    marginTop:26,
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
