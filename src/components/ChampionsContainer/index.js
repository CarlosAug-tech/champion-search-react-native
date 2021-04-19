import React, {useState, useEffect, useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import dataChampions from '../../services/champions.json';
import ChampionContent from './ChampionContent';

import {Container} from './styles';

export default function ChampionsContainer({
  searchChampionName,
  classChampionName,
}) {
  const [filterChampions, setFilterChampions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadStorageData() {
      const champsFavorites = await AsyncStorage.getItem('@ChampionFavorite:');

      if (champsFavorites) {
        return setFavorites(JSON.parse(champsFavorites));
      }

      return [];
    }
    loadStorageData();
  }, []);

  async function handleFavorite(id) {
    try {
      const championFavIndex =
        favorites.length > 0 && favorites.find(c => c.id === id);

      if (championFavIndex) {
        setFavorites(state =>
          state.filter(champion => champion !== championFavIndex),
        );
        return;
      }

      setFavorites(state => [
        ...state,
        filterChampions.find(champion => champion.id === id),
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function handleStorage() {
      await AsyncStorage.setItem(
        '@ChampionFavorite:',
        JSON.stringify(favorites),
      );
    }
    handleStorage();
  }, [favorites]);

  const searchChampions = useCallback(() => {
    try {
      setLoading(true);
      if (searchChampionName) {
        setFilterChampions(
          dataChampions.filter(champion =>
            champion.name
              .toLowerCase()
              .includes(searchChampionName.toLowerCase()),
          ),
        );
      } else if (classChampionName) {
        if (classChampionName === 'favorites') {
          setFilterChampions(
            dataChampions.filter(champion =>
              favorites.find(c => c.id === champion.id),
            ),
          );
          return;
        }

        setFilterChampions(
          dataChampions.filter(champion =>
            champion.tags.find(c => c === classChampionName),
          ),
        );
      } else {
        setFilterChampions(dataChampions);
      }
    } catch (err) {
      return console.log(err);
    } finally {
      return setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [searchChampionName, classChampionName]);

  useEffect(() => {
    searchChampions();
  }, [searchChampions]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Container>
          {filterChampions.map(champions => (
            <ChampionContent
              key={champions.id}
              champions={champions}
              handleFavorite={handleFavorite}
              champFavorite={favorites.filter(c => c.id === champions.id)}
            />
          ))}
        </Container>
      )}
    </>
  );
}
