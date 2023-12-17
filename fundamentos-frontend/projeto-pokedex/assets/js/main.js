const listaHTML = document.getElementById('pokemonsHTML');
let currentPage = 0;

function renderPokemons(pokemonsList) {
  listaHTML.innerHTML = '';
  const pokemonElements = pokemonsList.map((pokemon) => {
    const li = document.createElement('li');
    li.innerHTML = renderPokemon(pokemon);
    return li;
  });
  pokemonElements.forEach((element) => {
    listaHTML.appendChild(element);
  });
}

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('previousButton');

nextButton.addEventListener('click', () => {
  currentPage++;
  getPokemonsAndRender();
});

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    getPokemonsAndRender();
  }
});

function getPokemonsAndRender() {
  const offset = currentPage * 12;
  pokeApi.getPokemons(offset).then(renderPokemons);
}

// Chame a função getPokemonsAndRender para renderizar a página inicial
getPokemonsAndRender();
