import React , { useState }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-ionicons'

export default function Header(){
return(
    <View style={ styles.header }>
        <Text style={ styles.title }> Today's Tasks</Text>
    </View>
);

};

// stylesheet
const styles = StyleSheet.create({
header:{
    height:80,
    paddingTop: 38,
    backgroundColor:'coral',
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
    
    
},
title: {
    textAlign:'center',
    fontWeight:'bold',
    alignItems:'center',
    color:'#fff',
    fontSize:20,
},
});