import './App.css';
import PokeSearchBox from './components/PokeSearchBox';
import PokemonsDeck from './components/PokemonsDeck';

function App() {

  console.log('flag 01');
  return (
    <div className="App" class="bg-dark main-container">

      <PokeSearchBox />
      <hr class="hr hr-blurry poke-divider" />
      <div>
        <PokemonsDeck />
      </div>
    </div>
  );
}

export default App;
