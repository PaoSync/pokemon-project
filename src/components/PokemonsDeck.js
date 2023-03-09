import {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

const PokemonsDeck = (props) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((res) => setPokemons(res.results));
    }, []);  

    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <h2 class="text-primary">Pokemon<br></br>List</h2>
            </div>
            
            {pokemons?.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.url} />
            ))}
        </div>
    );
}

export default PokemonsDeck;