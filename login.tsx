import React from "react";
import {Text, TextInput,  Image, View, TouchableOpacity,} from 'react-native';
import { ImageBackground } from 'react-native';
import HomePageWallpaper from './img/bg1.png';
import 'react-native-gesture-handler';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Ar from './ar';
import styles from './style';
import app from './conect';


function Login ({ navigation }) {

  const [value1, onChangeText1] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [value3, onChangeText3] = React.useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={HomePageWallpaper} style={{width: '100%', height: '100%'}}>
          <View style={styles.centerView}>
              <Image source={require('./img/smartposlogo.png')} style={{width: '80%'}} resizeMode="contain"/>

                <Text style={styles.labelInput}> Name </Text>
                <TextInput style={styles.input} onChangeText={text => onChangeText1(text)} value={value1}/>

                <Text style={styles.labelInput}> Position </Text>
                <TextInput style={styles.input} onChangeText={text => onChangeText2(text)} value={value2}/>

                <Text style={styles.labelInput}> Pharmacy </Text>
                <TextInput style={styles.input} onChangeText={text => onChangeText3(text)} value={value3}/>

                <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('conect', {name: 'conect'})} >
                    <Text style={styles.buttonText}> Ir a Ar </Text>        
              </TouchableOpacity>

          </View>
        </ImageBackground>   
      </View>
    );
  }
  
  const AppNavigator = createStackNavigator({
    Login: {
      screen: Login,
    },
    conect: {
      screen: app,
    },
  },
  );
  
  export default createAppContainer(AppNavigator);
  