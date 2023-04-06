import { setFetching, setPokemonDetails } from './../reducers/reducers';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { stateReducer } from '../types/types';

export const useGetPokemonDetails = (id: string | undefined) => {
  const dispatch = useDispatch();

  const getPokemonDetails = async () => {
    dispatch(setFetching(true));
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const obj = {
        id: res.data.id,
        name: res.data.name,
        moves: res.data.moves,
        stats: res.data.stats,
        img: res.data.sprites.front_default,
      };
      dispatch(setPokemonDetails(obj));
      dispatch(setFetching(false));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  const data = useSelector((state: stateReducer) => state.pokemons);
  console.log(data);
  return data;
};
