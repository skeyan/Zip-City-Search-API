import React, { Component } from 'react';
import './App.css';
import CitiesByZipContainer from './components/CitiesByZip.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "App-header">
          <h2>Zipcode Search</h2>
        </div>
        <CitiesByZipContainer></CitiesByZipContainer>
      </div>
    );
  }
}

export default App;
