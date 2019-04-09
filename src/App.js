import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>

        <Travel
          destination="City: Batumi"
          country="Country: Republic of Georgia"
          photo="https://static1.squarespace.com/static/57b9b98a29687f1ef5c622df/t/57bb6549197aeabfa1266eb0/1528034527036/radisson+blu+batumi?format=2500w"
          distance="Distance from Madrid: 3,762 km"
        />
        <Travel
          destination="City: Cairo"
          country="Country: Egypt"
          photo="https://suitcasemag.com/wp-content/uploads/2019/02/cairo-feature-image-1920x1080.jpg"
          distance="Distance from Madrid: 3,350 km"
        />

      </div>
    );
  }
}

export default App;
