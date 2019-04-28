import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Journey extends Component {
  render() {
    const { name, reward, img } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{ name }</Text>
          <View style={styles.reward}>
            <MaterialIcons size={20} name="card-giftcard" color="#0097a7" />
            <Text style={styles.rewardValue}>{ reward }</Text>
          </View>
        </View>
        <Image 
          source={img} 
          style={{ width: 70, height: 70 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  name: {
    fontSize: 30,
    marginBottom: 10
  },
  reward: {
    flexDirection: 'row'
  },
  rewardValue: {
    marginLeft: 10,
    fontSize: 15
  }
})

export default Journey;