/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import {styles} from './stylesheet.js';

// class Pizza extends Component {
//   constructor(props) {
//     super(props);
//     //whats super?
//     this.state = {text: '' }
// //whenever  you tyoe blink - code that runs when blink is "born"  a default state 

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState({ showColor: !this.state.showColor });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.showColor ? styles.blue1: styles.blue2;
//     // ternary
//     return (
//       <View style={display}></View>
//     );
//   }
// }

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    //whats super?
    this.state = {text: '' }
  }
 render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
