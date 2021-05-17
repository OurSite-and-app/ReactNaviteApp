import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const ElemEditScreen = ({ route, navigation }) => {

  const [title, setTitle] = useState(route.params.title)
  const [theme, setTheme] = useState(route.params.theme)
  const [dresscode, setDresscode] = useState(route.params.dresscode)
  const [date, setDate] = useState(route.params.date)
  const [rules, setRules] = useState(route.params.rules)

  const pressSave = () => {

    // create json object for pushing on the server
    var data = {
      theme: theme,
      date_time: date,
      dress_code: dresscode,
      comments: rules
    }

    // save token
    var token = route.params.token;

    // PUT json object to the server
    fetch(`http://84.252.142.119:5000/ch_party/${route.params.id}`, {
      method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'x-access-token': token
      },
      body: JSON.stringify(data)
    })

    // change screen (goBack())
    navigation.navigate('ListScreen')
  }


  return(
      <View style = {styles.container}>
      <Text style = {styles.logo}>{route.params.title}</Text>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Theme..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(theme) => setTheme(theme)}
          value = {theme}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Date..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(date) => setDate(date)}
          value = {date}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "DressCode..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(dresscode) => setDresscode(dresscode)}
          value = {dresscode}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Rules..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(rules) => setRules(rules)}
          value = {rules}
          />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}></Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.saveBtn} onPress = { pressSave }>
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

