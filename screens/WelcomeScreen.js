import React,{Component} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import CalendarPicker from 'react-native-calendar-picker';
import Dropdown from 'react-dropdown';
export default class WelcomeScreen extends Component { 
constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      showMessage: false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
calDetect=()=>{
  this.setState({ showMessage: !this.state.showMessage })
}
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
    static navigationOptions = {  
         title: 'Welcome',  
    };  
    render() { 
       const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const options = [
      'Strength Training', 'Running', 'Cycling'
    ];
    const defaultOption = options[0];
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>WelcomeScreen</Text> 
                <TextInput style={{borderColor:"black", borderWidth:5}} placeholder="Enter time"/> 
                <Dropdown style={{borderColor:"black", borderWidth:5}} options={options} onChange={this._onSelect}  placeholder="Workouts"/>
    <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}/>
      </View>
      <TouchableOpacity onPress ={this.calDetect}><Text>Submit</Text></TouchableOpacity>
      <Text>{this.state.showMessage && <p>Calories burnt : 270 </p>}</Text>
        
                
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  }})