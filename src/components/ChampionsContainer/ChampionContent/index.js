import React from 'react';
import {ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, BtnFavorite} from './styles';

export default function ChampionContent({
  champions,
  handleFavorite,
  champFavorite,
}) {
  return (
    <Container>
      <ImageBackground
        source={{uri: champions.icon}}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
      <BtnFavorite onPress={() => handleFavorite(champions.id)}>
        <Icon
          name="grade"
          size={20}
          color={champFavorite.length > 0 ? '#FFD700' : '#fff'}
        />
      </BtnFavorite>
    </Container>
  );
}
