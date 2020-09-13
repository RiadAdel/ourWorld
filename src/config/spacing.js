import {StyleSheet} from 'react-native';
import {colors} from './color';

export const spacing = StyleSheet.create({
  screen: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  verticalPadding: {
    paddingVertical: 12,
  },
  horizontalPadding: {
    paddingHorizontal: 12,
  },
  verticalMargin: {
    marginVertical: 12,
  },
  horizontalMargin: {
    marginHorizontal: 12,
  },
});
