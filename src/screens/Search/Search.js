import React, { Component } from 'react';
import 'config/ReactotronConfig';
import { CustomHeader } from 'components';
import Icon from 'react-native-vector-icons/EvilIcons';
import { SearchContainer } from './SearchStyle';

class Search extends Component {
  static navigationOptions = {
    headerTitle: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" color={tintColor} size={20} />
    ),
  };

  render() {
    return (
      <SearchContainer>
        <CustomHeader title="Search" />
      </SearchContainer>
    );
  }
}

export { Search };
