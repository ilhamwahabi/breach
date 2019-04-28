import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

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
  initialRouteName: 'Discover Journey',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

export default createAppContainer(App)