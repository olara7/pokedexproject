import { Link } from 'react-router-dom'

const PokemonCard = ({ id, name, image, type}) => {

    const style = `thumb-container ${type}`

    return (
        <div className={style}>
            <div className='number'>
                <small> {id} </small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <Link to={`/pokemon/${name}`} onClick={() => setTimeout(() => window.location.reload(), 300)}>
                    {name}
                </Link>
                <small> {type} </small>
            </div>
        </div>
    )
}

export default PokemonCard