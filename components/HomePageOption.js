import React from 'react';
import {
    StyleSheet,
    View,
    Pressable,
    Image,
    Text
  } from 'react-native';


const HomePageOption = () => {
    return(
  <View style={styles.Container}>
      <View style={styles.Image}>
          <Image
          style={styles.img}
          source={require('./img/2021-12-13_14-09-36.png')}
          />
          <Pressable style={styles.button}>
          <Text style={styles.text}>Log in</Text>
          </Pressable>

          <Pressable style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
          </Pressable>

          <Pressable style={styles.button}>
          <Text style={styles.text}>Continue as a guest</Text>
          </Pressable>
        </View>  
    </View>
    )
}



const styles = StyleSheet.create({
    Container: {
     width: '100%',
     margin: "auto"
    },
    Image: {
      position:'absolute',
      top:180,
      left:50
    },
     img: {
       width:300,
       height:200,
     },
     button: {
       margin:20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 5,
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




export default HomePageOption;