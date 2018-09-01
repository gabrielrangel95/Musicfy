import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Title,
} from './CustomHeaderStyle';

const CustomHeader = props => (
  <Container>
    <StatusBar barStyle="light-content" />
    <Title>{props.title}</Title>
  </Container>
);

export { CustomHeader };
