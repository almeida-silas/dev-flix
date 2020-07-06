import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../style/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  icon: {
    color: colors.light,
    fontSize: 22,
  },
  appbar: {
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
  },
  video: {
    height: '33%',
  },
});

export default styles;
