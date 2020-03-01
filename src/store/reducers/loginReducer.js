import * as ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    isLoggedIn : false,
    loggedInUserData : {}
}

const rootReducer = (state=initialState , action) => {
    
    switch(action.type.type){
        case ACTION_TYPES.LOGIN_SUCCESS:
        return {
            ...state,
            isLoggedIn : true,
            loggedInUserData : action.payload.data
        }

        case ACTION_TYPES.LOGIN_FAILURE:
        return {
            ...state,
            isLoggedIn : false,
            loggedInUserData : {}
        }

        default :
        return state
    }
}

export default rootReducer