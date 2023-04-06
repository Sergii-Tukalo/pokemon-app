import { stateReducer } from './../types/types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { setTypes } from '../reducers/reducers';

export const useGetTypePokemons = () => {
  const dispatch = useDispatch();
  const getTypesPokemons = async () => {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/type');
      dispatch(setTypes(res.data.results));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTypesPokemons();
  }, []);

  const data = useSelector((state: stateReducer) => state.pokemons.allTypes);
  return data;
};
