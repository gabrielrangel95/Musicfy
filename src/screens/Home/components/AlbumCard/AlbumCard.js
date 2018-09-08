import React from 'react';
import { AlbumImage, AlbumContainer, Title, Followers } from './AlbumCardStyle';

const AlbumCard = props => (
  <AlbumContainer>
    <AlbumImage source={{ uri: props.item.thumbnail }}/>
    <Title>{props.item.title}</Title>
    <Followers>{props.item.fallowers} FOLLOWERS</Followers>
  </AlbumContainer>
);

export { AlbumCard };
