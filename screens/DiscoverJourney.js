import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DefaultPreference from 'react-native-default-preference';

import Journey from '../components/Journey'
import Header from '../components/Header'

import api from '../apis'

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

    this.setState({ journey: data })

    try {
      await DefaultPreference.set('checkedPlace', '1')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.createJourneyButton}>
          <Button
            onPress={() => {}}
            title="Create Your Own Journey"
            color="#651fff"
            accessibilityLabel="Create Journey"
          />
        </View>

        <ScrollView style={styles.scrollView}>
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
  },
  createJourneyButton: { 
    marginBottom: 10, 
    paddingHorizontal: 10 
  },
  scrollView: {
    marginBottom: 35
  }
});

export default DiscoverJourney;
