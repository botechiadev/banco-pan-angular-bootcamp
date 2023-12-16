const offset = 0;
const limit = 12;
const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

function renderPokemon(pokemon) {
  return `
    <li class="pokemon" id="pokemon-${pokemon.name}">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>
        <img src="https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png" alt="img do pokemon ${pokemon.name}">
      </div>
    </li>
  `;
}

fetch(URL_API)
  .then((res) => res.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonsList) => {
    const listaHTML = document.getElementById('pokemonsHTML');
    pokemonsList.forEach((pokemon) => {
      const li = document.createElement('li');
      li.innerHTML = renderPokemon(pokemon);
      listaHTML.appendChild(li);
    });
  })
  .catch((error) => console.error(error))
  .finally(() => console.log('requisição concluída'));

// ao usar .then na segunda resposta retorna automaticamente a response do responseBody (response do response) e como se fosse funcao de transformacao onde cada objeto vai se transformando de forma mais coerente que a transformacao de cb dentro de cb
// usando arrow function consigo reduzir a sintaxis a uma linha  de arrow function simples