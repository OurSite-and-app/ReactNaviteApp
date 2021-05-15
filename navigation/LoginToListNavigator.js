import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import LoginScreen from '../src/LoginScreen'
import ListScreen from '../src/ListScreen'

const stackNavigatorOptions = {
    headerShown:false
}

const LoginToListNavigator = createStackNavigator (
  {
    LoginScreen: {
      screen: LoginScreen
    }, 
    ListScreen: {
      screen: ListScreen
    }
  },
  {
    defaultNavigationOptions : stackNavigatorOptions
  }
)

export default createAppContainer(LoginToListNavigator)