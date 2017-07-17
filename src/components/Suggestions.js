import React from 'react'
import PropTypes from 'prop-types'

const Suggestions = ({suggestions})=>(
    <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion.id}>{suggestion.all}</li>  
        ))}    
    </ul>
)

Suggestions.propTypes = {
    suggestions : PropTypes.array.isRequired
}

export default Suggestions