import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Header from "../components/Header";
import CurrentJourney from "../components/CurrentJourney";

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header title="My Journey" navigate={navigation.navigate} />,
      headerStyle: {
        backgroundColor: "#4dd0e1"
      }
    };
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.name}>Bandung City</Text>
          <View style={styles.progress}>
            <Text style={styles.progressItem}>1</Text>
            <Text style={styles.progressItem}> / </Text>
            <Text style={styles.progressItem}>2</Text>
          </View>
        </View>

        <CurrentJourney isAccomplish={true} name="Gedung Sate" image={require('../assets/dummy/town.jpg')} />
        <CurrentJourney isAccomplish={false} name="Tubagus Ismail" image={require('../assets/dummy/town.jpg')} />

        <View style={styles.redeemButton}>
          <Button
            onPress={() => navigate('Camera')}
            title="Redeem Reward"
            color="#4dd0e1"
            accessibilityLabel="Redeem Reward"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  name: {
    fontSize: 24
  },
  progress: {
    flexDirection: "row"
  },
  progressItem: {
    fontSize: 20
  },
  redeemButton: {
    marginTop: 15
  }
});

export default Home;
