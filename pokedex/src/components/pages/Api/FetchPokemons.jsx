const FetchPokemons = async (nextUrl) => {
  let allPokemons;
  if (!nextUrl) {
   allPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon`).then(res => res.json());
  } else {
    allPokemons = await fetch(nextUrl).then(res => res.json());
  }

  for (let i = 0; i < allPokemons.results.length; i++) {
    const pokemonUrl = allPokemons.results[i].url
    const pokemonResult = await fetch(`${pokemonUrl}`).then(res => res.json());
    allPokemons.results[i].image = pokemonResult.sprites.other['official-artwork'].front_default;
    let id = pokemonUrl.split('/');
    id =  id[id.length - 2];
    allPokemons.results[i].id = id;
  }

  return {all: allPokemons.results, next: allPokemons.next}
}

  export default FetchPokemons