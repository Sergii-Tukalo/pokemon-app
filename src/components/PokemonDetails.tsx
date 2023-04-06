import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPokemonDetails } from '../hooks/useGetPokemonDetails';
import { Moves, Stats, stateReducer } from '../types/types';

export const PokemonDetails = () => {
  const { id } = useParams();

  const { pokemonDetails: data } = useGetPokemonDetails(id);

  const loading = useSelector(
    (state: stateReducer) => state.pokemons.isFetching
  );
  return (
    <main className="pokemon main">
      {loading ? (
        <div
          className="spinner-border"
          role="status"
        ></div>
      ) : (
        <div className="pokemon__inner">
          <div className="pokemon__img-wrapper">
            <h1 className="pokemons__name">{data.name}</h1>
            <img
              className="pokemons__img"
              src={data.img}
              alt={data.name}
            />
          </div>
          <div className="d-flex">
            <ul>
              {data.moves.map((item: Moves, index: number) => {
                return <li key={index}>{item.move.name}</li>;
              })}
            </ul>
            <ul>
              <h4>Stats</h4>
              {data.stats.map((item: Stats, index: number) => {
                return <li key={index}>{item.base_stat} </li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};
