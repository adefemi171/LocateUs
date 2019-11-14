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
            <Text style={styles.heading}>
                    Sign In
                </Text>
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

                <Text style={styles.signupText}>Forgot Password?</Text>

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
    heading:{
        position: "absolute",
        top: 10,
        left: 20,
        fontSize: 80,
        fontWeight: "800",
    },
    inputBox: {
        borderBottomColor: 'steelblue',
        borderBottomWidth: 1,
        flexDirection: "row",
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 8,
        borderRadius: 3,
        borderColor: "#f9f9f9",
        borderWidth: 2,
        padding: 16,
        width: 500,
        alignItems: 'stretch',
        height: 100
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 12,
        borderWidth:0.5,
        width: 400
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    // signupTextCont: {
    //   flexGrow: 1,
    //   justifyContent: 'center',
    //   alignItems: 'flex-end',
    //   paddingVertical: 16,
    //   flexDirection: 'row',
    // },
    signupText: {
      color: '#12799f',
      fontSize:16,
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500',
    }
});