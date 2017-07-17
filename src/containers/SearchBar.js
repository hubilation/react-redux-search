import {connect} from 'react-redux'
import {updateInput} from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = dispatch => {
    return {
        onChange: event => {
            dispatch(updateInput(event.target.value))
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