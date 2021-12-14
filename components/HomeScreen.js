import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image
  } from 'react-native';


export default function HomeScreen({navigation}) {
  const LoadPage = () => {
    navigation.navigate("HomePage")
  }
    return(
    <View style={styles.Container}>
          <Text style={styles.ContainerText}>
            eng/ara
          </Text>
      <View style={styles.Image}>
          <Image
            style={styles.img}
            source={require('./img/2021-12-13_14-09-36.png')}
          />
            <Pressable style={styles.button} onPress={() => LoadPage()}>
               <Text style={styles.text}>Enter</Text>
            </Pressable>
      </View>   
    </View>
    )
}



const styles = StyleSheet.create({
    Container: {
     width: '100%',
     margin: "auto",
    },
    ContainerText: {
      position:"absolute",
      right: 10,
      top:30,
      fontWeight: 'bold',
      color: "black"
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
       marginTop:40,
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
