import {StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({

    container:{
       padding:5,
        flex:1,
       
    },
    titleText:{
      alignSelf:'center',
        fontSize:20,
        color:'black',
        marginBottom:26,
    },
    paragraog:{
        marginvertical:8,
        lineHeight:20,
    },
    input:{
        borderWidth:1,
        borderColor:'grey',
        padding:16,
        fontSize:16,
        borderRadius:20,
        color:'grey',
        width:300,
        alignSelf:'center',
marginTop:5,


    },
    errorText:{
        color:'green',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    },
    labelText:{
        alignSelf:"flex-start",
        fontSize:14,
        alignSelf:"flex start",
    },
    thirdText:{
        marginTop:16,
       
    }
})