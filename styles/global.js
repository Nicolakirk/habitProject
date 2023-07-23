import {StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({

    container:{
        padding:20,
        flex:1,
    },
    titleText:{
      
        fontSize:20,
        color:'coral'
    },
    paragraog:{
        marginvertical:8,
        lineHeight:20,
    },
    input:{
        borderWidth:1,
        borderColor:'grey',
        padding:16,
        fontSize:20,
        borderRadius:20,
        color:'grey',
        width:250,
marginTop:10,

    },
    errorText:{
        color:'Green',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }
})