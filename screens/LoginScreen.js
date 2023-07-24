import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Keyboard,TouchableOpacity,TouchableWithoutFeedback, Modal, Text, localStorage, getItem, FlatList } from 'react-native';
import HomePage from './HomePage';
import { MaterialIcons } from '@expo/vector-icons';
import CreateLogIn from './CreateLogIn'
import * as SecureStore from 'expo-secure-store';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';
import { fetchUserbyUsers } from '../utils/api'

const LoginSchema=yup.object({
  username:yup.string()
  .required()
  .min(3),
  password:yup.string()
    .required()
    .min(6),
  
})
export default function LoginScreen({ navigation, values, route }) {
 


  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const[modalOpen, setModalOpen]= useState(false);
  const[isAUser, setIsAUser] =useState(false)

  const[isLoggedIn, setIsLoggedIn]=useState(false);
  
 const[userLoggedIn, setUserLoggedIn]=useState({})

  
 
  const handleLogout = () => {
   
    setIsLoggedIn(false);
  };

  const handleLogin = (values) => {
   
const username = values.username
console.log("use",username)
  
    getValueFor(username)
   .then((result)=>{
    console.log("result",result)
    if(result === values.password ) {
    
      navigation.navigate('Home', { values });
      setIsLoggedIn(true);
      setUserLoggedIn(values);
      console.log(userLoggedIn)
      // setUsername('');
      // setPassword('');
    }
    else {
      Alert.alert('username/password is not found')
   };
   })
  }
  
  

  

  


  async function getValueFor(newUserName) {
   
    let result = await SecureStore.getItemAsync(newUserName);
    if (result) {
      console.log("value",result)
   return result;
    } 
  }

  const handleCreateAccount = (newUserName)=>{

   getValueFor(newUserName)
   .then((createdpassWord)=>{

Alert.alert("Account created", undefined,[
  {text:'OK',
onPress: setModalOpen(false),
},
 ]);
 
})
   
   }

  return (
    <View style={styles.container}>

<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Formik
      initialValues={{username:"",password:""}}
      validationSchema={LoginSchema}
      onSubmit={(values, actions)=>{
        actions.resetForm();
        handleLogin(values)
      }}
      >

      {(props) =>{
        return(
        <View>
      <TextInput
      style={globalStyles.input}
        placeholder="Username"
        onChangeText={props.handleChange('username')}
        value={props.values.username}
        
        onBlur={props.handleBlur('username')}
      />
      <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>
      <TextInput
       style={globalStyles.input}
       placeholder="Password"
       onChangeText={props.handleChange('password')}
       value={props.values.password}
       onBlur={props.handleBlur('password')}
        secureTextEntry
      />
     
     
       
    
      { !isLoggedIn ?
      ( <Button title= "Login" color="green"
        onPress = {props.handleSubmit} />):
        (<Button title= "Logout" color="green"
        onPress = {handleLogout} />)}
      
     </View>
        );
    }}
   
     
     </Formik>
     </TouchableWithoutFeedback>

     <Modal visible={modalOpen} animationType = "slide"
     >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <View style={{ ...styles.modalContent, ...styles.modalClose}}>
      
      <MaterialIcons 
        name='close'
        size={26}
       
        style={styles.modalToggle}
        onPress={()=>setModalOpen(false)}
        />
      <CreateLogIn  handleCreateAccount={handleCreateAccount} />
      </View>
      </TouchableWithoutFeedback>
     </Modal>

     
     <Button title="Create Account"color="green" onPress={()=>setModalOpen(true)} />
<View>



</View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
    marginTop:26,
    backgroundColor: 'white',
  },
  input: {
    width: 400,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor:'green'
  },
  modalContent:{
    flex:1,
    padding:20,
    marginTop:10,
   },
   modalToggle:{
    marginBottom:10,
    marginRight:16,
    borderWidth:1,
    borderColor:'white',
    padding:20,
    borderRadius:10,
    alignSelf:'flex-start'
   },
   modalClose:{
    marginTop:30,
    marginBottom:0,
   }
});
