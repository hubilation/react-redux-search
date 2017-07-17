import {combineReducers} from 'redux'
import searchBar from './searchBar'
import suggestions from './suggestions'

const rootReducer = combineReducers({
    searchBar,
    suggestions
})

export default rootReducer