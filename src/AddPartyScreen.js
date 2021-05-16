import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  {useState} from 'react';
import axios from 'axios'

const AddPartyScreen = ({ navigation }) => {

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
      title: title,
      theme: theme,
      dress_code: dresscode,
      date_time: date,
      comments: rules
    }

    console.log(data)

    fetch("http://84.252.142.119:5000/add_party", {
      method: "POST",
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  
    navigation.navigate('ListScreen')
  }

/*
  const func12 = () => {
    fetch("http:/example.com", {method: "POST",
  body: JSON.stringify(
    {
      uname: uname,
      password: password      
    }
  )
})
.then((response) => response.text())
.then((responseData) => {
  AlertIOS.alert(
      "POST Response",
      "Response Body -> " + responseData
  )
}).done();
       this.props.navigation.navigate("Home")
   };
*/

  return(
      <View style = {styles.container}>
      <Text style = {styles.logo}>Add Party</Text>
      <View style = {styles.inputView} >
        <TextInput  
          style = {styles.inputText}
          placeholder = "Title..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(title) => setTitle(title)}
          //value = {title}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Theme..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(theme) => setTheme(theme)}
          //value = {theme}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Date..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(date) => setDate(date)}
          //value = {date}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "DressCode..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(dresscode) => setRules(dresscode)}
          //value = {dresscode}
          />
      </View>
      <View style = {styles.inputView} >
        <TextInput
          style = {styles.inputText}
          placeholder = "Rules..." 
          placeholderTextColor = "#003f5c"
          onChangeText = {(rules) => setRules(rules)}
          //value = {rules}
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