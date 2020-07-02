import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

interface IProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  source: ImageSourcePropType;
}

const Movies: React.FC<IProps> = ({ source, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <Image style={styles.preview} source={source} />
      </View>

      <TouchableOpacity style={styles.onPress} onPress={onPress}>
        <Icon name='play-circle-outline' style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.box}>
        <Icon name='dots-vertical' size={22} color='#ffffff' />
        <Icon name='alert-circle-outline' size={22} color='#ffffff' />
      </View>
    </View>
  );
};

export default Movies;
