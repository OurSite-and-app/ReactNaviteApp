import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, FlatList, Alert } from 'react-native'
import { ListItem } from "react-native-elements"
//import { ListElem } from './ListElem'

const ListScreen = ({ navigation }) => {

  const url = "https://neon-fiber-309214.ew.r.appspot.com/parties"

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.parties))
      .catch((error) => alert(error))
      .finally(setLoading(false));
  }, []);

  return(
        <SafeAreaView style = { styles.container }> 
      {
        isLoading ? 
        
        <ActivityIndicator/> 
        : 
        <FlatList
          data = { data }
          keyExtractor = { ({ id }, index) => id }
          renderItem = { ({ item }) => (

            <View style = {stylesList.container}>
              <TouchableOpacity style = {stylesList.elem}>
                <View style={stylesList.view}>
                  <Text style={stylesList.textTitle}> { item.title } </Text>
                  <Text style={stylesList.text}> {item.comments} </Text>
                </View>
                
                <View>
                  <Text style={stylesList.text}> {item.date_time} </Text>
                </View>
              </TouchableOpacity>
            </View>

          )}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1131',
  }
});

const stylesList = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    elem: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    textTitle: {
        color: "black",
        alignItems: "center",
        fontWeight: "bold"
    },
    text: {
        color: "black",
        alignItems: "center",
    }
})

export default ListScreen