import React, { Component } from 'react';
import './App.css';
import CitiesByZipContainer from './components/CitiesByZip.js';
import ZipcodesByCityContainer from './components/ZipcodesByCity.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "App-zipheader">
          <h2>Zipcode Search</h2>
        </div>
        <CitiesByZipContainer></CitiesByZipContainer>
        <div className = "App-cityheader">
          <h2>City Search</h2>
        </div>
        <ZipcodesByCityContainer></ZipcodesByCityContainer>
      </div>
    );
  }
}

export default App;
