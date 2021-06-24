export const ACTION_TYPES = {
    FETCH_DATA_INTITATE: "FETCH_DATA_INTITATE",
    FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
    FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE"
}

export const FETCH_STATE = {
    IDLE: "idle",
    PENDING: "pending",
    RESOLVED: "resolved",
    REJECTED: "rejected"
}

export const initialState = {
    data: null,
    fetching: FETCH_STATE.IDLE,
    error: null
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_DATA_INTITATE: {
            return{
                ...state,
                fetching: FETCH_STATE.PENDING
            }
        }
        case ACTION_TYPES.FETCH_DATA_SUCCESS: {
            return{
                ...state,
                fetching: FETCH_STATE.RESOLVED,
                data: action.payload.data
            }
        }
        case ACTION_TYPES.FETCH_DATA_FAILURE: {
            return{
                ...state,
                data: null,
                fetching: FETCH_STATE.REJECTED,
                error: "Error Fetching Data"
            }
        }
        default: {
            return state
        }
    }
}   