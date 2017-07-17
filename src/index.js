import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import searchSuggestionsApp from './reducers/searchSuggestionsApp'


let store = createStore(searchSuggestionsApp)

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>
        , document.getElementById('root'));

registerServiceWorker();
