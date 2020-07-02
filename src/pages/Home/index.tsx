import React, { useState } from 'react';
import { SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Appbar, Title, ToggleButton } from 'react-native-paper';

import styles from './styles';
import Movies from '../../components/Movies';
import colors from '../../style/colors';

const Home: React.FC = () => {
  const [status, setStatus] = React.useState<
    'checked' | 'unchecked' | undefined
  >();
  const [value, setValue] = React.useState('left');

  const onButtonToggle = () => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <ScrollView>
        <ImageBackground
          style={styles.poster}
          source={{
            uri:
              'https://img.ibxk.com.br/2016/07/22/22102724834031.jpg?w=1120&h=420&mode=crop&scale=both',
          }}
        >
          <LinearGradient
            style={styles.linearGradient}
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}
          ></LinearGradient>
        </ImageBackground>

        <Title style={styles.title}>Continuar assistindo</Title>
        <ScrollView style={styles.category}>
          <ScrollView horizontal>
            <Movies
              source={{
                uri:
                  'https://4.bp.blogspot.com/-2dSdBpVSbWg/WhtbpKisYrI/AAAAAAAALMc/KneJrd6H1PQR5u30K8LX3Q2WlkhIfQUDgCEwYBhgL/s1600/p12009522_p_v8_ag.jpg',
              }}
            />
          </ScrollView>

          <Title style={styles.title}>Séries</Title>
          <ScrollView style={styles.category} horizontal>
            <Movies
              source={{
                uri:
                  'https://4.bp.blogspot.com/-2dSdBpVSbWg/WhtbpKisYrI/AAAAAAAALMc/KneJrd6H1PQR5u30K8LX3Q2WlkhIfQUDgCEwYBhgL/s1600/p12009522_p_v8_ag.jpg',
              }}
            />
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
