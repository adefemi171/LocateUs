import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard  } from 'react-native';
// import * as Font from 'expo-font';
// import { Asset } from 'expo-asset';
import axios from '../config/Auth';




export default class SignIn extends Component {
//     componentDidMount() {
//     Font.loadAsync({
//       'Comfortaa-SemiBold': Asset.fromModule(require('/assets/fonts/Comfortaa-SemiBold.ttf')).uri,
//     });
//   }

     constructor(props){
        super(props);
        this.state={
            fName:'',
            lName:'',
            email:'',
            password: '',
            password_confirmation:'',
            error:'',
            loading:false
        };
        this.registerUser = this.registerUser.bind(this);
        this.onRegistrationFail = this.onRegistrationFail.bind(this);
    }


    registerUser(){
        const { fName, lName, email, password, password_confirmation} = this.state;
        this.setState({error:'', loading:true});
        axios.post("159.203.70.113:3300/signup",{
            user: {
                fName: fName,
                lName: lName,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },)
        .then((response) => {
                console.log(response);
        })
        .catch((error) =>{
            console.log(error);
            this.onRegistrationFail();
        });
    }

    //A function that sets error state to registration failed and loading to false
    onRegistrationFail(){
        this.setState({
            error: 'Registration failed',
            loading: false
        });
    }


    //--------------------
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.errorTextStyle}>
                    {error}
                </Text>
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
                    onChangeText={password => this.setState({ password })}
                />
                 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    keyboardType="visible-password"
                    onChangeText={password_confirmation => this.setState({ password_confirmation })}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.registerUser}>SIGN UP</Text>
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
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
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