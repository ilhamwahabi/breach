import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

class CurrentJourney extends Component {
  render() {
    const { name, isAccomplish, image } = this.props

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
          { 
            isAccomplish 
            ? <FontAwesome name="check" color="#00c853" size={18} />
            : <FontAwesome name="clock" color="#424242" size={18} />
          }
          <Text style={{ marginLeft: 15, fontSize: 18 }}>{ name }</Text>
        </View>
        <Image 
          source={image}
          style={{ width: '100%', height: 100 }}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: 20,
    flexDirection: 'column'
  }
})

export default CurrentJourney;