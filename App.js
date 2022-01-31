import React , { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import {  YellowBox } from 'react-native-web';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  // data
  const [todos, setTodos] = useState([
  {text: 'Buy  Coffee', key: '1'},
  {text: 'Create an App', key: '2'},
  {text: 'Play on Switch', key: '3'}

  ]);


  // function for pressing list
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

 const submitHandler = (text) => {
  //  validation 
  if(text.length > 3){
    setTodos((prevTodos) => {
      return [
        { text : text , key: Math.random().toString() },
        ...prevTodos
      ];
    });
  }
  else{
    Alert.alert('Oops!','Todos must be over 3 chars long',[
      { text:'Understood', onPress: () => console.log('alert closed') }
    ]);
  }



 
 }

  return (
    <View style={styles.container}>
    
    {/* Header */}
      <Header />
        <View style={styles.content}>
           {/* form */}
           <AddTodo submitHandler={ submitHandler } />
          
              <View style={styles.list}>
              <FlatList
                    data={todos}
                    renderItem = {({item}) => (
                     <TodoItem item={ item } pressHandler = {pressHandler} />
                    ) }
                  />

                  
              </View>
        </View>
        
     </View>
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop:20,
  }
  
 
});
