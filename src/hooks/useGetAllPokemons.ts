import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { setAllPokemons, setFetching } from '../reducers/reducers';
import { PokemonType, stateReducer } from '../types/types';

const defUrl = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=100';

export const useGetAllPokemons = () => {
  const dispatch = useDispatch();

  const getAllPokemons = async () => {
    dispatch(setFetching(true));
    const arr: PokemonType[] = [];
    const res = await axios.get(defUrl);
    try {
      for (const item of res.data.results) {
        const data = await axios.get(item.url);
        arr.push({
          id: data.data.id,
          name: data.data.name,
          types: data.data.types[0].type.name,
          img: data.data.sprites.front_default,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
    dispatch(setAllPokemons(arr));
    dispatch(setFetching(false));
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const data = useSelector((state: stateReducer) => state.pokemons.allPokemons);
  return data;
};
