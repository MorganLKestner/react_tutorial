import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class AwesomeProject extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'John', gender: 'm'},
        {name: 'Joel', gender: 'm'},
        {name: 'James', gender: 'm'},
        {name: 'Jimmy', gender: 'm'},
        {name: 'Jackson', gender: 'm'},
        {name: 'Jillian', gender: 'f' },
        {name: 'Julie', gender: 'f'},
        {name: 'Devin', gender: 'm'}
      ])
    };
  }

  makeThisRow(rowData) {
    let bColor = (rowData.gender == 'm') ? 'blue' : 'pink';
      return(
        <View style={{flex: 1, borderStyle: 'solid', borderColor: bColor, borderWidth: 2, margin: 8, padding: 8}}>
          <Text>{rowData.name}</Text>
          <Text>{rowData.gender}</Text>
        </View>
      )
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.makeThisRow(rowData)}
        />
      </View>
    );
  }
}


AppRegistry.registerComponent(
  'AwesomeProject',
  () => AwesomeProject);
