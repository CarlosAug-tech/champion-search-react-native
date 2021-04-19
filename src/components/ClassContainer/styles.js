import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Content = styled.View``;

export const ClassMenu = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ClassBtn = styled(RectButton)`
  display: flex;
  padding: 5px;
  margin-bottom: 5px;
`;

export const ClassImage = styled.Image`
  width: 30px;
  height: 30px;
`;
