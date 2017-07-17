export const updateInput = newInput => {
    return {
        type: 'UPDATE_INPUT',
        newInput
    }
}

export const requestSuggestions = searchInput => {
    return {
        type: 'REQUEST_SUGGESTIONS',
        searchInput
    }
}

export const receiveSuggestions = (searchInput, suggestions) => {
    return {
        type: 'RECEIVE_SUGGESTIONS',
        searchInput,
        suggestions
    }
}
