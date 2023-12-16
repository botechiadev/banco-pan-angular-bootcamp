pokeApi.getPokemons().then((pokemonsList) => {
  const listaHTML = document.getElementById('pokemonsHTML');
  const pokemonElements = pokemonsList.map((pokemon) => {
    const li = document.createElement('li');
    li.innerHTML = renderPokemon(pokemon);
    return li;
  });
  pokemonElements.forEach((element) => {
    listaHTML.appendChild(element);
  });
})
.catch((error) => console.error(error))
.finally(() => console.log('requisição concluída'));