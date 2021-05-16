import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen'
import ListScreen from './src/ListScreen'
import ElemEditScreen from './src/ElemEditScreen'
import AddPartyScreen from './src/AddPartyScreen'
import RegistrationScreen from './src/RegistrationScreen'

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
        <Stack.Screen name="ElemEditScreen" component={ElemEditScreen} />
        <Stack.Screen name="AddPartyScreen" component={AddPartyScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}