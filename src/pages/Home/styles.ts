import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../style/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  linearGradient: {
    height: height * 0.4,
  },
  title: {
    color: colors.light,
    marginTop: 15,
  },
  poster: {
    width,
    marginBottom: 10,
  },
  containerContent: {
    height: 300,
    backgroundColor: colors.light,
  },
  category: {
    marginVertical: 10,
  },
  appbar: {
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
  },
});

export default styles;
