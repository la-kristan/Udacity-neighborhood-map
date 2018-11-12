import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// based on the google-maps-react package's documentation

export class MapContainer extends React.Component {

	state = {
		showingInfoWindow: false
	}

  	onMarkerClick = (props, marker, e) => {
  		this.setState({showingInfoWindow: true, activeMarker: marker})
  	}

  render() {
  	
    return (
      <Map google={this.props.google} initialCenter={this.props.location} zoom={12}>

        <Marker onClick={this.onMarkerClick}
                name='Grand Gyros'
                position={{lat: 38.8546875, lng: -104.7563509}}
                 />
                
                

        <InfoWindow onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
            <div>
              "The best gyros in Colorado!"
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC7rVODgdMMSMGKTx_gVhail2yxZipnze0"
})(MapContainer)