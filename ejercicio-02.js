const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const img = document.querySelector('.random-image')
const POKEMON_RANGE = 151

const getPokemonFromApi = async (id) => {
   const res = await fetch(API_URL + id)
   const response = await res.json()
   return response
}

const displayPokemonImage = async (id) => {
   // it can accept an specific id (or pokemon name),
   // if no id is provided it generates a random one
   const idName = id || Math.floor(Math.random() * (POKEMON_RANGE + 1)) + 1
   const pokemon = await getPokemonFromApi(idName)
   const pokemonImageUrl =
      pokemon.sprites.other['official-artwork'].front_default
   img.src = pokemonImageUrl
}

displayPokemonImage()
