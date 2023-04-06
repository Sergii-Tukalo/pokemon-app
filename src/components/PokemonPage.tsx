import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { PokemonType } from '../types/types';
import { TextField } from '@mui/material';
import { FiltertType } from './FiltertType';
import { PaginationElement } from './PaginationElement';
import { useGetAllPokemons } from '../hooks/useGetAllPokemons';

export const PokemonPage = () => {
  const { pokemons, isFetching, type, countPokemons, currentPage } =
    useGetPokemons();
  const dataAll = useGetAllPokemons();
  const [search, setSearch] = useState('');

  return (
    <main className="main">
      <div className="search__wrapper">
        <form action="#">
          <TextField
            id="standard-basic"
            label="search"
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <FiltertType />

      <ul className="pokemons__list">
        {isFetching ? (
          <div
            className="spinner-border"
            role="status"
          ></div>
        ) : (
          <>
            {(search === '' ? pokemons : dataAll).map(
              ({ id, name, img, types }: PokemonType, index: number) => {
                if (!type || type === types) {
                  //filter by type
                  if (search === '' || name.includes(search)) {
                    //filter by search
                    return (
                      <li
                        key={id}
                        className="pokemons__item"
                      >
                        <Link
                          to={`/pokemon/${id}`}
                          className="pokemons__link"
                          key={index + 1}
                        >
                          <div className={`pokemons__type ${types}`}>
                            {types}
                          </div>
                          <img
                            loading="lazy"
                            className="pokemons__img"
                            src={img ? img : '../img.png'}
                            alt=""
                          />
                          <div className="pokemons__name">{name}</div>
                        </Link>
                      </li>
                    );
                  }
                }
              }
            )}
          </>
        )}
      </ul>
      {isFetching ||
        (!search && (
          <PaginationElement
            countPokemons={countPokemons}
            currentPage={currentPage}
          />
        ))}
    </main>
  );
};
