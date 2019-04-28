import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Journey from '../components/Journey'
import Header from '../components/Header'

import api from '../apis'
import { ScrollView } from "react-native-gesture-handler";

class DiscoverJourney extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header navigate={navigation.navigate} />,
      headerStyle: {
        backgroundColor: "#4dd0e1"
      }
    };
  };

  state = {
    journey: []
  }

  async componentDidMount() {
    const { data } = await api.get('/journey/?format=json')

    console.log(data)
    this.setState({ journey: data })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <ScrollView>
          { this.state.journey.map((j, index) => (
            <Journey 
              key={index}
              journey={j}
              navigate={navigate}
            />
          )) }
        </ScrollView>
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
