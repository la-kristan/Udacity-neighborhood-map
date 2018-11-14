import React, { Component } from 'react';
//import places from './data/places.json';
import MapContainer from './MapContainer';
import Header from './Header';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {

  state = {
    shownPlaces: [],
    showingInfoWindow: true,
    activeMarker: null,
    realMarkers: []
  }

  allPlaces = [];

  saveRealMarkers = array => {
    this.setState({realMarkers: array});
  }

  triggerMarker = marker => {
    this.setState({showingInfoWindow: true, activeMarker: marker});
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(marker.setAnimation(null), 5000)
  }

  filterResults = q => {
    if (q.length > 0) {
    let filteredPlaces = this.allPlaces.filter(p => {return (
      p.name.toLowerCase().includes(q.toLowerCase()) || p.cuisine.toLowerCase().includes(q.toLowerCase()) )
    });
    this.setState({shownPlaces: filteredPlaces})
    }
    else if (q.length === 0) {
      this.setState({shownPlaces: this.allPlaces})
    }
  }

  onInfoWindowClose = () => {
    this.setState({showingInfoWindow: false});
  }

 componentDidMount() {
    fetch("https://api.myjson.com/bins/bqanm")
        .then(res => res.json())
        .then(res => this.allPlaces = res)
        .then(() => this.setState({shownPlaces: this.allPlaces}))
}

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar 
          places={this.state.shownPlaces} 
          filterResults={this.filterResults}
          triggerMarker={this.triggerMarker}
          realMarkers={this.state.realMarkers}
        />
        <MapContainer 
          className="MapContainer" 
          location={{lat: 38.83388, lng: -104.82136}} 
          places={this.state.shownPlaces} 
          triggerMarker={this.triggerMarker}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
          saveRealMarkers={this.saveRealMarkers}
          role="application"
          aria-label="map"
        />
      </div>
    );
  }
}

export default App;