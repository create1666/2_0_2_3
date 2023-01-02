import { PokemonProvider } from "./services/store";
import { PokemonList } from "./PokemonCard";
import "./index.css";

const App = () => {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-screen-2xl">
        <PokemonList />
      </div>
    </PokemonProvider>
  );
};

export default App;
