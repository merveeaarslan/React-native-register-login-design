/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
  
} from 'react-native';
import Page1 from './src/pages/Page1';
export default class App extends Component<{}>{
  render(){
    return(
      
      <View style={styles.container}>
      
      <StatusBar
         backgroundColor="#1c313a"
         barStyle="light-content"
        />
       <Page1/>
      
       
      </View>
      
    );
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
 