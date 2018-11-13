import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// based on the google-maps-react package's documentation

export class MapContainer extends React.Component {

	state = {
		showingInfoWindow: false,
		activeMarker: null
	}

  	onMarkerClick = (props, marker, e) => {
  		console.log(marker);
  		this.setState({showingInfoWindow: true, activeMarker: marker})
  	}

  render() {
  	
    return (
      <Map google={this.props.google} initialCenter={this.props.location} zoom={12}>

        {this.props.places.map(place => {return (
        	<Marker 
        		key={place.id}
        		onClick={this.onMarkerClick}
                name={place.name}
                title={place.name}
                position={place.latlng}
            	/>)}
            )
    	}
                
                

        <InfoWindow onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
            <div>
              <h3>{this.state.activeMarker ? this.state.activeMarker.name : ""}</h3>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC7rVODgdMMSMGKTx_gVhail2yxZipnze0"
})(MapContainer)