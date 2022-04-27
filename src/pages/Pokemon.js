import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

//styles
import './Pokemon.css'
import PokemonSpriteEvolution from '../components/PokemonSpriteEvolution'


export default function Pokemon() {
    const { name } = useParams()

    const [isLoading, setIsLoading] = useState(false)

    const url = `https://pokeapi.co/api/v2/pokemon/` + name
    const {error, isPending, data: pokemon} = useFetch(url)
    
    
    return (
        <div className='pokemon'>
            {error && <p> {error} </p>}
            {isPending && <p> Loading...</p>}
            {pokemon && 
            <div> 
                <h3 className='pokemon-name'> {pokemon.name} </h3>
                <img className='pokemon-image' src={pokemon.sprites.other.home.front_default} alt="pokemon image" />
                <img className='pokemon-image' src={pokemon.sprites.other.home.front_shiny} alt="pokemon shiny image" />
                <p> Weight: {pokemon.weight} </p>
                <p> Height: {pokemon.height} </p>
                <PokemonSpriteEvolution pokemon={pokemon} />
            </div>}

        </div>
    )
}