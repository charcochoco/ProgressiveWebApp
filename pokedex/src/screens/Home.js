import { useEffect, useState } from 'react';

import {useNavigate, Outlet} from 'react-router-dom'

import Generations from '../data/generations.js';

const URL = `https://pokeapi.co/api/v2/generation/`;

function Home() {
  const navigate = useNavigate()

  const [pokedex, setPokedex] = useState([]);

  const ulStyle = {
    listStyleType: 'none',
  };

  async function asyncLoadData(generationId){
    const response = await fetch(URL + generationId);
    const data = await response.json();
    const firstPokemon = data.pokemon_species.slice(0, 5);

    const pokemonData = await Promise.all(
        firstPokemon.map(async (pokemon) => {
        const index = await getIndexFromUrl(pokemon.url);
        const image = await getImageSrcFromIndex(index);

        return {
          id: pokemon.id,
          name: pokemon.name,
          image: image,
        };
      })
    );

    setPokedex((prevPokedex) => [...prevPokedex, { id: generationId, pokemon: pokemonData }]);
  }
  
  useEffect(() => {
    Generations.forEach((generation) => {
      asyncLoadData(generation.id);
    });
  }, []);

  function getImageSrcFromIndex(index){   
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`; 
  } 
  
  function getIndexFromUrl(url){ 
    const parsedUrl = url.split('/');     
    return parsedUrl[parsedUrl.length - 2];
  }

  function showMore(){ 
    
  }


//     const [generation, setGeneration] = useState([]);

//   async function fetchData(){
//     const response = await fetch(URL);
//     const data = await response.json();
//     setGeneration(data);
//   }

//   useEffect(() => {
//     fetchData()
//   })

  if(pokedex.length == 0){
    return(
        <div className='d-flex justify-content-center mt-5'>
            <div className='spinner-border'></div>
        </div>
    )
  }

  return (
    <div className='text-center'>
        {pokedex.map((generationData, indexGeneration) => (
          <div key={indexGeneration}>
            <h4>Génération {generationData.id}</h4>
            <ul className='d-flex align-items-center justify-content-center' style={ulStyle}>
              {generationData.pokemon.map((pokemon, indexPokemon) => (
                <li className='border m-1' key={indexPokemon}>
                  <div className='row'>
                    <img src={pokemon.image} alt={pokemon.name} />
                  </div>
                  <div className='row'>
                    {/* <a href=''>{pokemon.name}</a> */}
                    <a 
                      href=""
                      onClick={() => navigate(`/${pokemon.name}`)}
                    >
                      {pokemon.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <button className='btn btn-primary mb-3' onClick={showMore}>
                  Afficher plus
              </button>
          </div>
        ))}
        <Outlet />
    </div>
  );
}

export default Home