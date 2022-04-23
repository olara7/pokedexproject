import { useState } from "react"
import { useFetch } from './useFetch'

//styles

export default function PokemonList() {
    const[url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    const { data: pokemon, isPending, error} = useFetch(url)

    console.log(pokemon)

    return (
        <div className="App">
          <div className='pokemon-list'>
            <h3> Pokemon List</h3>
            {isPending && <div> Loading Pokemon... </div>}
            {error && <div> {error} </div>}
            <ul>
              {pokemon && pokemon.map((pokemon,index) =>(
                <li key={index} >
                  <h3> {pokemon.name} </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

}