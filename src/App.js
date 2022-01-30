import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Map } from "./components/Map";
import { markerArraySelector } from "./state/mapSlice/slice";

function App() {
  const markerArray = useSelector(markerArraySelector);
  return (
    <div className="App">
      <Map
        disableDefaultUI
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        // TODO: Change marker array to redux state once feature is merged
        markerArray={markerArray}
        // TODO: Move api URL to .ENV file
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5pVs8CyH-AMdlzdxNSznUCQzTpFf90wY&v=3.exp&libraries=places"
      />
    </div>
  );
}

export default App;
