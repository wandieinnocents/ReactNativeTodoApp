import React , { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Sandbox(){

    return (
        <View style={styles.container}>
        <Text style={styles.boxOne}> ONE </Text>
        <Text style={styles.boxTwo}> TWO </Text>
        <Text style={styles.boxThree}> THREE </Text>
        <Text style={styles.boxFour}> FOUR </Text>
        </View>

      
      
    );
}

// stylesheet
const styles = StyleSheet.create({

container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:40,
    textAlign:'center',
    alignItems:'flex-start',
    backgroundColor:'#ddd',
    
},
boxOne:{
flex:1,
backgroundColor:'violet',
padding:10,
},
boxTwo:{
    flex:1,
backgroundColor:'gold',
padding:10,
},
boxThree:{
    flex:1,
backgroundColor:'blue',
padding:10,
},
boxFour:{
flex:1,
backgroundColor:'green',
padding:10,
},




});