import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,
  SafeAreaView, ActivityIndicator, FlatList, Alert, } from 'react-native';

import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem } from 'react-native-elements';

const ListScreen = ({ route, navigation }) => {

  const addParty = () => {
    navigation.navigate('AddPartyScreen', {token: JSON.parse(route.params.token).token})
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // this function is called first
  useEffect(() => {
    
    // interval of list update
    const interval = setInterval(() => {
      
      // save token
      var token = JSON.parse(route.params.token).token;

      // get the list from the server
      fetch("http://84.252.142.119:5000/party_by_user", {
        method: 'GET',
        headers: {
                    'x-access-token': token
                 }
      })
      .then((response) => response.json()) // after gettin date save it to json
      .then((json) => {                    // work with json object ({[JSON]}) to create list
        //console.log(json)
        setData(json.party_list)           // global `data` set to `JSON` object from {[JSON]}
      })
      .catch((error) => {                 // if error
        alert(error)                      // alert to device screen (notification)
        console.log(error)                // print to console
      })
      .finally(setLoading(false));        // turn off loading animation and print list
    }, 100) // 100 ms cicle

    // Subscribe for the focus Listener
    const unsubscribe = navigation.addListener('focus', () => { // clean list for next iteration of cicle (every 100 ms)
      setData([])
    })

    return () => {
      clearTimeout(interval) // call func 'clearTimeout'
      unsubscribe            // call func 'unsubscribe()'
    }
    
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
        ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            
            <View style={stylesList.container}>
              <TouchableOpacity
                style={stylesList.elem}
                onPress={() => navigation.navigate("ElemEditScreen", 
                          {token: JSON.parse(route.params.token).token, 
                           title: item.title, theme: item.theme, 
                           rules: item.comments, date: item.date_time, 
                           dresscode: item.dress_code, id: item.id})
                        }
              >
                <View style={stylesList.view}>
                  <Text style={stylesList.textTitle}> {item.title} </Text>
                  <Text style={stylesList.text}> {item.comments} </Text>
                </View>

                <View>
                  <Text style={stylesList.text}> {item.date_time} </Text>
                </View>
              </TouchableOpacity>
            </View>
          
          )}
        />
      
      )}

      <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:70,
            position: 'absolute',                                          
            bottom: 10,                                                    
            right: 10,
            height:70,
            backgroundColor:'#fb5b5a',
            borderRadius:100,
          }}
          onPress = { addParty }
      >
        <Icon name="add"  size={30} color="black" />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1131',
  },
});

const stylesList = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  elem: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textTitle: {
    color: 'black',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    alignItems: 'center',
  },
});

export default ListScreen
