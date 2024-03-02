import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    cachedData: {},
  },
  reducers: {
    cachedResult: (state, action) => {
      state.cachedData = { ...state.cachedData, ...action.payload };
    },
  },
});
export const { cachedResult } = searchSlice.actions;
export default searchSlice.reducer;
