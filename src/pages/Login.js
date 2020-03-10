import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
   TouchableOpacity
  
} from 'react-native';

import Logo from'../component/Logo'
import FormLogin from'../component/FormLogin'
export default class Login extends Component<{}>{
	render(){
		return(
      
			<View style={styles.container}>
			    <Logo/>
			    <FormLogin/>
          <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Hesabınız yok mu?</Text>
          
          <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
          
         
          </View>
			 </View>

			)
	}
}

const styles = StyleSheet.create({
   container :{
      backgroundColor:"#455A64",
      flex:1,
      alignItems:"center",
      justifyContent:"center"

  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row'

  },
  signupText:{
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
  signupButton:{
    color:'#1c313a',
    fontSize:16,
    fontWeight:'500',
    borderRadius:25,
  }
});