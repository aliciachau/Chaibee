import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import ResourcesScreen from '../screens/ResourcesScreen';
import VendorScreen from '../screens/VendorScreen';
import MarketScreen from '../screens/MarketScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import SkincareScreen from '../screens/SkincareScreen';
import CameraScreen from '../screens/CameraScreen';

export default TabNavigator(
  {
    Market: {
      screen: MarketScreen,
    },
    Skincare: {
      screen: SkincareScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    Resources: {
      screen: ResourcesScreen,
    },
    Shopping: {
      screen: ShoppingScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Market':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Skincare':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
          case 'Resources':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-cafe';
            break;
          case 'Camera':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-camera';
            break;
          case 'Shopping':
              iconName =
                Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-wifi';
        }
        return (
          <Ionicons
            name={iconName}
            size={32}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
