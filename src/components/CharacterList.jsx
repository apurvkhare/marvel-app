import React from 'react'
import Character from './Character'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { fetchCharacters } from '../MarvelApp.service'
import { ACTION_TYPES, dataReducer, FETCH_STATE, initialState } from '../reducer/CharacterReducer'

const StyledCharacterList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const CharacterList = () => {
    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const history = useHistory()

    const { data: characters, fetching, error } = state;

    console.log(characters)
    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.FETCH_DATA_INTITATE
        })
        const data = await fetchCharacters()
        console.log("inside fetchData: ", data)
        if(data === null)
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_FAILURE
            })
        else{
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_SUCCESS,
                payload: {
                    data
                }
            })
        }
    } 

    React.useEffect(() => {
        fetchData()
    }, [])

    if(fetching === FETCH_STATE.PENDING)
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Loading....</h1>
            </div>
        )

    if(fetching === FETCH_STATE.REJECTED)
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>{error}</h2>
            </div>
        )

    const handleClick = (e) => {
        console.log(e.target)
        if(Array.from(e.target.classList).includes("MuiCardMedia-root"))
            history.push(`/character/${e.target.dataset.id}`)
    }

    return (
        <StyledCharacterList onClick={handleClick}>
            <h1>Marvel Character List</h1>
            {characters &&
                characters.length !== 0 &&
                characters.map(character => (
                    <Character
                        key={character.id}
                        name={character.name}
                        description={character.description}
                        imageURL={character.imageURL}
                        data-id={character.id}
                    />
                ))}
        </StyledCharacterList>
    )
}

export default CharacterList
