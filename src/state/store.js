import { configureStore } from "@reduxjs/toolkit";
import { mapSlice } from "./mapSlice/slice";

export const store = configureStore({
  reducer: { mapSlice: mapSlice.reducer },
});
