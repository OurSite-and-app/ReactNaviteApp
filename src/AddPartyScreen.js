import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  {useState} from 'react';

const AddPartyScreen = ({ navigation }) => {

  const [text, setText] = useState('')
  const loginHandle = (value) => {
    console.log("val is ", value);
    setText(value)
  }

  const pressLogin = () => {
    setText(' ');
    navigation.navigate('ListScreen')
  }

  const pressSingUp = () => {
    
  }

    return(
        <View style = {styles.container}>
        <Text style = {styles.logo}>Add Party</Text>
        <View style = {styles.inputView} >
          <TextInput  
            style = {styles.inputText}
            placeholder = "Title..." 
            placeholderTextColor = "#003f5c"
            onChangeText = {loginHandle}
            value = {text}
            />
        </View>
        <View style = {styles.inputView} >
          <TextInput
            style = {styles.inputText}
            placeholder = "Theme..." 
            placeholderTextColor = "#003f5c"
            />
        </View>
        <View style = {styles.inputView} >
          <TextInput
            style = {styles.inputText}
            placeholder = "Date..." 
            placeholderTextColor = "#003f5c"
            />
        </View>
        <View style = {styles.inputView} >
          <TextInput
            style = {styles.inputText}
            placeholder = "DressCode..." 
            placeholderTextColor = "#003f5c"
            />
        </View>
        <View style = {styles.inputView} >
          <TextInput
            style = {styles.inputText}
            placeholder = "Rules..." 
            placeholderTextColor = "#003f5c"
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}></Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.loginBtn} onPress = { pressLogin }>
          <Text style={styles.loginText}>SAVE</Text>
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
    loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
    loginText: {
      color: "white"
    }
  });

export default AddPartyScreen