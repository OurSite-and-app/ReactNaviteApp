import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen'
import ListScreen from './src/ListScreen'
import ListElemEdit from './src/ListElemEdit'
import AddPartyScreen from './src/AddPartyScreen'

const Stack = createStackNavigator();

const stackNavigatorOptions = {
    headerShown: false
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ListElemEdit" component={ListElemEdit} />
        <Stack.Screen name="AddPartyScreen" component={AddPartyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}