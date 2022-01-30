import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markerArray: [],
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
