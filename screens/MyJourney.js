import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

import Header from '../components/Header';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <Header title="My Journey" />,
    headerStyle: {
      backgroundColor: "#4dd0e1"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          My Journey
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default Home;