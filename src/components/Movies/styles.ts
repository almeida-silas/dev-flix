import { StyleSheet } from 'react-native';

import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 240,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    height: '100%',
    width: '100%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  preview: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  onPress: {
    position: 'absolute',
    width: 75,
    height: 75,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.light,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  icon: {
    fontSize: 100,
    color: colors.light,
    width: 100,
    height: 100,
  },
  box: {
    bottom: 0,
    height: 35,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.secundary,
  },
});

export default styles;
