import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//started from code based on the google-maps-react package's documentation

export class MapContainer extends React.Component {

	//this will be populated with references to all the markers on the map
	realMarkers = [];
	//nothing is on a map yet
	map = null;
	
	//clicking the marker triggers the function defined in App.js
	onMarkerClick = (props, marker, e) => {
    this
      .props
      .triggerMarker(marker);
  }
//special thanks to Doug Brown for his help with this function!
  addRealMarker = obj => {
  	//break out of the function if there isn't a marker
    if (obj === null) return;

    let addMarker = true;
    this
      .realMarkers
      .forEach(marker => {
      	//make sure marker in realMarkers isn't one we already passed, and has a value
        if (obj === marker || marker === null) 
          addMarker = false;
        }
      )
    if (addMarker) {
    //add the marker reference to the realMarkers array
      this
        .realMarkers
        .push(obj);
    //and save it to the state in App.js
      this
        .props
        .saveRealMarkers(this.realMarkers);
    }
  }

//set this.map to be the map on the screen
  mapReady = (props, map) => {
    this.map = map;
    if (this.realMarkers.length) {
    //and set the map property of all the markers in realMarkers to it, because otherwise they were null
      this.realMarkers.forEach(marker => {
        marker.map = map;
      })
    }
  }


  render() {
    
    console.log("activeMarker: ", this.props.activeMarker);

    return (
      <Map google={this.props.google} onReady={this.mapReady} initialCenter={this.props.location} zoom={12}>

        {this
          .props
          .places
          .map((place, i) => { return (
          	  <Marker
              ref={this.addRealMarker}
              key={i}
              id={place.id}
              onClick={this.onMarkerClick}
              name={place.name}
              title={place.name}
              position={place.latlng}/>)
})}

        <InfoWindow
          onClose={this.props.onInfoWindowClose}
          visible={this.props.showingInfoWindow}
          marker={this.props.activeMarker}>
          <div>
            <h3>{this.props.activeMarker
                ? this.props.activeMarker.name
                : ""}</h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({apiKey: "AIzaSyC7rVODgdMMSMGKTx_gVhail2yxZipnze0"})(MapContainer)