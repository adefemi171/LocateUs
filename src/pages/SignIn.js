import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from '../config/Auth';



export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            error:'',
            loading: false
        };
        this.loginUser =  this.loginUser.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    //loginUser Function

    loginUser() {
            const { email, password} = this.state;

            this.setState({ error: '', loading: true });

        axios.post("159.203.70.113:3300/login",{
                email: email,
                password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            this.onLoginFail();
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Login Failed',
            loading: false
        });
    }

    render() {
        const {error} = this.state;
        return(
            <View style={styles.container}>
            <Text style={styles.heading}>
                    Sign In
                </Text>
            <Text style={styles.errorTextStyle}>
                {error}
            </Text>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="user@email.com"
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
                <Text style={styles.buttonText} onPress={this.loginUser}>SIGN IN</Text>
                </TouchableOpacity>

                <Text style={styles.signupText}>Forgot Password?</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}><Text style={styles.signupButton}>New User? Create account</Text></TouchableOpacity>
            </View>
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
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
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