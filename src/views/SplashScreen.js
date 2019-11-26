import  React from 'react';
import LottieView from 'lottie-react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import { Image, Text, View } from 'react-native';

// export default class SplashScreen extends React.Component {
//     componentDidMount() {
//         this.animation.play(30, 60);

//     }
//     render() {
//         return (
//             // <View>
//             //     <ProgressBar
//             //         progress={0.5}
//             //         color={Colors.red800}
//             //         indeterminate={false}

//             //     />
//             // </View>

//             <LottieView
//                     ref={animation => {
//                         this.animation = animation;
//                     }}
//                     source={require('../../assets/world-locations.json')}
//                 />
//         );
//     }
// }

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../../assets/1055-world-locations.gif')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../../assets/icon.png')} />
        <Image source={require('../../assets/splash.png')} />
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('../../assets/1055-world-locations.gif');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('../../assets/icon.png'),
      require('../../assets/splash.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  };
}
