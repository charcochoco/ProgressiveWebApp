import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const URL = `https://pokeapi.co/api/v2/pokemon/`;

function PokemonDetail(props){
    const params = useParams();
    const name = params['name'];
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      asyncLoadData()
    }, []);

    async function asyncLoadData(){
        const response = await fetch(URL + name);
        const data = await response.json();
        
        setPokemon({ id: data.id, name: name, height: data.height, weight: data.weight, types: data.types });
      }

    return(
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {pokemon && (
            <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={`Image of ${pokemon.name}`}
                style={{ width: '200px', height: 'auto' }}
            />
            <div style={{ marginLeft: '20px' }}>
                <h2>{`Name: ${pokemon.name}`}</h2>
                <p>{`ID: ${pokemon.id}`}</p>
                <p>{`Height: ${pokemon.height}`}</p>
                <p>{`Weight: ${pokemon.weight}`}</p>
                <p>{`Types: ${pokemon.types}`}</p>
            </div>
            </>
        )}
        </div>
    )
}

export default PokemonDetail