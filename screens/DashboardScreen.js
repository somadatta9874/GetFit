import React,{Component} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native'
import firebase from 'firebase'
import db from '../config'
//import MyHeader from '../components/MyHeader'
import { Card } from 'react-native-elements';
export default class DashboardScreen extends Component {  
  
    static navigationOptions = {  
         title: 'Dashboard',  
    };  
  
    render() {  
        return (  
            <View style={{  alignItems: 'center', justifyContent: 'center' }}>  
            
            <Card title="Local Modules"  >
          {/*react-native-elements Card*/}
          <Text>
            React Native Card View for Android and IOS using
            "react-native-elements"
          </Text>
         
        </Card>
    
     
        <View style={{  alignItems: 'center', justifyContent: 'center' }}>  
            <Card title="Local Modules">
          {/*react-native-elements Card*/}
          <Text>
            React Native Card View for Android and IOS using
            "react-native-elements"
          </Text>
        </Card>
        </View>
                <Text>DashboardScreen</Text>  
                
            </View>  
        );  
    }  
}  