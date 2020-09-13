import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SquaredButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
      activeOpacity={0.8}>
      {props.children}
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'white',
  },
});
