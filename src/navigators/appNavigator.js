import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ResultsScreen} from '../screens/resultsScreen';
import {HomeNavigator} from './homeNavigator';
const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      style: {height: 56, alignItems: 'center'},
    }}
    backBehavior="none"
    activeColor="white"
    inactiveColor="#ddd"
    shifting={true}>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarColor: 'red',
        tabBarIcon: 'home',
      }}
    />
    <Tab.Screen
      name="Results"
      component={ResultsScreen}
      options={{
        tabBarColor: 'green',
        tabBarIcon: 'wifi',
      }}
    />
  </Tab.Navigator>
);
