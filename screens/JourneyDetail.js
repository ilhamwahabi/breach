import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

class JourneyDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Journey Detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default JourneyDetail;