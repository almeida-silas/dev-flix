import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as ScreenOrientation from 'expo-screen-orientation';
import { WebView } from 'react-native-webview';

import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

import { IVideos } from '../Home/IVideos';

interface IRoute {
  params: {
    video: IVideos;
  };
}

interface IProps {
  route: IRoute;
}

const Home: React.FC<IProps> = ({ route }) => {
  const navigation = useNavigation();

  const { video } = route.params;

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  const handleGoBack = () => {
    ScreenOrientation.unlockAsync();

    navigation.goBack();
  };

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <Appbar.Header accessibilityStates style={styles.appbar}>
        <Appbar.Action
          accessibilityStates
          icon={() => <Icon name='arrow-left' style={styles.icon} />}
          onPress={handleGoBack}
        />
      </Appbar.Header>

      <WebView
        style={styles.video}
        source={{
          uri: `https://www.youtube.com/embed/${video.id}`,
        }}
        allowsFullscreenVideo
      />
    </SafeAreaView>
  );
};

export default Home;
