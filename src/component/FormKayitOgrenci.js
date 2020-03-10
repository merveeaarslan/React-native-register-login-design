import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
  
} from 'react-native';
export default class FormKayitOgrenci extends Component<{}>{
  constructor(props) {
        super(props);
       // this.inputRefs = {};
  this.state = {
            sehir: undefined,
            items: [
                {
                    label: 'Ankara',
                    value: 'ankara',
                },
                {
                    label: 'İstanbul',
                    value: 'istanbul',
                },
                {
                    label: 'Bursa',
                    value: 'bursa',
                },
            ],
            cinsiyet: undefined,
            items2: [
                {
                    label: 'Kadın',
                    value: 'kadın',
                },
                {
                    label: 'Erkek',
                    value: 'erkek',
                }
                
            ],
        };
    }
    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                sehir: 'istanbul',
            });
        }, 1000);

       
    }

  
	render(){
    
		return(
			<View style={styles.container}>
			    <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Ad Soyad"
          placeholderTextColor="#ffffff"/>

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Email"
          placeholderTextColor="#ffffff"/>

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Dogum Tarihi"
          placeholderTextColor="#ffffff"/>
          
           <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Sifre"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"/>
          
                <RNPickerSelect style={styles.pickerSelectStyles}
                    placeholder={{
                        label: 'Sehir ',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            sehir: value,
                        });
                    }}
                    
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    
                    useNativeAndroidPickerStyle={true} 
                    
                />

                <View style={{ paddingVertical: 5 }} />

          
                <RNPickerSelect style={styles.pickerSelectStyles}
                    placeholder={{
                        label: 'Cinsiyet ',
                        value: null,
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            cinsiyet: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    
                    useNativeAndroidPickerStyle={true} //android only
                />


          
			    
          <TouchableOpacity style={styles.button}
             //onPress metodu
          >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
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
    inputBox:{
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:"#ffffff",
      marginVertical:10

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
    },
    pickerSelectStyles: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        marginVertical:10,

        

    }

});