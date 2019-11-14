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
                    Register
                </Text>
                <View style={{flexDirection:"row"}}>
                    <TextInput style={styles.fName}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="First Name"
                        placeholderTextColor = "#002f6c"
                        selectionColor="#fff"
                        keyboardType="email-address"
                    />

                    <TextInput style={styles.lName}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Last Name"
                        secureTextEntry={true}
                        placeholderTextColor = "#002f6c"
                    />
                </View>

                <TextInput style={styles.inputBox}
                    onChangeText={(email) => this.setState({email})}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}
                />

                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    keyboardType="visible-password"
                />
                 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    keyboardType="visible-password"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this._onPress}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>
                    By signing up, you agree to our Terms of Service and Privacy Policy
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'white',

    },
    heading: {
        position: "absolute",
        top: 10,
        left: 20,
        fontSize: 80,
        fontWeight: "800",
    },
    fName: {
        justifyContent: 'flex-start',
        flex: 1,
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
        width: 343
    },
    lName: {
        justifyContent: 'flex-end',
        flex: 1,
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
        width: 343
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
        width: 400,
        alignSelf:'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    footer: {
        fontSize: 20,
        fontWeight: "300",
        color: 'steelblue'
    },

});