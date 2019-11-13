import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import SplashScreen from '../views/SplashScreen.js';
import LandingPage from '../pages/LandingPage';
const RootStack = createStackNavigator({
    // SplashScreen:{
    //     screen: SplashScreen,
    // },
    LandingPage:{
        screen: LandingPage,
    }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;