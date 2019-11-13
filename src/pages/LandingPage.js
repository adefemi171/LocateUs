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
//       'Comfortaa-SemiBold': Asset.fromModule(require('/assets/fonts/Comfortaa-SemiBold.ttf')).uri,
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
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    btn: {
        flex: 1,
        justifyContent: 'space-around',

    },
    textTopic:{
        margin: 30,
        color: 'blue',
        fontSize: 80,
        fontFamily: 'Roboto'

    },
    btnSignUpText: {
        margin: 20,
        fontSize: 25,
        fontWeight: '200',
        color: 'blue',
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    btnSignUp: {
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        borderColor: 'blue',
        borderWidth:0.5,
        width: 400
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