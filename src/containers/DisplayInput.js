import {connect} from 'react-redux'
import Display from '../components/Display'


const mapStateToProps = state => {
    return {
        text: state.searchBar
    }
}

const DisplayInput = connect(mapStateToProps)(Display)

export default DisplayInput