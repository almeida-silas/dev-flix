import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Home: React.FC = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 1000);
  };

  useEffect(() => {
    handlePlay();
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <Appbar.Header accessibilityStates style={styles.appbar}>
        <Appbar.Action
          accessibilityStates
          icon={() => <Icon name='arrow-left' style={styles.icon} />}
        ></Appbar.Action>
      </Appbar.Header>

      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        resizeMode='cover'
        shouldPlay={play}
        style={styles.video}
        useNativeControls
      />
    </SafeAreaView>
  );
};

export default Home;
