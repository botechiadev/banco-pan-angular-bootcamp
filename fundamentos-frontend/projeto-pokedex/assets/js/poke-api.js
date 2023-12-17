const pokeApi = {};
let offset = 0;

pokeApi.getPokemonDetails = (pokemonUrl) => {
  return fetch(pokemonUrl)
    .then((res) => res.json());
};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  return fetch(URL_API)
    .then((res) => res.json())
    .then(async (jsonBody) => {
      const pokemons = jsonBody.results;
      const detailedPokemons = await Promise.all(pokemons.map(pokemon => pokeApi.getPokemonDetails(pokemon.url)));
      return detailedPokemons;
    });
};
