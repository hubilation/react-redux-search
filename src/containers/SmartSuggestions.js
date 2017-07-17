import {connect} from 'react-redux'
import {receiveSuggestions} from '../actions'
import Suggestions from '../components/Suggestions'

const mapStateToProps = state => {
    return {
        suggestions: state.suggestions.suggestions
    }
}

const SmartSuggestions = connect(mapStateToProps)(Suggestions)

export default SmartSuggestions