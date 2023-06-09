import axios from 'axios';
import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setType } from '../reducers/reducers';
import { useGetTypePokemons } from '../hooks/useGetTypePokemons';

export const FiltertType = () => {
  const allTypes = useGetTypePokemons();
  const dispatch = useDispatch();

  const onFilterHandler = (name: string, e: MouseEvent<HTMLElement>) => {
    const type = document.querySelectorAll('.type');

    for (const item of type) {
      item === e.target
        ? item.classList.toggle('active')
        : item.classList.remove('active');
    }
    const el = e.target as Element;
    el.classList.contains('active')
      ? dispatch(setType(name))
      : dispatch(setType(''));
  };

  return (
    <div className="pokemons__filter">
      {allTypes.map(({ name }: { name: string }, index: number) => {
        return (
          <span
            className={`type ${name}`}
            key={index + 1}
            onClick={(e) => onFilterHandler(name, e)}
          >
            {name}
          </span>
        );
      })}
    </div>
  );
};
