import React, {useCallback} from 'react';

import classChampionsData from '../../services/classchampions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Content, ClassMenu, ClassBtn, ClassImage} from './styles';

export default function ClassContainer({
  classChampionName,
  setClassChampionName,
}) {
  const handleClassChampion = useCallback(
    name => {
      setClassChampionName(name);
    },
    [setClassChampionName],
  );

  return (
    <Container>
      <Content>
        <ClassMenu>
          {classChampionsData.map(classChampion => (
            <>
              {classChampion.id === '' || classChampion.id === 'favorites' ? (
                <>
                  {classChampion.name === 'Favoritos' ? (
                    <ClassBtn
                      key={classChampion.name}
                      onPress={() => handleClassChampion(classChampion.id)}>
                      <Icon
                        name="grade"
                        size={25}
                        color={
                          classChampionName === classChampion.id
                            ? '#FFD700'
                            : '#6f87b9'
                        }
                      />
                    </ClassBtn>
                  ) : (
                    <ClassBtn
                      key={classChampion.name}
                      onPress={() => handleClassChampion(classChampion.id)}>
                      <Icon
                        name="dashboard"
                        size={25}
                        color={
                          classChampionName === classChampion.id
                            ? '#FFD700'
                            : '#6f87b9'
                        }
                      />
                    </ClassBtn>
                  )}
                </>
              ) : (
                <ClassBtn
                  key={classChampion.name}
                  onPress={() => handleClassChampion(classChampion.id)}>
                  {classChampion.id !== '' &&
                    classChampion.id !== 'favorites' && (
                      <ClassImage
                        source={
                          classChampionName === classChampion.id
                            ? classChampion.urlActive
                            : classChampion.url
                        }
                      />
                    )}
                </ClassBtn>
              )}
            </>
          ))}
        </ClassMenu>
      </Content>
    </Container>
  );
}
