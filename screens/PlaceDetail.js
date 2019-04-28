import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

class PlaceDetail extends Component {
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
    const { description, location, image_url } = this.props.navigation.getParam('place')    

    return (
      <View style={{ padding: 15 }}>
        <Image 
          source={this.checkImg(image_url)}
          style={{ width: '100%', height: 200, marginBottom: 15 }}
        />
        <Text style={{ fontSize: 16, marginBottom: 10 }}>{ location }</Text>
        <Text>{ description }</Text>
      </View>
    );
  }
}

export default PlaceDetail;