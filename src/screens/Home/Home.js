import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { FlatList } from 'react-native';
import { CustomHeader } from 'components';
import { HomeContainer } from './HomeStyle';
import { AlbumCard } from './components';


const albums = [
  {
    id: 0,
    title: 'Hybrid Theory',
    author: 'Linkin Park',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg',
    fallowers: 21.560,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
  {
    id: 1,
    title: 'Greatest Hits',
    author: 'Foo Fighters',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg',
    fallowers: 321.690,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
  {
    id: 2,
    title: 'Live from Villa Mix',
    author: 'Alok',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg',
    fallowers: 152.266,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
  {
    id: 3,
    title: 'Hybrid Theory',
    author: 'Linkin Park',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg',
    fallowers: 544.180,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
  {
    id: 4,
    title: 'Live from Villa Mix',
    author: 'Alok',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg',
    fallowers: 14.380,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
  {
    id: 5,
    title: 'Greatest Hits',
    author: 'Foo Fighters',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg',
    fallowers: 225.950,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
  {
    id: 6,
    title: 'Hybrid Theory',
    author: 'Linkin Park',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg',
    fallowers: 428.976,
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/1.mp3',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/2.mp3',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/3.mp3',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/4.mp3',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
        file: 'https://s3-sa-east-1.amazonaws.com/gonative/5.mp3',
      },
    ],
  },
];

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" color={tintColor} size={24} />
    ),
  };

  _keyExtractor = item => item.id;

  renderItem = ({ item }) => (<AlbumCard item={item} />)

  render() {
    return (
      <HomeContainer>
        <CustomHeader title="Home" />
        <FlatList
          data={albums}
          renderItem={this.renderItem}
          horizontal
          keyExtractor={this.keyExtractor}
        />
      </HomeContainer>
    );
  }
}

export { Home };
