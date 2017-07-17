import {combineReducers} from 'redux'
import searchBar from './searchBar'
import suggestions from './suggestions'

const searchSuggestionApp = combineReducers({
    searchBar,
    suggestions
})

export default searchSuggestionApp