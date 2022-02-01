import React, { useState } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { LocationSearchbar } from "../LocationSearchbar/LocationSearchbar";
import "./Map.scss";
import { useScreenSizeClassname } from "../utils";

const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

export const Map = ({ markerArray, className, onAddMarker, initialCenter }) => {
  const [center, setCenter] = useState(initialCenter);
  const screenSizeClassname = useScreenSizeClassname();
  const { isLoaded } = useLoadScript({
    // TODO: Extract api key to .Env file
    googleMapsApiKey: "AIzaSyD5pVs8CyH-AMdlzdxNSznUCQzTpFf90wY",
    libraries,
  });

  const handleSelect = (address, coordinates) => {
    onAddMarker(address, coordinates);
    setCenter(coordinates);
  };

  console.log(screenSizeClassname);

  const renderMap = () => {
    return (
      <GoogleMap
        className={`${className}, Map`}
        options={{ disableDefaultUI: true }}
        center={center}
        zoom={5}
        mapContainerStyle={mapContainerStyle}
      >
        {markerArray.map((marker, i) => (
          <Marker
            key={`marker.${i}`}
            position={marker.position}
            label={marker.label}
          />
        ))}
        <LocationSearchbar
          className={`LocationSearchbar ${screenSizeClassname}`}
          handleSelect={handleSelect}
        />
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : null;
};
