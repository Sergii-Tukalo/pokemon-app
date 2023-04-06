import { PokemonDetails, PokemonType } from '../types/types';

const GET_DATA = 'GET_DATA';
const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
const LOADING = 'LOADING';
const CURRENT_PAGE = 'CURRENT_PAGE';
const ADD_TYPES = 'ADD_TYPES';
const ADD_TYPE = 'ADD_TYPE';
const COUNT_POKEMONS = 'COUNT_POKEMONS';
const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
const SEARCH_VALUE = 'SEARCH_VALUE';

const initialState = {
  pokemons: [],
  currentPage: 1,
  countPokemons: 0,
  isFetching: true,
  allTypes: [],
  searchValue: '',
  type: '',
  allPokemons: [],
  pokemonDetails: {
    id: 1,
    name: '',
    moves: [],
    stats: [],
    img: '',
  },
};

export default function reducers(state = initialState, action: any) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMON_DETAILS:
      return {
        ...state,
        pokemonDetails: action.payload,
        isFetching: true,
      };
    case LOADING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
      };
    case ADD_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };
    case ADD_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case COUNT_POKEMONS:
      return {
        ...state,
        countPokemons: action.payload,
      };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
}

export const setPokemons = (pokemons: PokemonType[]) => ({
  type: GET_DATA,
  payload: pokemons,
});

export const setPokemonDetails = (pokemonDetails: PokemonDetails) => ({
  type: GET_POKEMON_DETAILS,
  payload: pokemonDetails,
});

export const setFetching = (loading: boolean) => ({
  type: LOADING,
  payload: loading,
});

export const setCurrentPage = (page: number) => ({
  type: CURRENT_PAGE,
  payload: page,
});

export const setTypes = (type: string[]) => ({
  type: ADD_TYPES,
  payload: type,
});

export const setType = (type: string) => ({
  type: ADD_TYPE,
  payload: type,
});

export const setCountPokemons = (type: string) => ({
  type: COUNT_POKEMONS,
  payload: type,
});

export const setAllPokemons = (pokemons: PokemonType[]) => ({
  type: GET_ALL_POKEMONS,
  payload: pokemons,
});

export const setSearchValue = (searchValue: string) => ({
  type: SEARCH_VALUE,
  payload: searchValue,
});
