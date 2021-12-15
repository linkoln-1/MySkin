import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
  } from 'react-native';



export default function SignIn () {
    const [name, onChangeName] = React.useState("");
    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    return(
        <View style={styles.Container}>
            <Text style={styles.ContainerText}>
               Sign In
            </Text>
            <TextInput
             style={styles.inputName}
             value={name}
             onChangeText={onChangeName}
             placeholder='Name'
            />
            <TextInput
             style={styles.inputText}
             value={text}
             onChangeText={onChangeText}
             placeholder='Email or phone number'
            />
              <TextInput
             style={styles.inputPassword}
             value={password}
             onChangeText={onChangePassword}
             placeholder='Password'
             secureTextEntry={true}
            />
            <View style={styles.Button}>
                <Pressable style={styles.button}>
                <Text style={styles.text}>Sign In</Text>
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
       ContainerText: {
           marginTop: 20,
           fontSize:30,
           textAlign:"center",
           fontWeight: "bold",
           color: "black"
       },
       inputText: {
        height: 50,
        margin: 12,
        borderRadius:10,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 10,
        backgroundColor:"#E3E3E3",
      },
      inputPassword: {
        height: 50,
        margin: 12,
        borderRadius:10,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 10,
        backgroundColor:"#E3E3E3",
      },
      inputName: {
        marginTop: 40,
        height: 50,
        margin: 12,
        borderRadius:10,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 10,
        backgroundColor:"#E3E3E3",
      },
      Button: {
        position: "absolute",
        top: 310,
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
       marginTop: 30
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
   });