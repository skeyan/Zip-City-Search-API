import React, { Component } from 'react';
import './App.css';
import ZipCards from './components/ZipSearch.js';
import SearchComponent from './components/SearchWithZipcode.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "App-header">
          <h2>Zipcode Search</h2>
        </div>
        <SearchComponent />
        <ZipCards />
        <ZipCards />
      </div>
    );
  }
}

export default App;
