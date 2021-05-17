import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,
  SafeAreaView, ActivityIndicator, FlatList, Alert, } from 'react-native';

import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem } from 'react-native-elements';
//import { ListElem } from './ListElem'

const ListScreen = ({ route, navigation }) => {

  const addParty = () => {
    navigation.navigate('AddPartyScreen')
  }

  const url = 'http://84.252.142.119:5000/parties';

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const interval = setInterval(() => {

/*
      console.log(route.params.token)

      fetch("http://84.252.142.119:5000/party_by_user", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: route.params.token
      })
      .then((response) => response.text()) // получаем ответ от сервера
      .then((responseText) => { // responseText - ответ от сервера
        console.log(responseText) // responseText - либо ошибка, либо токен

        alert(responseText)
      })
      .catch((error) => {
        console.error(error);
      });
*/

      var token = JSON.parse(route.params.token).token;
      console.log(token)

      console.log('------------------------------')
      var header = {
        'x-access-token': token
      }

      console.log(header)


      fetch("http://84.252.142.119:5000/party_by_user", {
        method: 'GET',
        headers: {
                    'x-access-token': token
                 }
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json.party_list)
      })
      .catch((error) => {
        alert(error)
      })
      .finally(setLoading(false));


    }, 5000)

    // Subscribe for the focus Listener
    const unsubscribe = navigation.addListener('focus', () => {
      setData([])
    })

    return () => {
      clearTimeout(interval)
      unsubscribe
      
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
                          {title: item.title, theme: item.theme, rules: item.comments, date: item.date_time, dresscode: item.dress_code})
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
