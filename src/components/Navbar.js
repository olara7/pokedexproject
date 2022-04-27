import { Link } from 'react-router-dom'


//styles

//components
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to='/' onClick={() => setTimeout(() => window.location.reload(), 300)} >
                    <h3> Pokedex </h3>
                </Link>
                <SearchBar />
            </nav>
        </div>
    )
}