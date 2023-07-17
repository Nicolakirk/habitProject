import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // Check the entered username and password
    if (username === 'jessJelly' && password === 'password') {
      // User is authenticated
      setUsername('');
      setPassword('');
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
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
}
