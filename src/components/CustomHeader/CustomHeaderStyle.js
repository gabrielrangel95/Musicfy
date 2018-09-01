import styled from 'styled-components/native';
import { colors, metrics } from 'styles';
import { Header } from 'react-navigation';

const HEADER_HEIGHT = Header.HEIGHT;

export const Container = styled.SafeAreaView`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  width: ${metrics.screenWidth};
  background-color: ${colors.secondary};
`;

export const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${colors.white};
`;
