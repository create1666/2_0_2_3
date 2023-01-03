import { usePokemon } from "../services/storeProvider";

export const PokemonList = () => {
  const pokemondata = usePokemon();

  return (
    <>
      <ul className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-3"}>
        {pokemondata.map((list, index) => (
          <li
            key={index}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg m-8 shadow-2xl mr-4 ml-4 p-8"
          >
            <div className="flex-1 flex flex-col">
              <img
                className="w-32 h-32 mx-auto flex-shrink-0 bg-slate-800 rounded-full"
                src={list.sprites.front_default}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {list.name}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}; // child component
