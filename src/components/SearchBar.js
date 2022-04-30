//styles
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './SearchBar.css'

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        //history.push(`/pokemon/${term}`)
        navigate(`/pokemon/${term}`)
    }

    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <input
                className='input' 
                type="text" 
                id="search"
                onChange={(e) => setTerm(e.target.value)}
                required
                />
            </form>
        </div>
    )
}