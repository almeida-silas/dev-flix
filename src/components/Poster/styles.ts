import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../style/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  linearGradient: {
    height: height * 0.4,
  },
  poster: {
    width,
  },
  containerButton: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    alignSelf: 'center',
    color: colors.light,
  },
  containerTags: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tags: {
    color: colors.green,
  },
  divider: {
    width: 3,
    height: 3,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: colors.gray,
  },
});

export default styles;
