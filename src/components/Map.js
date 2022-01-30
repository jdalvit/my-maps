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
)(({ markerArray, withDefaultUi, defaultCenter, disableDefaultUI }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={defaultCenter}
    options={{ disableDefaultUI }}
  >
    {markerArray.map((marker, i) => (
      <Marker
        position={marker.position}
        markerWithLabel
        label={marker.label}
        key={i}
      />
    ))}
  </GoogleMap>
));
