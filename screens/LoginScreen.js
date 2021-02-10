import React,{Component} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class LoginScreen extends Component{

  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: ""
    };
  }
goTo=()=>{
this.props.navigation.navigate('Register')
}
goToDashboard=()=>{
  this.props.navigation.navigate('Dashboard')
}

userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("Dashboard");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };


  render(){
    return(
      <View>
       <TextInput
            style={styles.formTextInput}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={text => {
              this.setState({
                emailId: text
              });
            }}
          />
        <TextInput
            style={styles.formTextInput}
            secureTextEntry={true}
            placeholder="enter Password"
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />
          <View>
<TouchableOpacity
            style={[styles.registerButton, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>       
      <Text style={styles.registerButtonText}>  Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} 
        onPress={this.goTo}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "300",
    paddingBottom: 30,
    color: "#ff3d00",
    marginLeft:70
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  registerButton: {
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    marginLeft:90
  },
  registerButtonText: {
    color: "#ff5722",
    fontSize: 15,
    fontWeight: "bold"
  }
});