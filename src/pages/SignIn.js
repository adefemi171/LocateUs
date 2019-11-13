import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard  } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';


export default class SignIn extends Component {
    _onPress(){
        alert('You tapped the button')
    }
//     componentDidMount() {
//     Font.loadAsync({
//       'Comfortaa-SemiBold': Asset.fromModule(require('/assets/fonts/Comfortaa-SemiBold.ttf')).uri,
//     });
//   }

     constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        };
    }
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this._onPress}>SIGN IN</Text>
                </TouchableOpacity>

                <Text style={styles.signupText}>Forgor Password?</Text>

                <TouchableOpacity onPress={this._onPress}><Text style={styles.signupButton}>New User? Create account</Text></TouchableOpacity>
            </View>

            //  <Header>
            //         placement="left"
            //         centerComponent={{text: 'LocateUs', style: {color: 'blue'}}}
            //    />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#12799f', 
      fontSize:16,
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500',
    },
    btnSignInText: {
        margin: 20,
        fontSize: 25,
        fontWeight: '200',
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    btnSignIn: {
        backgroundColor: "grey",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        width: 400
    }
});