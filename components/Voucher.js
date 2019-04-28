import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Voucher extends Component {
  render() {
    const { name, expired, img } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{ name }</Text>
          <View style={styles.expired}>
            <MaterialIcons size={20} name="broken-image" color="#d50000" />
            <Text style={styles.expiredValue}>Expired: { expired }</Text>
          </View>
        </View>
        <Image style={{ width: 70, height: 70 }} source={img} />
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
    fontSize: 24,
    marginBottom: 10
  },
  expired: {
    flexDirection: 'row'
  },
  expiredValue: {
    marginLeft: 10,
    fontSize: 15
  }
})

export default Voucher;