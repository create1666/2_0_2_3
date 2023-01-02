import { ReactNode, useCallback } from "react";
import React, { useState, useEffect, createContext, useContext } from "react"; /// <reference types="react/experimental" />
import { getAllPokemon, getPokemonImage } from "./hooks/fetchallpokemon";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface ImageData {
  url: string;
}

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const usePokemonSource = (): Pokemon[] => {
  const [pokemondata, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getAllPokemon(pokemonUrl);
      console.log(response);

      let val = response.results;
      console.log("val", val);
      const a = performance.now();
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
      console.log(imagArr);
      const b = performance.now();
      console.log(b - a, "time diff");
    };

    fetchProduct();
  }, []);

  return pokemondata;
};

const usePokemonImg = async (imgData: []) => {
  const [pokemonImagdata, setPokemonImgList] = useState<ImageData[]>([]);

  //  for (const iterator of object) {

  //   }

  let finalImg = await Promise.all(
    imgData.map((imgdk) => getPokemonImage(imgdk))
  );

  useCallback(() => {
    setPokemonImgList(finalImg);
  }, []);

  return pokemonImagdata;
};

/**
 * 
 create a global context that holds the initial state or 
that initialize a global state { pokemondata: [] as Pokemon[] } 
*/
const PokemonCreateCtx = createContext<
  ReturnType<typeof usePokemonSource> | undefined
>(undefined); //

/**
 * usePokemon-hook
 *
 * */
export const usePokemon = () => {
  return useContext(PokemonCreateCtx)!;
};

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PokemonCreateCtx.Provider value={usePokemonSource()}>
      {children}
    </PokemonCreateCtx.Provider>
  );
};
