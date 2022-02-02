import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> REGISTER </Text>
      <View style={styles.bodycontainer}>
        <View style={styles.inputcontainer}>
          <Image
            style={styles.msgbox}
            source={require('../Screens/Images/email.png')}
          />
          <TextInput
            style={styles.input}
            value={Text}
            placeholder="Enter Name"
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
            placeholder="Enter E-mail"
          />
        </View>
        <View style={styles.inputcontainer2}>
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
        <View style={styles.inputcontainer3}>
          <Image
            style={styles.msgbox}
            source={require('../Screens/Images/email.png')}
          />
          <TextInput
            style={styles.input}
            value={Text}
            placeholder="confirm password"
          />
        </View>
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
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.bold}>
            Login
          </Text>{' '}
          here{' '}
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    color: '#000',
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
  },
  imageStyle: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 30,
  },
  bodycontainer: {
    flex: 0.9,
    backgroundColor: '#E9E9E9',
    marginTop: 'auto',
    marginBottom: 50,
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
    marginTop: 30,
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
  inputcontainer2: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  inputcontainer3: {
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
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  bottom: {
    alignSelf: 'center',
    fontSize: 15,
    marginBottom: 30,
    marginTop: 50,
    color: '#000',
  },
});
