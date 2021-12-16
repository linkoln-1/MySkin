import React from 'react';
import {StyleSheet, View, Pressable, Image, Text} from 'react-native';

const HomePageOption = ({navigation}) => {
  const LoadingLogIn = () => {
    navigation.navigate('Guest');
  };
  const LoadingSignIn = () => {
    navigation.navigate('Guest');
  };
  const LoadingGuest = () => {
    navigation.navigate('Guest');
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.ContainerText}>
        <Text style={styles.TextEng}>eng</Text>/ara
      </Text>
      <View style={styles.Image}>
        <Image style={styles.img} source={require('./assets/img/image1.png')} />
      </View>
      <View style={styles.Button}>
        <Pressable style={styles.button} onPress={() => LoadingLogIn()}>
          <Text style={styles.text}>Log in</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => LoadingSignIn()}>
          <Text style={styles.text}>Sign Up</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => LoadingGuest()}>
          <Text style={styles.text}>Continue as a guest</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    margin: 'auto',
  },
  ContainerText: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'black',
  },
  TextEng: {
    fontWeight: 'bold',
  },
  Image: {
    position: 'absolute',
    top: 100,
    left: 70,
  },
  img: {
    width: 300,
    height: 230,
  },
  Button: {
    position: 'absolute',
    top: 380,
    left: 10,
    width: 390,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'grey',
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomePageOption;
