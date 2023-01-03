import { ReactNode } from "react";
import React, { createContext, useContext } from "react";
import { usePokemonSource } from "./hooks/usePokemonFetch";

/**
 * 

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
