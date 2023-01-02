import { usePokemon } from "./services/store";

export const PokemonList = () => {
  const pokemondata = usePokemon();

  return (
    <>
      <ul
        className={
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  bg-red-200 "
        }
      >
        {pokemondata.map((list, index) => (
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg m-8 shadow-md mr-4 ml-4 p-8">
            <div className="flex-1 flex flex-col" key={index + 1}>
              <img src={list.sprites.front_default} alt="" />
              <h3>{list.name}</h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}; // child component
