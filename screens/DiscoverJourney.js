import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Journey from '../components/Journey'
import Header from '../components/Header'

class DiscoverJourney extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: {
      backgroundColor: "#4dd0e1"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Journey name="Bandung City" reward="Voucher 50% di Crisbar" img={require("../assets/dummy/town.jpg")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});

export default DiscoverJourney;
