import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../style/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  icon: {
    color: colors.secundary,
    fontSize: 22,
  },
  appbar: {
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
  },
  video: {
    width,
    height: height * 0.4,
  },
});

export default styles;
