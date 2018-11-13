import React, { Component } from 'react';
import places from './data/places.json';
import MapContainer from './MapContainer';
import Header from './Header';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar places={places}/>
        <MapContainer className="MapContainer" location={{lat: 38.83388, lng: -104.82136}} places={places}/>
      </div>
    );
  }
}

export default App;
