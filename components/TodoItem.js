import React , { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }){
    return(
        
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
            <Text style={styles.displayItem}>{ item.text} </Text>
            <Text style={styles.deleteItem}>d</Text>

            </View>
           
        </TouchableOpacity>
    );
    
    };
    

// stylesheet
const styles = StyleSheet.create({
    item: {
        padding:16,
        flex:1,
        flexDirection:'row',
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10
    },

    // item css
    displayItem:{
        flex:6,
        paddingLeft:5,
        backgroundColor:'coral',
    },

    // delete css
    deleteItem:{
        flex:1,
        paddingLeft:5,
        backgroundColor:'red',
    }

    });


