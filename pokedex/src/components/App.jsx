import React, { useState, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ChoosenPokemons from './pages/ChoosenPokemons/ChoosenPokemons';
import Api from './pages/Api/Api';
import Mainpage from './pages/Mainpage/Mainpage';
import {MyContext} from './MyContext';
import PokemonStats from './pages/PokemonStats/PokemonStats';




function App() {
const [choosens, setChoosens] = useState([]);

function choose (item) {
    setChoosens([...choosens, item]);
}

function letGo (itemUrl) {
    const newChoosens = choosens.filter((item) => {
        return item.url !== itemUrl;
    });
    setChoosens(newChoosens);
}


return (
    <MyContext.Provider value={{
        choosens, choose, letGo
    }}>
        <>
        <header>
            <div className='logo__container'>
                <div className='header__logo'></div>
            </div>
            <div className='header__pages'>
                <div className='page__api'> <Link to='/pokemonlist'> Pokemon List </Link></div>
                <div className='page__choosen' > <Link to='/chosenpokemons'>Chosen Pokemons</Link> </div>
                <div className='page__faq'> <Link to='/'>FAQ</Link> </div>
            </div>
        </header>
        <Routes>
            <Route path='/pokemonlist' element={<Api />} />
            <Route path='/chosenpokemons' element={<ChoosenPokemons />} />
            <Route path='/' element={<Mainpage />} />
            <Route path='/pokemonstats/:id' element={<PokemonStats />} />
        </Routes>
        </>
    </MyContext.Provider>
    );
} 
  
  
  export default App;