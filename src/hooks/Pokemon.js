import { useContext } from 'react';
import AppContext from '../context';
import { FetchPokemon as GetPokemon } from '../services';

export const usePokemon = () => {
  const { pokemons, setPokemons } = useContext(AppContext);

  const addPokemon = () => {
    // max id from array
    const maxId =
      pokemons.length > 0 ? Math.max(...pokemons.map(p => p.id)) : 0;
    GetPokemon(maxId + 1).then(res => {
      const pokemon = res.data;
      console.log(res.data);
      setPokemons([
        ...pokemons,
        {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          type: pokemon.types.map(t => t.type.name).join(', '),
        },
      ]);
    });
  };


  const editPokemon = (id, name) => {
    const newPokemons = pokemons.map(pokemon => {
      if (pokemon.id === id) {
        return {
          ...pokemon,
          name,
        };
      }
      return pokemon;
    });
    setPokemons(newPokemons);
  };

  const removePokemon = id => {
    setPokemons(pokemons.filter(pokemon => pokemon.id !== id));
  };

  return { pokemons, addPokemon, editPokemon, removePokemon };
};
