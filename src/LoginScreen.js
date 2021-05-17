import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  {useState} from 'react';

const LoginScreen = ({ navigation }) => {

  // global vars' and funcs' (username - var, setUsername - func)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Login Button Func
  const pressLogin = () => {
    
    // create JSON object
    var data = {
      name: username,
      password: password
    }

    // POST date
    fetch("http://84.252.142.119:5000/login", {
      method: "POST",
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.text()) // получаем ответ от сервера
    .then((responseText) => { // responseText - ответ от сервера
      console.log(responseText) // responseText - либо ошибка, либо токен

      //setUsername("")
      //setPassword('')

      if(responseText == 'No username or password provided')
      {
        alert(responseText)
      }
      else
      {
        navigation.navigate('ListScreen', {token: responseText})
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const pressSingUp = () => {
    navigation.navigate('RegistrationScreen')
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
            secureTextEntry
            style = {styles.inputText}
            placeholder = "Password..." 
            placeholderTextColor = "#003f5c"
            onChangeText = {(password) => setPassword(password)}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.loginBtn} onPress = { pressLogin }>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = { pressSingUp }>
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

export default LoginScreen