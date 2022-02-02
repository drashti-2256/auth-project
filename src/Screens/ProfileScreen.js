import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> PROFILE </Text>
      <Image
        style={styles.img}
        source={require('../Screens/Images/profile1.png')}
      />
      <Text style={styles.bottom}> Jhon Doe </Text>
      <TouchableOpacity style={styles.logoutbtn}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.logoutstyle}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    color: '#000',
  },
  img: {
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    height: 150,
    width: 150,
  },
  bottom: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 150,
    color: '#000',
    alignSelf: 'center',
  },
  exit: {
    paddingHorizontal: 40,
    color: 'red',
  },
  logoutbtn: {
    width: '40%',
    borderRadius: 15,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
    backgroundColor: '#D62828',
  },
  logoutstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
