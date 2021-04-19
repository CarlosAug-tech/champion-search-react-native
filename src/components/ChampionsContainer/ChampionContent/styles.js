import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 70px;
  height: 70px;
  margin: 10px;
  position: relative;
`;

export const BtnFavorite = styled(RectButton)`
  z-index: 1;
  top: -7px;
  right: -7px;
  position: absolute;
`;
