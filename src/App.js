import React, { Component } from 'react';
import places from './data/places.json';
import MapContainer from './MapContainer';
import Header from './Header';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {

  state = {
    shownPlaces: places,
    showingInfoWindow: true,
    activeMarker: null
  }

  allMarkers = []

  saveMarkers = m => {
    this.allMarkers.push(m)
  }

  triggerMarker = (marker) => {
    this.setState({showingInfoWindow: true, activeMarker: marker})
  }

  filterResults = q => {
    if (q.length > 0) {
    let filteredPlaces = places.filter(p => {return (
      p.name.toLowerCase().includes(q.toLowerCase()) || p.cuisine.toLowerCase().includes(q.toLowerCase()) )
    });
    this.setState({shownPlaces: filteredPlaces})
    }
    else if (q.length === 0) {
      this.setState({shownPlaces: places})
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar 
          places={this.state.shownPlaces} 
          filterResults={this.filterResults}
          triggerMarker={this.triggerMarker}
          allMarkers={this.allMarkers}
        />
        <MapContainer 
          className="MapContainer" 
          location={{lat: 38.83388, lng: -104.82136}} 
          places={this.state.shownPlaces} 
          saveMarkers={this.saveMarkers}
          triggerMarker={this.triggerMarker}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
        />
      </div>
    );
  }
}

export default App;
