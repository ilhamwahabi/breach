import React, { Component, Fragment } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class Header extends Component {
  renderLeftSide = () => {
    if (this.props.title) {
      return <Text style={styles.headerText}>{ this.props.title }</Text>
    }
    return (
      <Fragment>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 30, height: 30, marginRight: 15 }}
        />
        <Text style={styles.headerText}>Breach</Text>
      </Fragment>
    )
  }

  render() {
    const { navigate } = this.props

    return (
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          { this.renderLeftSide() }
        </View>
        <TouchableOpacity
          onPress={() => navigate('QrScanner')}
        >
          <Image 
            style={{ width: 30, height: 30 }} 
            source={require("../assets/qr.png")} 
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20
  },
  headerLogo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 20,
    color: "white",
  }
});

export default Header;