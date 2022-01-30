import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import React from "react";

const mapElementStyles = { height: `100%`, width: "100%" };

export const Map = compose(
  withProps({
    loadingElement: <div style={mapElementStyles} />,
    containerElement: <div style={mapElementStyles} />,
    mapElement: <div style={mapElementStyles} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ markerArray, withDefaultUi, defaultCenter }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={defaultCenter}
    options={{ disableDefaultUI: withDefaultUi }}
  >
    {markerArray.map((marker) => (
      <Marker position={marker.position} markerWithLabel label={marker.label} />
    ))}
  </GoogleMap>
));
