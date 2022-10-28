import axios from 'axios';

export const FetchPokemon = id => {
  const url = process.env.REACT_APP_POKEMON_URL + `api/v2/pokemon/${id}`;
  return axios.get(url);
};
