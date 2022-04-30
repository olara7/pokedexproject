import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

//styles
import './Pokemon.css'
import PokemonSpriteEvolution from '../components/PokemonSpriteEvolution'


export default function Pokemon() {
    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/` + name
    const {error, isPending, data: pokemon} = useFetch(url)

    const type = pokemon?.types[0]?.type?.name
    const type2 = pokemon?.types[1]?.type?.name

    const typeStyle = `type-container ${type}`
    const typeStyle2 = `type-container ${type2}`
    
    return (
        <div className='pokemon'>
            {error && <p> {error} </p>}
            {isPending && <p> Loading...</p>}
            {pokemon && 
            <div> 
                <h3 className='pokemon-name'> {pokemon.name} </h3>
                <h3> #{pokemon.id} </h3>
                <img className='pokemon-image' src={pokemon.sprites.other.home.front_default} alt="pokemon image" />
                <img className='pokemon-image' src={pokemon.sprites.other.home.front_shiny} alt="pokemon shiny image" />
                <div className='pokemon-details'>
                    <small className={typeStyle}> {type} </small>
                    {type2 && <small className={typeStyle2}> {type2}</small>}
                    <p> <b>Weight:</b> {pokemon.weight} </p>
                    <p> <b> Height: </b> {pokemon.height} </p>
                    <p> <b> Ability: </b> {pokemon.abilities[0].ability.name.toUpperCase()} </p> 
                    {pokemon.abilities[1]?.ability?.name && <p> <b> Hidden Ability: </b> {pokemon.abilities[1].ability.name.toUpperCase()} </p>}  
                </div>
                <div className="pokemon-details">
                    <h3> Base Stats </h3>
                    <p> <b> HP: </b> {pokemon.stats[0].base_stat} </p>
                    <p> <b> Attack: </b> {pokemon.stats[1].base_stat} </p>
                    <p> <b> Defense: </b> {pokemon.stats[2].base_stat} </p>
                    <p> <b> Special Attack: </b> {pokemon.stats[3].base_stat} </p>
                    <p> <b> Special Defense: </b> {pokemon.stats[4].base_stat} </p>
                    <p> <b> Speed: </b> {pokemon.stats[5].base_stat} </p>
                </div>
                <PokemonSpriteEvolution pokemon={pokemon} />
            </div>}

        </div>
    )
}