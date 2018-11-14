import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// based on the google-maps-react package's documentation

export class MapContainer extends React.Component {
  realMarkers = [];
  map = null;

  onMarkerClick = (props, marker, e) => {
    this
      .props
      .triggerMarker(marker);
  }

  addRealMarker = obj => {
    if (obj === null) return;

    let addMarker = true;
    this
      .realMarkers
      .forEach(marker => {
        if (obj.marker === marker || marker === null) 
          addMarker = false;
        }
      )
    if (addMarker) {
      console.log("marker object: ", obj);
      obj.marker.map = this.map;
      this
        .realMarkers
        .push(obj);
      this
        .props
        .saveRealMarkers(this.realMarkers);
    }
  }

  mapReady = (props, map) => {
    this.map = map;
    if (this.realMarkers.length) {
      this.realMarkers.forEach(marker => {
        marker.map = map;
      })
    }
  }

  render() {
    if (this.realMarkers.length !== this.props.places.length) {
      console.log("resetting real markers");
      console.log(this.realMarkers);
      this.realMarkers = [];
    }

    console.log("activeMarker: ", this.props.activeMarker);

    return (
      <Map google={this.props.google} onReady={this.mapReady} initialCenter={this.props.location} zoom={12}>

        {this
          .props
          .places
          .map(place => {
            let mark = (<Marker
              ref={this.addRealMarker}
              key={place.id}
              onClick={this.onMarkerClick}
              name={place.name}
              title={place.name}
              position={place.latlng}/>)
            this
              .props
              .saveMarkers(mark);
            return mark;
          })
}

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