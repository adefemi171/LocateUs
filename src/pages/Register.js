// import React from 'react';
// import {
//   SafeAreaView,
//   TextInput,
//   Button,
//   ActivityIndicator,
//   Text,
//   View,
//   Switch,
// } from 'react-native';
// import { Formik } from 'formik';
// import * as yup from 'yup';

// const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
//   <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
//     <Text style={{ marginBottom: 3 }}>{label}</Text>
//     {children}
//     <Text style={{ color: 'red' }}>
//       {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
//     </Text>
//   </View>
// );

// const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
//   const inputStyles = {
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     marginBottom: 3,
//   };

//   if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
//     inputStyles.borderColor = 'red';
//   }

//   return (
//     <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
//       <TextInput
//         style={inputStyles}
//         onChangeText={formikProps.handleChange(formikKey)}
//         onBlur={formikProps.handleBlur(formikKey)}
//         {...rest}
//       />
//     </FieldWrapper>
//   );
// };

// const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
//   <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
//     <Switch
//       value={formikProps.values[formikKey]}
//       onValueChange={value => {
//         formikProps.setFieldValue(formikKey, value);
//       }}
//       {...rest}
//     />
//   </FieldWrapper>
// );

// const validationSchema = yup.object().shape({
//   fname: yup
//     .string()
//     .label('First Name'),
//   lname: yup
//     .string()
//     .label('Last Name'),
//   email: yup
//     .string()
//     .label('Email')
//     .email()
//     .required(),
//   password: yup
//     .string()
//     .label('Password')
//     .required()
//     .min(2, 'Seems a bit short...')
//     .max(10, 'We prefer insecure system, try a shorter password.'),
//   confirmPassword: yup
//     .string()
//     .required()
//     .label('Confirm password')
//     .test('passwords-match', 'Passwords must match ya fool', function(value) {
//       return this.parent.password === value;
//     }),
//   agreeToTerms: yup
//     .boolean()
//     .label('Terms')
//     .test(
//       'is-true',
//       'Must agree to terms to continue',
//       value => value === true
//     ),
// });

// const signUp = ({ email }) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email === 'a@a.com') {
//         reject(new Error("You playin' with that fake email address."));
//       }
//       resolve(true);
//     }, 1000);
//   });

// export default () => (
//   <SafeAreaView style={{ marginTop: 90 }}>
//     <Formik
//       initialValues={{
//         fname: '',
//         lname: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         agreeToTerms: false,
//       }}
//       onSubmit={(values, actions) => {
//         signUp({ email: values.email })
//           .then(() => {
//             alert(JSON.stringify(values));
//           })
//           .catch(error => {
//             actions.setFieldError('general', error.message);
//           })
//           .finally(() => {
//             actions.setSubmitting(false);
//           });
//       }}
//       validationSchema={validationSchema}
//     >
//       {formikProps => (
//         <React.Fragment>
//         <StyledInput
//             label="First Name"
//             formikProps={formikProps}
//             formikKey="fname"
//             placeholder="First Name"
//             autoFocus
//           />

//           <StyledInput
//             label="Last Name"
//             formikProps={formikProps}
//             formikKey="lname"
//             placeholder="Last Name"
//             autoFocus
//           />

//           <StyledInput
//             label="Email"
//             formikProps={formikProps}
//             formikKey="email"
//             placeholder="johndoe@example.com"
//             autoFocus
//           />

//           <StyledInput
//             label="Password"
//             formikProps={formikProps}
//             formikKey="password"
//             placeholder="password"
//             secureTextEntry
//           />

//           <StyledInput
//             label="Confirm Password"
//             formikProps={formikProps}
//             formikKey="confirmPassword"
//             placeholder="confirm password"
//             secureTextEntry
//           />

//           <StyledSwitch
//             label="Agree to Terms"
//             formikKey="agreeToTerms"
//             formikProps={formikProps}
//           />

//           {formikProps.isSubmitting ? (
//             <ActivityIndicator />
//           ) : (
//             <React.Fragment>
//               <Button title="Sign In" onPress={formikProps.handleSubmit} />
//               <Text style={{ color: 'red' }}>{formikProps.errors.general}</Text>
//             </React.Fragment>
//           )}
//         </React.Fragment>
//       )}
//     </Formik>
//   </SafeAreaView>
// );


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);
    // to store our input refs
    this.inputs = {};
    this.state = { email: "", password: "", error: "", confirmPassword: "" };

    const { password, confirmPassword } = this.state;
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }
  componentDidMount() {}
  static navigationOptions = {};

  onEnterText = email => {
    if (email.trim() != 0) {
      this.setState({ email: email, ErrorStatus: true });
    } else {
      this.setState({ email: email, ErrorStatus: false });
    }
  };

  onButtonPress = () => {
    const { email } = this.state;
    if (email == "") {
      Alert.alert("Please enter the text to proceed");
    } else {
      this.setState({ loading: false });
      const { email, password } = this.state;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: email,
              displaypassword: password
            })
            .then(() => {
              // Alert.alert(response.user.uid);
              // firebase.database().ref('fir-login-67a47/' +
              firebase
                .auth()
                .currentUser.uid()
                .set(firebase.auth().currentUser);

              firebase
                .database()
                .ref("sevenup-a1db1//" + firebase.auth().currentUser.uid)
                .set({
                  email,
                  password
                })
                .then(data => {
                  //success callback
                  // console.log('data ' , data)
                });
              // .catch((error)=>{
              //     //error callback
              //     console.log('error ' , error)
              // })

              firebase
                .database()
                .ref("sevenup-a1db1/" + firebase.auth().currentUser.uid)
                .on("value", function(snapshot) {
                  // console.log(snapshot.val())
                });
              firebase
                .database()
                .ref("sevenup-a1db1/" + firebase.auth().currentUser.uid)
                .update({
                  email,
                  password
                });
            })
            .then(() => {
              this.props.navigation.navigate("welcome");
            })
            .catch(error => {
              // let errorCode = error.code
              // let errorMessage = error.message;
              // if (errorCode == 'auth/weak-password') {
              //   this.onLoginFailure.bind(this)('Weak password!')
              // } else {
              //   this.onLoginFailure.bind(this)(errorMessage)
              // }
            });
          // console.log(onLoginSuccess.uid)

          //
          console.log(firebase.auth().createUserWithEmailAndPassword.uid);
        });
    }
  };

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false,
      confirmpassword: "",
      username: ""
    });
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={"small"} />
          {/* {this.onButtonPress.bind(this)} */}

          {/* loading={this.onButtonPress.bind(this)}  */}
        </View>
      );
    } else {
      return (
        <Button
          style={styles.loginButton}
          title="Sign in"
          //   onPress = {this.handleSubmit}

          onPress={this.onButtonPress.bind(this)}
        />
      );
    }
  }
  render() {
    return <View>{this.renderComponent()}</View>;
  }
  renderComponent() {
    if (this.state.loggedIn) {
      return (
        <Button
          title="Sign out"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
          title="LoginScreen"
        />
      );
    } else {
      return <LoginForm />;
    }
  }
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderRadius: 5,
            multiline: "true",
            borderColor: "purple",
            borderWidth: 2
          }}
          label="username"
          placeholder="username"
          // onChange1={this.handleChange}

          value={this.state.username}
          secureTextEntry={false}
          onChangeText={username => this.setState({ username })}
          onSubmitEditing={() => {
            this.focusNextField("user@mail.com");
          }}
          returnKeyType={"next"}
          ref={input => {
            this.inputs["username"] = input;
          }}
        />

        <TextInput
          style={{
            height: 40,
            width: 250,
            borderRadius: 5,
            multiline: "true",
            borderColor: "purple",
            borderWidth: 2,
            marginTop: 30
          }}
          label="Email"
          placeholder="user@mail.com"
          onSubmitEditing={() => {
            this.focusNextField("password");
          }}
          returnKeyType={"next"}
          ref={input => {
            this.inputs["user@mail.com"] = input;
          }}
          value={this.state.email}
          secureTextEntry={false}
          onChangeText={email => this.onEnterText(email)}
        />

        <TextInput
          style={{
            height: 40,
            width: 250,
            borderRadius: 5,
            multiline: "true",
            borderColor: "purple",
            borderWidth: 2,
            marginTop: 30
          }}
          label="Password"
          placeholder="password"
          value={this.state.password}
          onSubmitEditing={() => {
            this.focusNextField("confirmpassword");
          }}
          returnKeyType={"next"}
          ref={input => {
            this.inputs["password"] = input;
          }}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderRadius: 5,
            multiline: "true",
            borderColor: "purple",
            borderWidth: 2,
            marginTop: 30
          }}
          label="confirmpassword"
          placeholder="confirmpassword"
          value={this.state.confirmpassword}
          ref={input => {
            this.inputs["confirmpassword"] = input;
          }}
          secureTextEntry={false}
          onChangeText={confirmpassword => this.setState({ confirmpassword })}
        />

        <TouchableOpacity
          style={{
            justifyContent: "flex-end",
            alignSelf: "flex-end",
            alignItems: "flex-end",
            marginRight: 60,
            marginTop: 20
          }}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
          title="LoginScreen"
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>{this.renderButton()}</View>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: "center",
    color: "red"
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    marginTop: 30
  }
};