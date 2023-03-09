import {useState, useEffect} from 'react';

const PokemonCard = ({pokemon, key}) => {
    var imageExists = require('image-exists');
    console.log({pokemon});
    const addImageClick = () => {
      console.log("add image");
    };

    const [pokemonImageUrl, setPokemonImageUrl] = useState('');

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        // Temporal: to get image from local file
        imageExists(`../images/${pokemon.name}.png`, function(exists) {
            if (exists) {
            setPokemonImageUrl(`../images/${pokemon.name}.png`);
            }
            else {
            setPokemonImageUrl(`../images/pokeball.png`);
            }
        });
        // Get pokemon data
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`).then((response) => {
            if (response.ok) {
              return response.json();
            }
            setPokemonData({name: 'Pokemon not found', id:-1});
            throw new Error('Something went wrong');
          })
          .then((responseJson) => {
            // Do something with the response
            setPokemonData(responseJson);
            console.log(responseJson);
          })
          .catch((error) => {
            setPokemonData({name: 'Pokemon not found', id:-1});
            console.log(error);
          });
    }, []); 

    return(
        <div class="col">
            <div class="card h-100">
                <button type="button" class="btn image-container" onClick={addImageClick} data-toggle="tooltip" data-placement="top" title="Update Image">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} class="card-img-top pokemon-image" alt="..."/>
                    
                    <div class="update-container">
                        <div class="update-text">Update Image</div>
                    </div>
                </button>
                
                <div class="card-body">
                    <h5 class="card-title text-center">{pokemonData.name}</h5>
                    {/* <p class="card-text">Pokemon description.</p> */}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;