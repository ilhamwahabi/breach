import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Journey extends Component {
  render() {
    const { name, creator, reward, duration, img, navigate } = this.props

    return (
      <View style={styles.container}>
        <Image 
          source={img} 
          style={{ height: 70, width: '100%' }}
        />
        <View>
          <View style>
            <Text style={styles.name}>{ name }</Text>
            <View style={styles.reward}>
              <MaterialIcons size={20} name="person" color="#0097a7" />
              <Text style={styles.rewardValue}>Creator: { creator }</Text>
            </View>
            <View style={styles.reward}>
              <MaterialIcons size={20} name="timer" color="#0097a7" />
              <Text style={styles.rewardValue}>Duration: { duration }</Text>
            </View>
            <View style={styles.reward}>
              <MaterialIcons size={20} name="card-giftcard" color="#0097a7" />
              <Text style={styles.rewardValue}>Reward: { reward }</Text>
            </View>
          </View>
          <Button
            onPress={() => navigate('Detail', { name })}
            title="Journey Detail"
            color="#4dd0e1"
            accessibilityLabel="Journey Detail"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  name: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 7.5
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

export default Journey;