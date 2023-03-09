import {useState, useEffect} from 'react';

const PokeSearchBox = (props) => {
    // Input search
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        // Get input value from "event"
        setInputValue(event.target.value);
    };

    const [pokemonSearchInput, setPokemonSearchInput] = useState([]);

    console.log('prop: '+props);

    const searchClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`).then((response) => {
            if (response.ok) {
              return response.json();
            }
            setPokemonSearchInput({name: 'Pokemon not found'});
            throw new Error('Something went wrong');
          })
          .then((responseJson) => {
            // Do something with the response
            setPokemonSearchInput(responseJson);
            console.log(responseJson);
          })
          .catch((error) => {
            setPokemonSearchInput({name: 'Pokemon not found'});
            console.log(error);
          });
        }

        console.log(pokemonSearchInput);        
    
    return(
        <div>
            <div class="input-group mb-3 search-container">
                <input type="text" id="inputValue" name="inputValue" class="form-control" placeholder="Enter pokemon name" onChange={handleInputChange}/>
                <div class="input-group-append">
                    <button class="btn btn-primary" onClick={searchClick} type="button">Search</button>                
                </div>
            </div>
            <div class="search-container text-center text-light bg-dark">
                <h2>{pokemonSearchInput.name}</h2>
                <img src={pokemonSearchInput.id > 0 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonSearchInput.id}.svg` : `../images/pokeball.png`} class="card-img-top pokemon-image" alt={pokemonSearchInput.name}/>
            </div>
        </div>        

    );
}

export default PokeSearchBox;