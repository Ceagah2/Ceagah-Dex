const LIMIT = 742;
const api = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const pokemons = result.results.map((pokemon: { url: any; }) => {
          const { url } = pokemon;
          const id = url.substring(34, url.length - 1);

        return {
          ...pokemon,
          id,
        };
      });
    return pokemons;
  });
}
export default api;