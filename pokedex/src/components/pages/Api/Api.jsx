import React, { useEffect, useState, useContext } from 'react'
import Pokemon from './Pokemon'
import FetchPokemons from './FetchPokemons'
import './Api.css'

function Api() {

  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
   
  useEffect(() => {
    FetchPokemons().then(result => {
      setItems(result.all)
      setNextUrl(result.next)
    })
  }, [])

  const loadMore = async () => {
    let nextPage = await FetchPokemons(nextUrl)
    setItems([...items, ...nextPage.all])
    setNextUrl(nextPage.next)
  }


  return (
    <>
    <div className='pokemons__list' >
      {items.map(item => (
        <Pokemon key={item.url} pokemon={item} isCatch={false} />
      ) )}
    </div>
      <button className = 'load__more' onScrollCapture={loadMore}>Load more</button>
    </>
  )
} 


export default Api;