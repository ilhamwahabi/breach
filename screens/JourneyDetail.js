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

  checkImg = (image_url) => {
    let img
    if (image_url) {
      img = { uri: image_url }
    } else {
      img = require('../assets/dummy/town.jpg')
    }
    return img
  }

  render() {
    const { title, author, image_url, place_status, duration, reward_category } = this.props.navigation.getParam('journey')
    const navigate = this.props.navigation.getParam('navigate')

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image 
            source={this.checkImg(image_url)} 
            style={{ width: '100%', height: 200, marginBottom: 20 }}
          />

          <View style={styles.reward}>
            <MaterialIcons size={20} name="person" color="#0097a7" />
            <Text style={styles.rewardValue}>Creator: { author }</Text>
          </View>
          <View style={styles.reward}>
            <MaterialIcons size={20} name="timer" color="#0097a7" />
            <Text style={styles.rewardValue}>Duration: { duration } days</Text>
          </View>
          <View style={styles.reward}>
            <MaterialIcons size={20} name="card-giftcard" color="#0097a7" />
            <Text style={styles.rewardValue}>Reward: { reward_category }</Text>
          </View>

          <View style={{ marginBottom: 10 }}></View>

          {
            place_status.map(({ id, place }, index) => (
              <TouchableOpacity 
                key={id}
                onPress={() => navigate('PlaceDetail', { name: place.name, place })}
              >
                <CurrentJourney 
                  isAccomplish={false} 
                  name={place.name} 
                  image={this.checkImg(place.image_url)} 
                />
              </TouchableOpacity>
            ))
          }

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