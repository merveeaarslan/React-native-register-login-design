import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
  
} from 'react-native';

export default class Form2 extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
          <TouchableOpacity style={styles.button} 
             //onPress metodu
          >
          <Text style={styles.buttonText}>Ders Al</Text>

          </TouchableOpacity>

			    
          <TouchableOpacity style={styles.button}
            //onPress metodu
          >
          <Text style={styles.buttonText}>Ders Ver</Text>
          </TouchableOpacity>
	   </View>
			)
	}
}

const styles = StyleSheet.create({
  container :{
    backgroundColor:"#455A64",
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
    },
    button:{
      width:300,
      backgroundColor:'#1c313a',
      borderRadius:25,
      marginVertical:10,
      paddingVertical:12

    },
    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
});