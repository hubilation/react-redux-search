import React from 'react'
import PropTypes from 'prop-types'

const Input = ({text, placeholder, onChange}) => (
    <input type="text" 
        value={text}
        placeholder={placeholder}
        onChange={onChange} />
)

Input.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Input