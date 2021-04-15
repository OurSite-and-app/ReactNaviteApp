import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import { LoginScreen } from './src/LoginScreen'
import { ListScreen } from './src/ListScreen'
import { ListElemEdit } from './src/ListElemEdit'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="ListElemEdit" component={ListElemEdit} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}