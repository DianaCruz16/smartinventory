import React from "react";
import { ImageBackground } from 'react-native';
import HomePageWallpaper from './img/bg1.png';
import { Text, Image, View, Alert, Button, TouchableOpacity,} from 'react-native';
import styles from './style';
import 'react-native-gesture-handler';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Login from './login';
  
  class Welcome extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground source={HomePageWallpaper} style={{width: '100%', height: '100%'}}>
            <View style={styles.centerView}>
            <Image source={require('./img/smartposlogo.png')} style={{width: '80%'}} resizeMode="contain"/>
              <TouchableOpacity style={styles.button} onPress={() => {
                  this.props.navigation.dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({ routeName: 'Login' })],}))}} >
                    <Text style={styles.buttonText}> Iniciar </Text>        
              </TouchableOpacity>
            </View>
            <View style={styles.bottom }>
              <Image source={require('./img/powered.png')} style={{width: '50%'}} resizeMode="contain"/>
            </View>  
        </ImageBackground>
      </View>
      );
    }  
  }

  const AppNavigator = createStackNavigator({
    Welcome: {
      screen: Welcome,
    },
    Login: {
      screen: Login,
    },
  },);
  
  export default createAppContainer(AppNavigator);



