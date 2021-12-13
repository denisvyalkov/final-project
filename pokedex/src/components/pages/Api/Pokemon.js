import React, { useState, useContext } from 'react';
import {MyContext} from '../../MyContext';
import { Link } from 'react-router-dom';


function Pokemon(props){

  const {choosens, choose, letGo} = useContext(MyContext);
  const pokemon = props.pokemon;
  const [catched, setCatch] = useState(!!props.isCatch);
  const [button, setButton] = useState(props.isCatch ? 'Let go' : 'Catch');
  const [catchTime, setCatchTime] = useState(pokemon.catchTime ? pokemon.catchTime :'Not caught yet')
 
  function catchPokemon() {

    let catchTime = new Date();
    catchTime = `${catchTime.getDate().toString().padStart(2, '0')}.${catchTime.getMonth() + 1}.${catchTime.getFullYear()}
     at ${catchTime.getHours().toString().padStart(2, '0')}:${catchTime.getMinutes().toString().padStart(2, '0')}:${catchTime.getSeconds().toString().padStart(2, '0')}`;

    if (catched === false) {
      setCatchTime(`Catched ${catchTime}`);
      setCatch(true);
      setButton('Let go');
      pokemon.catchTime = `Catched ${catchTime}`;
      pokemon.isCatch = true;
      choose(pokemon);
      return;
    } else {
      setCatchTime(`Released ${catchTime}`)
      setCatch(false);
      setButton('Catch');
      pokemon.catchTime = `Released ${catchTime}`;
      pokemon.isCatch = false;
      letGo(pokemon.url);
      return;
    }
  }

  pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
 
  const url = '/pokemonstats/' + `${pokemon.id}`;  
  
  return (
    <>
    <div className='pokemon__card'>
      <div className='pokemon__info'>
        <div className='pokemon__name'><Link to={url}>{pokemon.name}</Link></div>
        <div className='pokemon' style={{ backgroundImage: `url(${pokemon.image})` }} > </div>
        <div className='catch__status'>{catchTime}</div>
      </div>
      <div className='pokemon__button'>
        <button onClick={catchPokemon}>{button}</button>
      </div>
    </div>
    </>
  )
}

export default Pokemon;
