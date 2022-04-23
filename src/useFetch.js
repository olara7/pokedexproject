import {useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true)

            try {
                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()
    
                setIsPending(false)
                setData(json.results)
                setError(null)
            } catch (err) { //
                if (err.name === "AbortError") {
                    console.log('the fetch was aborted')
                } else { //other error
                    setIsPending(false)
                    setError("Could not fetch data")
                    console.log(err.message)
                }
            }
        }

        fetchData()

        //this cleanup function is ran whenever the component that we're using this useEffect in unmounts
        return () => {
            controller.abort()
        }

    }, [url])

    return { data, isPending, error }
}