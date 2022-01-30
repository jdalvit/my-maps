import { mapSlice } from "./slice";

const actions = mapSlice.actions;

export const onAddMarker = (position, label) => async (dispatch) => {
  dispatch(actions.addMarker({ position, label }));
};
