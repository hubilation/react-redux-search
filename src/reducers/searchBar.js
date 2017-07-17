import initialState from '../actions/initialState'

const searchBar = (state = initialState.searchInput, action) => {
    switch(action.type) {
        case 'UPDATE_INPUT': 
            return action.newInput
        default:
            return state
    }
}

export default searchBar;