import React from 'react'
import Character from './Character'
import styled from 'styled-components'
import { fetchCharacters } from '../MarvelApp.service'

const StyledCharacterList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const CharacterList = () => {
    const [characters, setCharacters] = React.useState([])

    const setFetchedCharacters = async () => {
        setCharacters(await fetchCharacters())

    }

    React.useEffect(() => {
        setFetchedCharacters()
    }, [])
    // React.useEffect(fetchCharacters, [])

    console.log(characters)

    return (
        <StyledCharacterList>
            {characters &&
                characters.length !== 0 &&
                characters.map(character => (
                    <Character
                        key={character.id}
                        name={character.name}
                        description={character.descripton}
                        imageURL={character.imageURL}
                    />
                ))}
        </StyledCharacterList>
    )
}

export default CharacterList
