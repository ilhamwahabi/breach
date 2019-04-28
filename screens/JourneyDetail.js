import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from "react-native";

class JourneyDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/dummy/town.jpg')} 
          style={{ width: '100%', height: 200 }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => {}}
            title="Take Journey"
            color="#4dd0e1"
            accessibilityLabel="Take Journey"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default JourneyDetail;