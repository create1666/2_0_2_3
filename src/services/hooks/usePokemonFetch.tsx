import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemonImage } from "../utils/fetchallpokemon";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

export const usePokemonSource = (): Pokemon[] => {
  const [pokemondata, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getAllPokemon(pokemonUrl);

      let val = response.results;
      // console.log("val", val);
      // const a = performance.now();
      let imagArr = await Promise.all(
        val.map((imgdk: any) => getPokemonImage(imgdk.url))
      );
      setPokemonList(imagArr);
      // const imagArr: any[] = [];
      // for (const key of val) {
      //   let vall = await getPokemonImage(key.url);
      //   console.log("forOf", vall);
      //   imagArr.concat([vall]);
      // }

      // await usePokemonImg(response.results);
      // console.log(imagArr);
      // const b = performance.now();
      // console.log(b - a, "time diff");
    };

    fetchProduct();
  }, []);

  return pokemondata;
};
