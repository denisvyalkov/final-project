import React, { useContext } from 'react';
import {MyContext} from '../../MyContext'
import Pokemon from '../Api/Pokemon';

function ChoosenPokemons() {

  const {choosens} = useContext(MyContext)
 

  return (
    <>
    <div className='pokemons__list'>
      {choosens.map(item => (
          <Pokemon key={item.url} pokemon={item} isCatch={true} />
      ) )}
    </div>
    </>
  )
} 


export default ChoosenPokemons;