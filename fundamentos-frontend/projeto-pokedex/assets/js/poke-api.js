const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  return fetch(URL_API)
    .then((res) => res.json())
    .then((jsonBody) => jsonBody.results);
};