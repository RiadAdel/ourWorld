import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {spacing} from '../config/spacing';
import {SquaredButton} from '../components/squaredButton';
import {FlatList} from 'react-native-gesture-handler';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../config/color';
import {textStyles} from '../config/typography';
export function HomeScreen({navigation}) {
  const iconColor = colors.white;
  const iconSize = 40;
  const games = [
    {
      name: 'Capitals',
      icon: <Foundation name="map" color={iconColor} size={iconSize} />,
    },
    {
      name: 'Flags',
      icon: <FontAwesome name="flag" color={iconColor} size={iconSize} />,
    },
    {
      name: 'Contnents',
      icon: (
        <FontAwesome5 name="globe-africa" color={iconColor} size={iconSize} />
      ),
    },
  ];

  const renderItem = (data, key) => {
    return (
      <SquaredButton
        key={key}
        title={data.item.name}
        textStyle={textStyles.small}
        style={styles.gameButton}
        onPress={() =>
          console.log(navigation.navigate('game', data.item.name))
        }>
        {data.item.icon}
      </SquaredButton>
    );
  };

  return (
    <View style={spacing.screen}>
      <Text style={styles.title}>Choose a Game</Text>
      <FlatList
        numColumns={2}
        data={games}
        renderItem={(x) => renderItem(x)}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...textStyles.xlarge,
  },
  gameButton: {
    justifyContent: 'space-around',
    ...spacing.verticalMargin,
    ...spacing.horizontalMargin,
  },
});
