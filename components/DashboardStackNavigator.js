import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import {createStackNavigator }  from 'react-navigation-stack'
import DashboardScreen from '../screens/DashboardScreen'


export const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: DashboardScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  