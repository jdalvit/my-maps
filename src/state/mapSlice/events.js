import { mapSlice } from "./slice";

const actions = mapSlice.actions;

export const onAddMarker = (label, position) => async (dispatch) => {
  dispatch(actions.addMarker({ position, label }));
};
