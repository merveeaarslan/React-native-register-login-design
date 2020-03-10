import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

import Logo from'../component/Logo'
import FormKayitOgretmen from'../component/FormKayitOgretmen'
export default class PageKayitOgretmen extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
			    <Logo/>
			    <FormKayitOgretmen/>
          
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