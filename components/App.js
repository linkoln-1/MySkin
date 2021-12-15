import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import HomePageOption  from "./HomePageOption";
import LogIn from "./LogIn";
import SignIn from "./SignIn";


export default function App() {
  const Stack = createStackNavigator();

  return (
        <NavigationContainer>
            <Stack.Navigator
             initialRouteName="HomeScreen"
              screenOptions={{
              headerStyle: { elevation: 0 },
              cardStyle: { backgroundColor: '#fff' }
          }}
             >
                <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                />
                <Stack.Screen
                name="HomePage"
                component={HomePageOption}
                />
                <Stack.Screen
                name="LogIn"
                component={LogIn}
                />
                  <Stack.Screen
                name="SignIn"
                component={SignIn}
                />
            </Stack.Navigator>
        </NavigationContainer>
   
  );
};




