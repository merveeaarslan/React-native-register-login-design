import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

import Logo from'../component/Logo'
import Form1 from'../component/Form1'
export default class Page1 extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
			    <Logo/>
			    <Form1/>
          
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
  }
});