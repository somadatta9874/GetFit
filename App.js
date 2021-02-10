import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
  
import {  
    createSwitchNavigator,  
    createAppContainer
} from 'react-navigation'; 

// You can import from local files
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
export default class App extends React.Component {
  render(){
  return <AppContainer/>
    
}
}
const AppSwitchNavigator = createSwitchNavigator({
   Login:LoginScreen,
   Register:RegistrationScreen,
    Dashboard: AppDrawerNavigator ,  
    Welcome: WelcomeScreen 
  
});

const AppContainer=createAppContainer(AppSwitchNavigator);