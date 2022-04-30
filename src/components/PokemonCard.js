import { Link } from 'react-router-dom'

import './PokemonCard.css'

const PokemonCard = ({ id, name, image, types }) => {

    const style = `thumb-container ${types[0].type.name}`

    const type = types[0].type.name
    const type2 = types[1]?.type?.name

    const typeStyle = `type-container ${type}`
    const typeStyle2 = `type-container ${type2}`

    return (
        <div className={style}>
            <div className='number'>
                <small> {id} </small>
            </div>
            <img className='pokemon-thumbnail' src={image} alt={name}/>
            <div className="detail-wrapper">
                <Link to={`/pokemon/${name}`}>
                    <small className='pokemon-link-name'> {name} </small>
                </Link>
                <div className='type-thumbnails'>
                    <small className={typeStyle}> {type} </small>
                    {type2 && <small className={typeStyle2}> {type2} </small>}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard