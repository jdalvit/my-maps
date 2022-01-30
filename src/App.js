import React from "react";
import "./App.css";
import { Map } from "./components/Map/Map";
import { LocationSearchbar } from "./components/LocationSearchbar/LocationSearchbar";
import { markerArraySelector } from "./state/mapSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import { onAddMarker } from "./state/mapSlice/events";

function App() {
  const dispatch = useDispatch();
  const markerArray = useSelector(markerArraySelector);
  return (
    <div className="App">
      <LocationSearchbar
        className={"LocationSearchbar"}
        handleSelect={(address, coordinates) => {
          dispatch(onAddMarker(address, coordinates));
        }}
      />
      <div className="MapContainer">
        <Map
          disableDefaultUI
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
          // TODO: Change marker array to redux state once feature is merged
          markerArray={markerArray}
          // TODO: Move api URL to .ENV file
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5pVs8CyH-AMdlzdxNSznUCQzTpFf90wY&v=3.exp&libraries=places"
        />
      </div>
    </div>
  );
}

export default App;
