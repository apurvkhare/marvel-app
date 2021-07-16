import React from 'react'
import Character from './Character'
import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
import { fetchCharacters } from '../MarvelApp.service'
import {
    ACTION_TYPES,
    dataReducer,
    FETCH_STATE,
    initialState,
} from '../reducer/CharacterReducer'

const StyledCharacterList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
`

const CharacterList = ({ searchInput }) => {
    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const { data: characters, fetching, error } = state

    console.log(characters)
    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.FETCH_DATA_INTITATE,
        })
        const data = await fetchCharacters(searchInput)
        if (data === null)
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_FAILURE,
            })
        else {
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_SUCCESS,
                payload: {
                    data,
                },
            })
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [searchInput])


    if (state.fetching === FETCH_STATE.PENDING) {
        return (
            <StyledCharacterList>
                <Skeleton
                    animation='wave'
                    variant='rect'
                    width={300}
                    height={450}
                />
                <Skeleton
                    animation='wave'
                    variant='rect'
                    width={300}
                    height={450}
                />
                <Skeleton
                    animation='wave'
                    variant='rect'
                    width={300}
                    height={450}
                />
                <Skeleton
                    animation='wave'
                    variant='rect'
                    width={300}
                    height={450}
                />
            </StyledCharacterList>
        )
    }

    if (fetching === FETCH_STATE.REJECTED)
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{error}</h2>
            </div>
        )

    return (
        <StyledCharacterList>
            {characters && characters.length !== 0 ? (
                characters.map(character => (
                    <Character
                        key={character.id}
                        name={character.name}
                        description={character.description}
                        imageURL={character.imageURL}
                        characterId={character.id}
                    />
                ))
            ) : (
                <h1>No character found</h1>
            )}
        </StyledCharacterList>
    )
}

export default CharacterList
