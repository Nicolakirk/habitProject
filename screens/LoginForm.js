import React, {useState, useEffect} from 'react';
import { StyleSheet , Text, View , Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const LoginSchema=yup.object({
    username:yup.string()
    .required()
    .min(3),
    password:yup.string()
      .required()
      .min(6),
    
  })

  export default function LoginForm ({ handleLogin }) {
return (
    <View style={globalStyles.container}>

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
       placeholder="password"
       onChangeText={props.handleChange('password')}
       value={props.values.password}
       onBlur={props.handleBlur('password')}
        secureTextEntry
      />
     
      
  
        <Button title= "Login" color="coral"
        onPress = {props.handleSubmit} />
      
     </View>
        );
    }}
   
     
     </Formik>

    </View>
)
  }