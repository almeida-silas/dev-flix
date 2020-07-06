import React from 'react';
import { View, ImageBackground, ImageSourcePropType } from 'react-native';
import { Title, Caption, Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import Button from '../Button';
import styles from './styles';

interface IProps {
  image: ImageSourcePropType;
  title: string;
  tags: string[];
}

const Poster: React.FC<IProps> = ({ image, title, tags }) => {
  return (
    <>
      <ImageBackground style={styles.poster} source={image}>
        <LinearGradient
          style={styles.linearGradient}
          locations={[0, 0.2, 0.6, 0.93]}
          colors={[
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,1)',
          ]}
        />
      </ImageBackground>

      <Title style={styles.title}>{title}</Title>
      <View style={styles.containerTags}>
        <Caption style={styles.tags}>{tags[0]}</Caption>
        <View style={styles.divider} />
        <Caption style={styles.tags}>{tags[1]}</Caption>
      </View>

      <View style={styles.containerButton}>
        <Button mode='outlined' icon='plus' onPress={() => {}}>
          Minha lista
        </Button>

        <Button mode='contained' icon='play' onPress={() => {}}>
          Assistir
        </Button>

        <Button mode='outlined' icon='alert-circle-outline' onPress={() => {}}>
          Saiba mais
        </Button>
      </View>
    </>
  );
};

export default Poster;
