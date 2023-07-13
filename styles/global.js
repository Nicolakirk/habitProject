import {StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({

    container:{
        padding:20,
        flex:1,
    },
    titleText:{
       
        fontSize:18,
        color:'#333'
    },
    paragraog:{
        marginvertical:8,
        lineHeight:20,
    },
    input:{
        borderWidth:1,
        borderColor:'#333',
        padding:16,
        fontSize:18,
        borderRadius:20,
        color:'pink',
marginTop:10,

    },
    errorText:{
        color:'coral',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }
})