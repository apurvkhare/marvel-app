import axios from 'axios'

export const fetchCharacters = async () => {
    try {
        const response = await axios.get(
            `http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_MD5_HASH}`
        )

        // console.log('Fetched Marvel Characters: ', response.data.data.results)
        const characters = response?.data?.data?.results.map(character => ({
            id: character.id,
            name: character.name,
            description: character.description,
            imageURL: `${character.thumbnail.path}.jpg`,
        }))

        console.log(characters)
        return characters
    } catch (err) {
        console.error('Error fetching Marvel Characters: ', err)
        return null
    }
}
