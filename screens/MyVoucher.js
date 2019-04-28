import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

import Voucher from '../components/Voucher';
import Header from '../components/Header';

class MyVoucher extends Component {
  static navigationOptions = {
    headerTitle: <Header title="My Voucher" />,
    headerStyle: {
      backgroundColor: "#4dd0e1"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Voucher 
          name="Voucher 50% Crisbar" 
          expired="26 Mai 2020" 
          img={require('../assets/dummy/store.png')}
          navigate={this.props.navigation.navigate}
        />
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