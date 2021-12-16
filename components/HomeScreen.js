import React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  const LoadPage = () => {
    navigation.navigate('HomePage');
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
        <Pressable style={styles.button} onPress={() => LoadPage()}>
          <Text style={styles.text}>Enter</Text>
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
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
