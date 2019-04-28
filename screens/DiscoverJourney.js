import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Journey from '../components/Journey'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.headerText}>Breach</Text>
        </View>
        <Image
          source={require("../assets/qr.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
    );
  }
}

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20
  },
  headerLogo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 20,
    color: "white",
    marginLeft: 15
  },
  container: {
    padding: 15
  }
});

export default DiscoverJourney;
