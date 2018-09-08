import styled from 'styled-components/native';
import { metrics, colors } from 'styles';

export const AlbumContainer = styled.View`
  display: flex;
  height: ${metrics.screenHeight * 0.2};
  width: ${metrics.screenWidth * 0.4};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
`;

export const AlbumImage = styled.Image`
  height: ${metrics.screenHeight * 0.2};
  width: ${metrics.screenWidth * 0.4};
  margin-bottom: ${metrics.basePadding / 2};
`;

export const Title = styled.Text`
  font-size: 12;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  margin-bottom: ${metrics.basePadding / 4};
`;

export const Followers = styled.Text`
  font-size: 10;
  color: ${colors.regular};
  text-align: center;
`;

