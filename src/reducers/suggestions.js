import initialState from '../actions/initialState'

const suggestions = (state = initialState.suggestions, action) => {
    switch(action.type){
        case 'REQUEST_SUGGESTIONS':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_SUGGESTIONS':
            return Object.assign({}, state, {
                isFetching: false,
                suggestions: action.suggestions
            })
        default:
            return state
    }
}

export default suggestions;