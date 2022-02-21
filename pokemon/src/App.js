import React, { useState, useEffect } from 'react'
import axios from "axios"
import PokemonList from './PokemonList'
import Pagination from './Pagination'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setLoading(false)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
      })
    return() => {
      cancel()
    }
  }, [currentUrl])
  
  function gotoNextPage() {
    setCurrentUrl(nextUrl)
  }
  function gotoPrevPage() {
    setCurrentUrl(prevUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        n={nextUrl ? gotoNextPage : null}
        p={prevUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
