import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> LOGIN </Text>
      <View style={styles.bodycontainer}>
        <ImageBackground
          style={styles.logo}
          source={require('../Screens/Images/id12.png')}
          resizeMode="cover"></ImageBackground>

        <View style={styles.inputcontainer}>
          <Image
            style={styles.msgbox}
            source={require('../Screens/Images/email.png')}
          />
          <TextInput
            style={styles.input}
            value={Text}
            placeholder="Enter E-mail"
          />
        </View>
        <View style={styles.inputcontainer1}>
          <Image
            style={styles.msgbox}
            source={require('../Screens/Images/email.png')}
          />
          <TextInput
            style={styles.input}
            value={Text}
            placeholder="Enter Password"
          />
        </View>
        <Text style={styles.word}>forgot password ?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.imageStyle}
            source={require('../Screens/Images/nexttt.png')}
          />
        </TouchableOpacity>

        <Text style={styles.bottom}>
          {' '}
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.bold}>
            Register
          </Text>{' '}
          here{' '}
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
  },
  imageStyle: {
    flex: 1,
    height: 60,
    width: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    color: '#000',
  },
  bodycontainer: {
    flex: 0.9,
    backgroundColor: '#E9E9E9',
    marginTop: 'auto',
    marginBottom: 40,
    marginHorizontal: 30,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputcontainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: -10,
  },
  inputcontainer1: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  msgbox: {
    marginRight: 10,
    height: 40,
    width: 40,
  },
  input: {
    height: 50,
  },
  tinyLogo: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginBottom: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  bottom: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    bottom: 30,
    color: '#000',
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    paddingTop: 5,
    marginBottom: 60,
    color: '#000',
  },
  word: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: '#000',
  },
});
