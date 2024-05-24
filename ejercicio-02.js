const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const img = document.querySelector('.random-image')

const getPokemonFromApi = async (id) => {
   const res = await fetch(API_URL + id)
   const response = await res.json()
   return response
}

const displayRandomPokemonImage = async () => {
   const randomId = Math.floor(Math.random() * (151 + 1)) + 1
   const pokemon = await getPokemonFromApi(randomId)
   const pokemonImageUrl =
      pokemon.sprites.other['official-artwork'].front_default
   img.src = pokemonImageUrl
}

displayRandomPokemonImage()
