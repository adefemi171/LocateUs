import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import SplashScreen from '../views/SplashScreen.js';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
const RootStack = createStackNavigator({
    // SplashScreen:{
    //     screen: SplashScreen,
    // },
    LandingPage:{
        screen: LandingPage,
    },
    SignIn:{
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    },
    // {
    //     initialRouteName: 'SplashScreen',
    // }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;