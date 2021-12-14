import React from 'react';
import HomeScreen from './HomeScreen';
import HomePageOption  from "./HomePageOption"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        />
         <Stack.Screen
        name="HomePage"
        component={HomePageOption}
        />
    </Stack.Navigator>
</NavigationContainer>
  );
};
