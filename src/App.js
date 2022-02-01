import React from "react";
import "./App.scss";
import { markerArraySelector } from "./state/mapSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import { onAddMarker } from "./state/mapSlice/events";
import { Map } from "./components/Map/Map";

function App() {
  const dispatch = useDispatch();
  const markerArray = useSelector(markerArraySelector);
  return (
    <div className="App">
      <Map
        markerArray={markerArray}
        onAddMarker={(address, coordinates) =>
          dispatch(onAddMarker(address, coordinates))
        }
        initialCenter={{ lat: 41.3874, lng: 2.1686 }}
      />
    </div>
  );
}

export default App;
