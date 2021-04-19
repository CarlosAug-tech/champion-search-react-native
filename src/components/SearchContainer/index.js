import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Input} from './styles';

export default function SearchContainer({
  setSearchChampionName,
  searchChampionName,
}) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Pesquise pelo nome do campeão"
        onChangeText={text => setSearchChampionName(text)}
        value={searchChampionName}
      />
      <Icon
        name="search"
        size={25}
        style={{
          position: 'absolute',
          top: 12,
          right: 5,
        }}
      />
    </Container>
  );
}
