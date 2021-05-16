import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ElemEditScreen = ({ route, navigation }) => {

/*
  const [title, setTitle] = useState('')
  const [theme, setTheme] = useState('')
  const [dresscode, setDresscode] = useState('')
  const [date, setDate] = useState('')
  const [rules, setRules] = useState('')
  
  const loginHandle = (value) => {
    console.log("val is ", value);
    //setText(value)
  }

  const pressSave = () => {

  var data = {
    "comments": {rules},
    "date_time": {date},
    "dress_code": {dresscode},
    "theme": {theme},
    "title": {title}
  }

  fetch("https://neon-fiber-309214.ew.r.appspot.com/add_party", {
    method: "POST",
    body:  JSON.stringify(data)
  })

  navigation.navigate('ListScreen')
  }
*/

  return(
      <View style = {styles.container}>
      <Text style = {styles.logo}>Edit Party</Text>
      <View style = {styles.inputView} >
        <TextInput  
          style = {styles.inputText}
          placeholder = "Title..." 
          placeholderTextColor = "#003f5c"
          //onChangeText = {(title) => setTitle(title)}
          value = {route.params.title}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Theme..." 
          placeholderTextColor = "#003f5c"
          //onChangeText = {(theme) => setTheme(theme)}
          value = {route.params.theme}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Date..." 
          placeholderTextColor = "#003f5c"
          //onChangeText = {(date) => setDate(date)}
          value = {route.params.date}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "DressCode..." 
          placeholderTextColor = "#003f5c"
          //onChangeText = {(dresscode) => setDate(dresscode)}
          value = {route.params.dresscode}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Rules..." 
          placeholderTextColor = "#003f5c"
          //onChangeText = {(rules) => setRules(rules)}
          value = {route.params.rules}
          />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}></Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.saveBtn} /*onPress = { pressSave }*/>
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0e1131',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#fb5b5a",
      marginBottom: 40
    },
    inputView: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    inputText: {
      height: 50,
      color: "white"
    },
    forgot: {
      color: "white",
      fontSize: 11
    },
    saveBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
    saveText: {
      color: "white"
    }
  });

export default ElemEditScreen

/*
const ElemEditScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
     <Text>{route.params.text}</Text>

      <Button
        title="Go to Blog"
        onPress={() => navigation.navigate('ListScreen')}
      />
    </View>
  ); 
}

export default ElemEditScreen

*/
