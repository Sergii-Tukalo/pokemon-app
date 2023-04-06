export type PokemonType = {
  id: number;
  name: string;
  types: string;
  img: string;
};

export type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type Moves = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  };
};

export type PokemonDetails = {
  id: number;
  name: string;
  moves: Moves[];
  stats: Stats[];
  img: string;
};

export type initialState = {
  pokemons: PokemonType[];
  currentPage: number;
  countPokemons: number;
  isFetching: boolean;
  allTypes: [];
  searchValue: string;
  type: string;
  allPokemons: PokemonType[];
  pokemonDetails: PokemonDetails;
};
export type stateReducer = {
  pokemons: initialState;
};
