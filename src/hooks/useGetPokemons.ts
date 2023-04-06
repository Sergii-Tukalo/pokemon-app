import { PokemonType, stateReducer } from './../types/types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import {
  setCountPokemons,
  setFetching,
  setPokemons,
} from '../reducers/reducers';
import { useLocation } from 'react-router-dom';

export const useGetPokemons = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: stateReducer) => state.pokemons);
  const itemsOnPage = 20;

  const numberOfPage =
    useLocation().search === ''
      ? (currentPage - 1) * itemsOnPage
      : parseInt(useLocation().search.split('=')[1].split('&')[0]);

  const defUrl = `https://pokeapi.co/api/v2/pokemon?offset=${numberOfPage}&limit=${itemsOnPage}`;

  const getPokemons = async () => {
    dispatch(setFetching(true));
    const arr = [];
    const res = await axios.get(defUrl);
    dispatch(setCountPokemons(res.data.count));
    try {
      for (const item of res.data.results) {
        const res = await axios.get(item.url);
        arr.push({
          id: res.data.id,
          name: res.data.name,
          types: res.data.types[0].type.name,
          img: res.data.sprites.front_default,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
    dispatch(setPokemons(arr));
    dispatch(setFetching(false));
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  const data = useSelector((state: stateReducer) => state.pokemons);
  return data;
};
