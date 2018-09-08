import styled from 'styled-components/native';
import { colors, metrics } from 'styles';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${colors.black};
  padding-top: ${metrics.basePadding * 5};
  padding-bottom: ${metrics.basePadding};
`;
