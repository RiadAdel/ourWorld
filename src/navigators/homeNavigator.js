import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/homeScreen';
import {GameScreen} from '../screens/gameScreen';
import {ScoreScreen} from '../screens/scoreScreen';
const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="home" screenOptions={{header: () => null}}>
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="game" component={GameScreen} />
    <Stack.Screen name="score" component={ScoreScreen} />
  </Stack.Navigator>
);
