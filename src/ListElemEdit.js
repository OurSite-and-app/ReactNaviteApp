import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ListElemEdit = ({ route, navigation }) => {
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

export default ListElemEdit