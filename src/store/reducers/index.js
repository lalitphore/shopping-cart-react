import cartReducer from './cartReducer'
import loginReducer from './loginReducer'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    cartReducer : cartReducer,
    loginReducer : loginReducer
})

export default rootReducer