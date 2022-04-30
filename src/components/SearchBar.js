//styles
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './SearchBar.css'

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        history.push(`/pokemon/${term}`)
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