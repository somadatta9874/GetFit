import React, { Component } from 'react';  
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DashboardStackNavigator} from './DashboardStackNavigator'
import {WelcomeStackNavigator} from './WelcomeStackNavigator'


export const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard :{
      screen : DashboardStackNavigator},
Welcome: {  
        screen: WelcomeStackNavigator  
    }
})  
  