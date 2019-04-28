import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DefaultPreference from 'react-native-default-preference';

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

  state = {
    checkedPlace: ''
  }

  componentDidMount() {
    DefaultPreference.get('checkedPlace')
      .then(value => this.setState({ checkedPlace: value }))
      .catch(error => this.setState({ checkedPlace: error }))
  }

  render() {
    DefaultPreference.get('checkedPlace')
      .then(value => this.setState({ checkedPlace: value }))
      .catch(error => this.setState({ checkedPlace: error }))

    const { navigate } = this.props.navigation;
    const { checkedPlace } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.name}>Bandung City</Text>
          <View style={styles.progress}>
            <Text style={styles.progressItem}>{ checkedPlace }</Text>
            <Text style={styles.progressItem}> / </Text>
            <Text style={styles.progressItem}>2</Text>
          </View>
        </View>

        <CurrentJourney isAccomplish={true} isHalal={true} name="Gedung Sate" image={require('../assets/dummy/town.jpg')} />
        <CurrentJourney isAccomplish={checkedPlace === '2'} isHalal={true} name="Tubagus Ismail" image={require('../assets/dummy/town.jpg')} />

        <View style={styles.redeemButton}>
          <Button
            onPress={() => navigate('Camera')}
            title="Redeem Reward"
            color="#4dd0e1"
            disabled={checkedPlace === '1'}
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
