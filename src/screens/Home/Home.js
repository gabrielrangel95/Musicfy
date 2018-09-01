import React, { Component } from 'react';
import 'config/ReactotronConfig';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" color={tintColor} size={20} />
    ),
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export { Home };
