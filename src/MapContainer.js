import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// based on the google-maps-react package's documentation

export class MapContainer extends React.Component {

  	onMarkerClick = (props, marker, e) => {
  		this.props.triggerMarker(marker);
  	}

  render() {
  	
    return (
      <Map google={this.props.google} initialCenter={this.props.location} zoom={12}>

        {this.props.places.map(place => {
        	let mark = (
        	<Marker 
        		key={place.id}
        		onClick={this.onMarkerClick}
                name={place.name}
                title={place.name}
                position={place.latlng}
            	/>)
        	this.props.saveMarkers(mark);
        	return mark;
    		}
            )
    	}
                
                

        <InfoWindow onClose={this.onInfoWindowClose} visible={this.props.showingInfoWindow} marker={this.props.activeMarker}>
            <div>
              <h3>{this.props.activeMarker ? this.props.activeMarker.name : ""}</h3>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC7rVODgdMMSMGKTx_gVhail2yxZipnze0"
})(MapContainer)