import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DiscoverJourney from './screens/DiscoverJourney';
import JourneyDetail from './screens/JourneyDetail';
import PlaceDetail from './screens/PlaceDetail';

import MyJourney from './screens/MyJourney'

import MyVoucher from './screens/MyVoucher';

import QrScanner from './screens/QrScanner';
import Camera from './screens/Camera';

const DiscoverJourneyStack = createStackNavigator({
  DiscoverJourney: { screen: DiscoverJourney },
  JourneyDetail: { screen: JourneyDetail },
  PlaceDetail: { screen: PlaceDetail },

  QrScanner: { screen: QrScanner },
  Camera: { screen: Camera }
})

const MyJourneyStack = createStackNavigator({
  MyJourney: { screen: MyJourney }
})

const MyVoucherStack = createStackNavigator({
  MyVoucher: { screen: MyVoucher },
})

const App = createMaterialBottomTabNavigator({
  ["Discover Journey"]: { screen: DiscoverJourneyStack },
  ["My Journey"]: { screen: MyJourneyStack },
  ["My Voucher"]: { screen: MyVoucherStack },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = MaterialIcons;
      let iconName;
      
      switch(routeName) {
        case 'Discover Journey': iconName = 'search'; break;
        case 'My Journey': iconName = 'explore'; break;
        case 'My Voucher': iconName = 'local-offer'; break;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  initialRouteName: 'Discover Journey',
  activeColor: '#fff',
  inactiveColor: '#b2ebf2',
  barStyle: { backgroundColor: '#4dd0e1' },    
});

export default createAppContainer(App)