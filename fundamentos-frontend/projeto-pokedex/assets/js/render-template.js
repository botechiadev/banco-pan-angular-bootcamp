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