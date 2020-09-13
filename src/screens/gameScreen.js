import React from 'react';
import {Text, View} from 'react-native';
import {spacing} from '../config/spacing';

export function GameScreen({navigation, route}) {
  return (
    <View style={spacing.screen}>
      <Text>Game Screen</Text>
      <Text>{route.params}</Text>
    </View>
  );
}
