import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Journey from '../components/Journey'
import Header from '../components/Header'

class DiscoverJourney extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header navigate={navigation.navigate} />,
      headerStyle: {
        backgroundColor: "#4dd0e1"
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Journey 
          name="Bandung City" 
          reward="Platinum"
          creator="Atta Halilintar"
          duration="1 week"
          img={require("../assets/dummy/town.jpg")} 
          navigate={this.props.navigation.navigate}
        />
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
