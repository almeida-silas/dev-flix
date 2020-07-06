import { StyleSheet } from 'react-native';

import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    marginHorizontal: 15,
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
    resizeMode: 'center',
  },
  icon: {
    fontSize: 90,
    color: colors.light,
    width: 90,
    height: 90,
    opacity: 0.7,
  },
  category: {
    marginBottom: 10,
  },
  title: {
    color: colors.light,
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default styles;
