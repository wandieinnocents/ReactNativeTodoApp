import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, FlatList, Alert ,TouchableWithoutFeedback, Keyboard} from "react-native";
import { YellowBox } from "react-native-web";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";

export default function App() {
  // data
  const [todos, setTodos] = useState([
    { text: "Buy  Coffee", key: "1" },
    { text: "Create an App", key: "2" },
    { text: "Play on Switch", key: "3" },
  ]);

  // function for pressing list
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    //  validation
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };



  return (

   
   
    //  <Sandbox />
    
     
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("Keyboard dismissed");
    }}>
    <View style={styles.container}>
       
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  
    
    
    
  },
  content: {
    
    flex:1,
    padding: 40,
  },
  list: {
    flex:1,
    marginTop: 20,
  },



});
