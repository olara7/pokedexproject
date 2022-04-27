import { useState } from "react"
import { useFetch } from './hooks/useFetch'

//styles

export default function PokemonList() {
    const[url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    const { data: pokemon, isPending, error} = useFetch(url)

    const[allPokemon, setAllPokemon] = useState(pokemon)

    return (
        <div className="container">
          <div className='pokemon-list'>
            <h3> Pokemon List</h3>
            <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=100&offset=251')}>
                Gen 3
            </button>
            {isPending && <div> Loading Pokemon... </div>}
            {error && <div> {error} </div>}
            <ul>
              {pokemon && pokemon.map((pokemon,index) =>(
                <li key={index} >
                  <h3> {pokemon.name} </h3>
                  <h3> {pokemon.url} </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

}