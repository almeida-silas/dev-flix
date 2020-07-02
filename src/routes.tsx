import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator();

import Home from './pages/Home';
import colors from './style/colors';
import styles from './style/bottomNavigator';

const Routes: React.FC = () => {
  return (
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
  );
};

export default Routes;
