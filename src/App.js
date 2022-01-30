import React from "react";
import "./App.css";
import { Map } from "./components/Map";

function App() {
  return (
    <div className="App">
      <Map
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        // TODO: Change marker array to redux state once feature is merged
        markerArray={[
          { lat: -34.397, lng: 150.644 },
          { lat: -35.397, lng: 151.644 },
          { lat: -33.397, lng: 150.644 },
        ]}
        // TODO: Move api URL to .ENV file
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5pVs8CyH-AMdlzdxNSznUCQzTpFf90wY&v=3.exp&libraries=places"
      />
    </div>
  );
}

export default App;
