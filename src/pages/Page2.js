import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

import Logo from'../component/Logo'
import Form2 from'../component/Form2'
export default class Page2 extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
			    <Logo/>
			    <Form2/>
          
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