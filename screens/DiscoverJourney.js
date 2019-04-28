import React, { Component } from 'react';
import { View, Text, Image } from "react-native";

class Header extends Component {
  render() {
    return (
      <View>
        <Text>Breach</Text>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
    )
  }
}

class DiscoverJourney extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: {
      backgroundColor: '#4dd0e1'
    },
    headerTitleStyle: {
      color: '#e0f7fa'
    }
  };

  render() {
    return (
      <View>
        <Text>Discover Journey</Text>
      </View>
    );
  }
}

export default DiscoverJourney;