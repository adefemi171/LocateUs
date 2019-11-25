import  React from 'react';
import LottieView from 'lottie-react-native';
import { Header, View } from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';


export default class SplashScreen extends React.Component {
    componentDidMount() {
        this.animation.play(30, 60);

    }
    render() {
        return (
            // <View>
            //     <ProgressBar
            //         progress={0.5}
            //         color={Colors.red800}
            //         indeterminate={false}

            //     />
            // </View>

            <LottieView
                    ref={animation => {
                        this.animation = animation;
                    }}
                    source={require('../../assets/world-locations.json')}
                />
        );
    }
}


