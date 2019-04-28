import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Voucher extends Component {
  render() {
    const { name, expired, navigate, img } = this.props

    return (
      <React.Fragment>
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
        <Button
          onPress={() => {}}
          title="Use Voucher"
          color="#4dd0e1"
          accessibilityLabel="Use Voucher"
        />
      </React.Fragment>
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