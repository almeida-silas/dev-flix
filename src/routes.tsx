import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator();
const StackNavigator = createStackNavigator();

import Home from './pages/Home';
import Video from './pages/Video';
import colors from './style/colors';
import styles from './style/bottomNavigator';

const HomeStack: React.FC = () => {
  return (
    <React.Fragment>
      <TabNavigator.Navigator
        shifting={false}
        barStyle={styles.container}
        initialRouteName='Home'
        activeColor={colors.light}
      >
        <TabNavigator.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: 'home',
          }}
        />
      </TabNavigator.Navigator>
    </React.Fragment>
  );
};

const Routes: React.FC = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name='Home' component={HomeStack} />
      <StackNavigator.Screen name='Video' component={Video} />
    </StackNavigator.Navigator>
  );
};

export default Routes;
