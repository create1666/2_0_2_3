import axios from "axios";

export const getAllPokemon = (url: string) => {
  const response = axios.get(url).then((res) => {
    return res.data;
  });
  return response;
};

export const getPokemonImage = (url: string) => {
  const response = axios.get(url).then((res) => {
    return res.data;
  });
  return response;
};
