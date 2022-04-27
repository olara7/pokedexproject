import { useState } from 'react'
import { useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'

function Home() {
  const [allPokemons, setAllPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')

  const getAllPokemons = async () => {

    const res = await fetch(url)
    const data = await res.json()
    
    function createPokemonObject (results) {
      setIsLoading(true)
      results.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)

      })
    }
    createPokemonObject(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    setAllPokemons([])
    getAllPokemons() 
    console.log(allPokemons)

  }, [url])

  return (
    <div className="app-container">
      <h1> Pokemon Evolution </h1>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=151')}>
        Gen 1
      </button>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')}>
        Gen 2
      </button>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')}>
        Gen 3
      </button>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=107&offset=386')}>
        Gen 4
      </button>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=156&offset=493')}>
        Gen 5
      </button>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon?limit=72&offset=649')}>
        Gen 6
      </button>
        <div className='pokemon-container'>
        <div className='all-container'>
          { allPokemons.map((pokemon, index) => 
            <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
