import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Header from './Header';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {

//the state holds the places shown on the map, whether there is an infoWindow open,
//which marker is active, and references to all the markers on the map.
//the name "realMarkers" is a holdover from when there was an "allMarkers" variable,
//which was implemented wrong and caused errors.
  state = {
    shownPlaces: [],
    showingInfoWindow: true,
    activeMarker: null,
    realMarkers: []
  }

//this will be populated with data from the api
  allPlaces = [];

//called in MapContainer.js, to save the marker references to the state
  saveRealMarkers = array => {
    this.setState({realMarkers: array});
  }

//called in the onClick for the markers and the list items
  triggerMarker = marker => {
    //opens the infoWindow, and sets the selected marker as the activeMarker
    this.setState({showingInfoWindow: true, activeMarker: marker});
    //bounces the marker for five seconds, which is about long enough for one bounce.
    //I don't like things constantly moving around on websites, lol
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(marker.setAnimation(null), 5000)
  }

//called in Sidebar.js to filter the locations on the map
  filterResults = q => {
    //if the input isn't empty
    if (q.length > 0) {
      //filter out places that don't have a name or cuisine type matching the query
      let filteredPlaces = this.allPlaces.filter(p => {return (
        //making sure to set everything to the same case before comparing
        p.name.toLowerCase().includes(q.toLowerCase()) || p.cuisine.toLowerCase().includes(q.toLowerCase()) )
    });
      //then set the places on the map to the filtered results
      this.setState({shownPlaces: filteredPlaces})
    }
    //if the input becomes empty
    else if (q.length === 0) {
      //set the places on the map back to all the places in the database
      this.setState({shownPlaces: this.allPlaces})
    }
  }

  onInfoWindowClose = () => {
    this.setState({showingInfoWindow: false});
  }

//bring in location data from the external api
//which I wrote myself
 componentDidMount() {
    fetch("https://api.myjson.com/bins/bqanm")
        .then(res => res.json())
        .then(res => this.allPlaces = res)
        .then(() => this.setState({shownPlaces: this.allPlaces}))
        .catch(err => alert("Data could not be loaded. " + err))
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