import './Mainpage.css';

function Mainpage () {
    return (
        <article>
            <div className='block__faq'> 
        <h2>Readme:</h2>
        <ul>The app has 3 pages:
            <li> 
                <ul>Pokemon List:
                    <li>Contain 20 pokemons</li>
                    <li>Displays the name, picture and information about the capture of this Pokemon</li>
                    <li>Button 'catch' for select pokemon</li>
                    <li>Button 'Load more' on bottom download next 20 pokemons</li>
                    <li>Name in card of pokemon is a link</li>
                    <li>Reloading the page will load new Pokémon</li>
                </ul></li>
            <li>Catched(choosen) pokemons:
                <ul><li>Сontains a page of catched pokemons</li>
                <li>Press 'let out' to release the pokemon and remove from the page</li>
        </ul></li>
            <li>Info about pokemon: 
                <ul>
                    <li>Details of the Pokemon</li>
                </ul></li> 
        </ul>

            </div>
        </article>
    );
}

export default Mainpage