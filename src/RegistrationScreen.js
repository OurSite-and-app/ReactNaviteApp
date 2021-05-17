import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  {useState} from 'react';

const RegistrationScreen = ({ navigation }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const pressSingUp = () => {

    var data = {
      name: username,
      password: password,
      email: email
    }

    console.log(data)

    fetch("http://84.252.142.119:5000/user", {
      method: "POST",
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    navigation.navigate('LoginScreen')
  }

    return(
        <View style = {styles.container}>
        <Text style = {styles.logo}>Party List</Text>
        <View style = {styles.inputView} >
          <TextInput  
            style = {styles.inputText}
            placeholder = "Username..." 
            placeholderTextColor = "#003f5c"
            onChangeText = {(username) => setUsername(username)}
            />
        </View>
        <View style = {styles.inputView} >
        <TextInput  
            style = {styles.inputText}
            placeholder = "Email..." 
            placeholderTextColor = "#003f5c"
            onChangeText = {(email) => setEmail(email)}
            />
        </View>
        <View style = {styles.inputView} >
          <TextInput  
            secureTextEntry
            style = {styles.inputText}
            placeholder = "Password..." 
            placeholderTextColor = "#003f5c"
            onChangeText = {(password) => setPassword(password)}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}></Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.loginBtn} onPress = { pressSingUp }>
          <Text style={styles.loginText}>Signup</Text>
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

export default RegistrationScreen