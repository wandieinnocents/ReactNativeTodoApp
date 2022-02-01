import React , { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function TodoItem({ item, pressHandler }){
    return(
        
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
           
            <Text style={styles.displayItem}>{ item.text} </Text>
            <View style={styles.deleteItem}>
            <IonIcon name="ios-trash" size={16} color="red"></IonIcon>
            </View>

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
        
    },

    // delete css
    deleteItem:{
        flex:1,
        paddingLeft:5,
        
    }

    });


