import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { IVideos } from '../../pages/Home/IVideos';
import styles from './styles';

interface IProps {
  videos: IVideos[];
  label: string;
}

const CardVideo: React.FC<IProps> = ({ videos, label }) => {
  const navigation = useNavigation();

  return (
    <>
      <Title style={styles.title}>{label}</Title>

      <FlatList
        horizontal
        style={styles.category}
        data={videos}
        keyExtractor={(video) => String(video.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: video }) => {
          const navigateToVideo = () => {
            navigation.navigate('Video', { video });
          };

          return (
            <TouchableOpacity
              onPress={navigateToVideo}
              style={styles.container}
            >
              <View style={styles.video}>
                <Image style={styles.preview} source={{ uri: video.thumb }} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default CardVideo;
