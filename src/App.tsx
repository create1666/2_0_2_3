import { PokemonProvider } from "./services/storeProvider";
import { PokemonList } from "./components/PokemonCard";
import "./index.css";
import { SearchInput } from "./components/SearchInput";

const App = () => {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-screen-2xl">
        <SearchInput />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
};

export default App;
