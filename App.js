import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DiscoverJourney from './screens/DiscoverJourney';
import JourneyDetail from './screens/JourneyDetail';

import MyJourney from './screens/MyJourney'

import MyVoucher from './screens/MyVoucher';
import VoucherDetail from './screens/VoucherDetail';

const DiscoverJourneyStack = createStackNavigator({
  Main: { screen: DiscoverJourney },
  Detail: { screen: JourneyDetail }
})

const MyJourneyStack = createStackNavigator({
  Main: { screen: MyJourney }
})

const MyVoucherStack = createStackNavigator({
  Main: { screen: MyVoucher },
  Detail: { screen: VoucherDetail }
})

const App = createMaterialBottomTabNavigator({
  ["Discover Journey"]: { screen: DiscoverJourneyStack },
  ["My Journey"]: { screen: MyJourneyStack },
  ["My Voucher"]: { screen: MyVoucher },
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