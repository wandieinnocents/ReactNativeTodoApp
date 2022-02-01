import React , { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

export default function AddTodo({submitHandler}){

    const [text,setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    return(
     <View>

         <TextInput 
         style={styles.input}
         placeholder='Click to Add Task...'
         textAlign='center'
         onChangeText={changeHandler}
        />

        {/* Add task button  */}
<View>

{/* icon with button */}
<IonIcon name="md-add-circle" onPress={() => submitHandler(text)}  size={20} style={styles.icon}>
   <Text style={styles.text}>Add Task</Text>
</IonIcon>

     </View>




     </View>
    );
};



// stylesheet
const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical:1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

   
    icon:{
        backgroundColor:'coral',
        padding:10,
        textAlign:'center',
        color:'#fff',
        borderRadius:15,
        


    }
    });