//styles
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        history.push(`/pokemon/${term}`)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"> Search </label>
                <input 
                type="text" 
                id="search"
                onChange={(e) => setTerm(e.target.value)}
                required
                />
            </form>
        </div>
    )
}