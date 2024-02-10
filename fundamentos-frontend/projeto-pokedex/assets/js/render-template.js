function renderPokemon(detailedPokemons) {
  console.log(detailedPokemons)
  const { id, name, types, sprites, moves } = detailedPokemons;
  return `
    <li class="pokemon ${types[0].type.name}" id="pokemon-${id}">
      <span class="number">#${String(id).padStart(3, '0')}</span>
      <span class="name">${name}</span>
      <div class="detail">
        <div class="detail-box1">
          <button onclick="myFunction(${id})">Details</button> 
          <ol class="types">
            <li class="type ${types[0].type.name + '1'}">${types[0].type.name}</li>
            <li class="type ${types[1] ? types[1].type.name + '1' : ''}">${types[1] ? types[1].type.name : ''}</li>
          </ol>
        </div>  
        <img src="${sprites.other['dream_world']['front_default']}" alt="img do pokemon ${name}">
      </div>
      <div class="modalBox" id="modal-${id}">
      <button onclick="myFunction(${id})">x</button> 
      <div>
      <h2>${name}</h2>
      <div class="movesBox">
      <h3>Pokemon Moves</h3>
        <ul>
          ${moves.map(move => `<li>${move.move.name}</li>`).join('')}
        </ul>
      </div>
      <div>
        <img src="${sprites.versions['generation-v']['black-white'].animated['front_default']}" alt="img animada"/>
      </div>
    </div>
  </div>
</li>

  `;
}

// Função para mostrar ou ocultar o modal
function myFunction(id) {
  const modalId = `modal-${id}`;
  const modal = document.getElementById(modalId);
  if (modal.style.display === "none" || !modal.style.display) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

// Chamada para buscar os Pokémon, renderizar a página inicial e configurar a paginação
pokeApi.getPokemons(0, 12).then((pokemonsList) => {
  const listaHTML = document.getElementById('pokemonsHTML');

  // Mapeia a lista de Pokémon e faz a chamada para obter os detalhes de cada um
  const pokemonPromises = pokemonsList.map(pokemon => pokeApi.getPokemonDetails(pokemon.url));

  // Aguarda todas as chamadas assíncronas para obter os detalhes dos Pokémon
  Promise.all(pokemonPromises)
    .then(detailedPokemonsList => {
      // Cria elementos HTML com base nos detalhes dos Pokémon
      const pokemonElements = detailedPokemonsList.map((detailedPokemon) => {
        const li = document.createElement('li');
        li.innerHTML = renderPokemon(detailedPokemon);
        console.log(detailedPokemons)

        return li;
      });

      // Adiciona os elementos à lista HTML
      pokemonElements.forEach((element) => {
        listaHTML.appendChild(element);
      });
    })
    .catch((error) => console.error(error))
    .finally(() => console.log('requisição concluída'));
});
