import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  {useState} from 'react';
import axios from 'axios'

const AddPartyScreen = ({ route, navigation }) => {

  const [title, setTitle] = useState('')
  const [theme, setTheme] = useState('')
  const [dresscode, setDresscode] = useState('')
  const [date, setDate] = useState('')
  const [rules, setRules] = useState('')
  
  // button function
  const pressSave = () => {

    // json object for sending on the server
    var data = {
      title: title,
      theme: theme,
      dress_code: dresscode,
      date_time: date,
      comments: rules
    }

    // save token
    var token = route.params.token;

    // sending json object to the server
    fetch("http://84.252.142.119:5000/add_new_party", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          'x-access-token': token
      },
      body: JSON.stringify(data)
    })

    // go to the last page
    navigation.navigate('ListScreen')
  }

  return(
      <View style = {styles.container}>
      <Text style = {styles.logo}>Add Party</Text>
      <View style = {styles.inputView} >
        <TextInput  
          style = {styles.inputText}
          placeholder = "Title..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(title) => setTitle(title)}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Theme..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(theme) => setTheme(theme)}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Date..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(date) => setDate(date)}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "DressCode..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(dresscode) => setRules(dresscode)}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Rules..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(rules) => setRules(rules)}
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

export default AddPartyScreen