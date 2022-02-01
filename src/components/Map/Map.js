import React, { useState } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { LocationSearchbar } from "../LocationSearchbar/LocationSearchbar";
import "./Map.scss";
import { useScreenSizeClassname } from "../utils";
import { MapMarker } from "./MapMarker/MapMarker";
import { mapsApiKey } from "../../constants";

const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

export const Map = ({ markerArray, className, onAddMarker, initialCenter }) => {
  const [center, setCenter] = useState(initialCenter);
  const screenSizeClassname = useScreenSizeClassname();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsApiKey,
    libraries,
  });

  const handleSelect = (address, coordinates) => {
    onAddMarker(address, coordinates);
    setCenter(coordinates);
  };

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
          <MapMarker marker={marker} />
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
