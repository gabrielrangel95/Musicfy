import React, { Component } from 'react';
import 'config/ReactotronConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomHeader } from 'components';
import { HomeContainer } from './HomeStyle';

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" color={tintColor} size={24} />
    ),
  };

  render() {
    return (
      <HomeContainer>
        <CustomHeader title="Home" />
      </HomeContainer>
    );
  }
}

export { Home };
