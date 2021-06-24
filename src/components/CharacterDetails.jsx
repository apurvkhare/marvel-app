import React from 'react'
import { fetchCharacterDetails } from '../MarvelApp.service'
import { ACTION_TYPES, dataReducer, FETCH_STATE, initialState } from '../reducer/CharacterReducer'

const CharacterDetails = () => {

    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const { data: characterDetails, fetching, error } = state

    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.FETCH_DATA_INTITATE
        })
        const data = await fetchCharacterDetails()
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

    return (
        <div>
            <h1>Character Details Page</h1>
            <p>Name: {characterDetails.name}</p>
            <p>Description: {characterDetails.description}</p>
            <h3>Comics</h3>
            {/* {characterDetails.comics && characterDetails.comics.length !== 0 && characterDetails.comics.map(comic => <p key={0}></p>)} */}
        </div>
    )
}

export default CharacterDetails
