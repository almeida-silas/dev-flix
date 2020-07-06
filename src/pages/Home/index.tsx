import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';

import { IVideos } from './IVideos';

import Poster from '../../components/Poster';
import CardVideo from '../../components/CardVideo';
import styles from './styles';

import api from '../../services/api';

const Home: React.FC = () => {
  const [videos, setVideos] = useState<IVideos[]>([]);
  const [orientation, setOrientation] = useState<
    ScreenOrientation.OrientationLock
  >();

  const handleVideos = () => {
    const response = api.data;

    setVideos(response);
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);

    handleVideos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <ScrollView>
        <Poster
          image={{
            uri:
              'https://www.diariodoscampos.com.br/fl/normal/1530800759-1434080817centro-de-formacao-profissional-jose-de-moraes-correia-senai-de-parnaiba.jpg',
          }}
          title='Cursos de Tecnologia - SENAI'
          tags={['React Native', 'Expo']}
        />

        <CardVideo videos={videos} label='Recomendados' />
        <CardVideo videos={videos} label='Lançamentos' />
        <CardVideo videos={videos} label='Mais vistos' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
