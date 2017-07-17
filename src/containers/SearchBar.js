import {connect} from 'react-redux'
import {updateInput, requestSuggestions} from '../actions'
import {getSuggestions} from '../actions/getSuggestions'
import Input from '../components/Input'

const mapDispatchToProps = dispatch => {
    return {
        onChange: event => {
            dispatch(updateInput(event.target.value))
            dispatch(getSuggestions(event.target.value))
        }
    }
}

const mapStateToProps = state => {
    return {
        text: state.searchBar,
        placeholder: 'Try something out!'
    }
}

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(Input)

export default SearchBar