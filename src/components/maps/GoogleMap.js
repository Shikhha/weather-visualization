import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class GoogleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "200px", width: "250px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_KEY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
