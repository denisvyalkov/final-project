import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonStats.css'

function PokemonStats () {

    let { id } = useParams();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';

    const fetchPokemon = async (url) => {
       let pokemon = await fetch(url).then(res => res.json());

       pokemon.image = pokemon.sprites.other['official-artwork'].front_default;
       
       for (let i = 0; i < pokemon.abilities.length; i++){
           let abUrl = pokemon.abilities[i].ability.url;
           let abResult = await fetch(`${abUrl}`).then(res=>res.json());
           pokemon.abilities[i].name = abResult.name;
           pokemon.abilities[i].id = abResult.id;
       }
    return pokemon;
    }

    const [weight, setWeight] = useState([]);
    const [height, setHeight] = useState([]);
    const [name, setName] = useState([]);
    const [order, setOrder] = useState('');
    const [abilities, setAbilities] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [pokemonImage, setPokemonImage] = useState('');
    const [exp, setExp] = useState(0);
    const [type, setType] = useState([]);
    const [stats, setStats] = useState([]);
    
   
    useEffect(() => {
        fetchPokemon(url).then(result => {
          setWeight(result.weight);
          setHeight(result.height);
          setName(result.name);
          setOrder(result.order);
          setAbilities(result.abilities);
          setPokemonImage(result.image);
          setPokemon(result);
          setType(result.types);
          setExp(result.base_experience);
          setStats(result.stats);
        })
    }, [])

    function checker() {
        console.log(stats)
    }

    
 return (
    <div className='about__pokemon'>
        <div className='block__content'>
        <div className='about__info'>
            <div className='image__bg'><div className='about__image'style={{ backgroundImage: `url(${pokemonImage})`}}>
            </div>
            </div>
            <div className = 'about__stats'>
            <div className='pokemon__abilities'>
                Abilities: {abilities.length}
                    {abilities.map((item, i) => (
                <ul>{i+1}
                    <li>{item.name}</li>
                    <li>{item.id}</li>
                    <li>{item.slot}</li>
                    <li>{item.is_hidden ? 'Hidden' : 'Open'}</li>
                </ul>
                     ))}
            </div> 
            <div className='about__stats_stats'>Stats: 
                <ul>
                    { stats.map(item => (
                        <li>{item.stat.name}: {item.base_stat}</li>
                    )) }
                </ul>
            </div>
            <div className='pokemon__types'>Types:
                <ul> 
                    { type.map(item => (
                        <li>{item.type.name}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
        

        <div className='about__specials'>  
            <div> About pokemon:
                <ul>
                    <li>Name: {name}</li>
                    <li>Number (id): {id}</li>
                    <li>Height: {height}</li>
                    <li>Weight: {weight} pg</li>
                    <li>Cost: {order}$</li>
                    <li>Exp: {exp}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    )
}


export default PokemonStats