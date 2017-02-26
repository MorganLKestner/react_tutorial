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
  ListView,
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

 /*render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here I love donuts  to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }*/

export default class AwesomeProject extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    // let ismale= 'rowData.gender.m';
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
       {name: 'John', gender: 'm'},
       {name: 'Joel', gender: 'm'},
       {name: 'James', gender: 'm'},
       {name: 'Jimmy', gender: 'm'},
       {name: 'Jackson', gender: 'm'},
       {name: 'Jillian', gender: 'f'},
       {name: 'Julie', gender: 'f'},
       {name: 'Devin', gender: 'm'}
     ])
    };
  }

  makeARow(rowData) {
        let display={rowData.gender == 'm' ? styles.blue1: styles.blue2}
          return(
        )
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22,}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style={{borderStyle:'solid', borderWidth: 1, borderColor:'{display}', padding:2,}}><Text>{rowData.name}</Text><Text>{rowData.gender}</Text></View>
          }
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
