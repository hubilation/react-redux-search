import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../../containers/SearchBar'
import SmartSuggestions from '../../containers/SmartSuggestions'
import DisplayInput from '../../containers/DisplayInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchBar />
        <SmartSuggestions />
        <DisplayInput />
      </div>
    );
  }
}

export default App;
