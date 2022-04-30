
//styles
import './PokemonSpriteEvolution.css'

export default function PokemonSpriteEvolution({ pokemon }) {
    return (
        <div>
            <h2> Pokemon Sprite Evolution </h2>
        <div className="sprite-evo-container">
            <div className="sprite-container">
            <h5> Gen 1 </h5>
            {pokemon.sprites.versions["generation-i"].yellow.front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-i"].yellow.front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Yellow </h5>
            </div>

            <div className="sprite-container">
            <h5> Gen 2 </h5>
            {pokemon.sprites.versions["generation-ii"].crystal.front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-ii"].crystal.front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Crystal </h5>
            </div>

            <div className="sprite-container">
            <h5> Gen 3 </h5>
            {pokemon.sprites.versions["generation-iii"].emerald.front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-iii"].emerald.front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Emerald </h5>
            </div>

            <div className="sprite-container">
            <h5> Gen 4 </h5>
            {pokemon.sprites.versions["generation-iv"].platinum.front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-iv"].platinum.front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Platinum </h5>
            </div>

            <div className="sprite-container">
            <h5> Gen 5 </h5>
            {pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Black and White</h5>
            </div>

            <div className="sprite-container">
            <h5> Gen 6 </h5>
            {pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Omega Ruby and Alpha Sapphire </h5>
            </div>

            <div className="sprite-container">
            <h5> Gen 7 </h5>
            {pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default && 
            <img className="sprite-evo" src={pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default} alt="pokemon yellow sprite"></img>}
            <h5> Pokemon Ultra Sun and Ultra Moon</h5>
            </div>
        </div>
        </div>
    )
}