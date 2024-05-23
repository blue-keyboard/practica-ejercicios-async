const API_URL = 'https://thronesapi.com/api/v2/Characters'
const selectCharacterOptions = document.querySelector('#character-list')
const img = document.querySelector('.character-image')

const getCharacterListFromAPI = async () => {
   const res = await fetch(API_URL)
   const response = await res.json()
   return response
}

const getCharacterFromAPI = async (id) => {
   const res = await fetch(`${API_URL}/${id}`)
   const response = await res.json()
   return response
}

const displayCharactersInSelect = async () => {
   let characterList = await getCharacterListFromAPI()

   selectCharacterOptions.innerHTML =
      '<option style="background-color: yellow">Choose a Character</option>'

   characterList.forEach((char) => {
      const option = document.createElement('option')
      option.value = char.id
      option.textContent = char.fullName
      selectCharacterOptions.appendChild(option)
   })
}

const displayCharacterImage = async (event) => {
   const id = event.target.value
   const char = await getCharacterFromAPI(id)
   img.src = char.imageUrl
}

selectCharacterOptions.addEventListener('change', displayCharacterImage)

displayCharactersInSelect()
