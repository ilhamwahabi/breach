import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import MyJourney from './screens/MyJourney'
import DiscoverJourney from './screens/DiscoverJourney';
import MyVoucher from './screens/MyVoucher';

const DiscoverJourneyStack = createStackNavigator({
  Main: { screen: DiscoverJourney }
})

const MyJourneyStack = createStackNavigator({
  Main: { screen: MyJourney }
})

const MyVoucherStack = createStackNavigator({
  Main: { screen: MyVoucher }
})

const App = createMaterialBottomTabNavigator({
  ["Discover Journey"]: { screen: DiscoverJourneyStack },
  ["My Journey"]: { screen: MyJourneyStack },
  ["My Voucher"]: { screen: MyVoucher },
}, {
  initialRouteName: 'Discover Journey',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

export default createAppContainer(App)