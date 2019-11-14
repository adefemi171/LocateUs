import React, { Component } from 'react';
import {StyleSheet, Button, View, Header, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';


export default class Landingpage extends Component {
    _onPress(){
        alert('You tapped the button')
    }
//     componentDidMount() {
//     Font.loadAsync({
//       'comfortaa-semi-bold': require('../../assets/fonts/Comfortaa-Bold.ttf'),

//     });
//   }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textTopic}>
                    LocateUs
                </Text>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnSignUp}
                        onPress={this._onPress}
                    >
                        <Text style={styles.btnSignUpText}>SIGN UP</Text>
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.btnSignIn}
                        onPress={this._onPress}
                    >
                        <Text style={styles.btnSignInText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    btn: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        marginVertical: 10

    },
    textTopic:{
        color: 'steelblue',
        fontSize: 80,
        fontFamily: 'Roboto',
        marginTop: 50

    },
    btnSignUpText: {
        margin: 15,
        fontSize: 25,
        fontWeight: '200',
        color: 'steelblue',
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    btnSignUp: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: 'steelblue',
        borderWidth:0.5,
        width: 400
    },
     btnSignInText: {
        margin: 15,
        fontSize: 25,
        fontWeight: '200',
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    btnSignIn: {
        backgroundColor: "steelblue",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        width: 400,
        marginTop: 5
    }
});