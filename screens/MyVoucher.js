import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Voucher from '../components/Voucher';

class MyVoucher extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Voucher name="Voucher 50% Crisbar" expired="26 Mai 2020" img={require('../assets/dummy/store.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  }
})

export default MyVoucher;