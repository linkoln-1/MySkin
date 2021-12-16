import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomePageOption from './HomePageOption';
import ContinueAsAguest from './ContinueAsAguest';
import {Image, View} from 'react-native';
import Profile from './Profile';
import Message from './Message';
import Feed from './Feed';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const StartScren = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {elevation: 0},
        cardStyle: {backgroundColor: '#fff'},
      }}
    >
      <Stack.Screen
        options={{headerMode: 'none', headerShown: false}}
        name="StartScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerMode: 'none', headerShown: false}}
        name="HomePage"
        component={HomePageOption}
      />
      <Stack.Screen
        options={{headerMode: 'none', headerShown: false}}
        name="Guest"
        component={ContinueAsAguest}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require('./assets/icons/image1.png')}
                />
              </View>
            ),
          }}
          name="Home"
          component={StartScren}
        />

        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('./assets/icons/icon_cabinet.png')}
                />
              </View>
            ),
          }}
          name="profile"
          component={Profile}
        />

        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('./assets/icons/icon_chat.png')}
                />
              </View>
            ),
          }}
          name="message"
          component={Message}
        />

        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('./assets/icons/icon_news.png')}
                />
              </View>
            ),
          }}
          name="feed"
          component={Feed}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
