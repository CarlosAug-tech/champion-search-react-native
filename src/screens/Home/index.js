import React from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import ChampionsContainer from '../../components/ChampionsContainer';
import ClassContainer from '../../components/ClassContainer';
import SearchContainer from '../../components/SearchContainer';

import {Container, Logo} from './styles';

export default function Home() {
  const [searchChampionName, setSearchChampionName] = useState('');
  const [classChampionName, setClassChampionName] = useState('');

  return (
    <Container>
      <Logo
        source={require('../../assets/Images/logo.png')}
        style={{resizeMode: 'contain'}}
      />
      <SearchContainer
        searchChampionName={searchChampionName}
        setSearchChampionName={setSearchChampionName}
      />
      <ClassContainer
        classChampionName={classChampionName}
        setClassChampionName={setClassChampionName}
      />
      <ChampionsContainer
        searchChampionName={searchChampionName}
        classChampionName={classChampionName}
      />
    </Container>
  );
}
