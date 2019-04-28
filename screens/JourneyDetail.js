import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import CurrentJourney from '../components/CurrentJourney';

class JourneyDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image 
            source={require('../assets/dummy/town.jpg')} 
            style={{ width: '100%', height: 200, marginBottom: 20 }}
          />

          <View style={styles.reward}>
            <MaterialIcons size={20} name="person" color="#0097a7" />
            <Text style={styles.rewardValue}>Creator: Atta Halilintar</Text>
          </View>
          <View style={styles.reward}>
            <MaterialIcons size={20} name="timer" color="#0097a7" />
            <Text style={styles.rewardValue}>Duration: 1 week</Text>
          </View>
          <View style={styles.reward}>
            <MaterialIcons size={20} name="card-giftcard" color="#0097a7" />
            <Text style={styles.rewardValue}>Reward: Platinum</Text>
          </View>

          <View style={{ marginBottom: 10 }}></View>

          <CurrentJourney 
            isAccomplish={false} 
            name="Gedung Sate" 
            image={require('../assets/dummy/town.jpg')} 
          />

          <CurrentJourney 
            isAccomplish={false} 
            name="Tubagus Ismail" 
            image={require('../assets/dummy/town.jpg')} 
          />

          <View style={{ marginTop: 15 }}>
            <Button
              onPress={() => {}}
              title="Take Journey"
              color="#4dd0e1"
              accessibilityLabel="Take Journey"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  reward: {
    flexDirection: 'row',
    marginBottom: 12.5
  },
  rewardValue: {
    marginLeft: 10,
    fontSize: 15
  }
})

export default JourneyDetail;