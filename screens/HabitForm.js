import React, {useState, useEffect} from 'react';
import { StyleSheet , Text, View , Button, TextInput, Label } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';


const reviewSchema = yup.object({
  name: yup.string()
  .required()
  .min(4),
  body:yup.string(),
  motivational_message: yup.string()
})

export default function HabitForm  ({ submitHandler }) {


   

return(
    <View style={globalStyles.container}>

<Formik
initialValues={{name:"", body:"", motivational_message:""}}
validationSchema={reviewSchema}
onSubmit ={(values, actions) => {
  actions.resetForm();
  submitHandler(values)

}}
>
    {(props) =>(
       <View>
        
        <TextInput
         style={globalStyles.input}
         
        placeholder="Read a book, drink more water etc."
        onChangeText={props.handleChange('name')}
        value={props.values.name}
        onBlur={props.handleBlur('name')}
        />
         <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
         <TextInput
          multiline minheight={60}
        style={globalStyles.input}
        placeholder="More info about your habit"
        onChangeText={props.handleChange('body')}
        value={props.values.body}
        />
        <TextInput
          multiline
        style={globalStyles.input}
        placeholder="Motivate yourself"
        onChangeText={props.handleChange('motivational_message')}
        value={props.values.motivational_message}
        />
<Button title='Submit' color="coral" onPress={props.handleSubmit}/>
       
       </View> 
    )}
</Formik>

    </View>
)
}