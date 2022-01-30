import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markerArray: [
    { position: { lat: -34.397, lng: 150.644 }, label: "marker 1" },
    { position: { lat: -35.397, lng: 151.644 }, label: "marker 2" },
    { position: { lat: -33.397, lng: 151.644 }, label: "marker 3" },
  ],
};

export const mapSlice = createSlice({
  name: "mapSlice",
  initialState,
  reducers: {
    addMarker: (state, action) => {
      state.markerArray.push(action.payload);
    },
    clean: (state) => initialState,
  },
});

export const markerArraySelector = (state) => state.mapSlice.markerArray;
