import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
  
} from 'react-native';
export default class Logo extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
			<Image style={{width:40,height:70}}
			    source={require('../images/favicon4.png')}/>
			    <Text style={styles.logotext}>Öğretmenim Yanımda</Text>
	        </View>
			)
	}
}
const styles = StyleSheet.create({
  container :{
       backgroundColor:"#455A64",
       flexGrow:1,
       justifyContent:'flex-end',
       alignItems:'center'
    },
    logotext:{
    	color:'#1c313a',
    	marginVertical:15,
    	fontSize:18,
    	//color:'rgba(255,255,255,0.7)'
    }
});