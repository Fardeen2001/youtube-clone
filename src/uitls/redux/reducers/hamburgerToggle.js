import { createSlice } from "@reduxjs/toolkit";

const hamburgerToggleSlice = createSlice({
  name: "hamburgerToggle",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export default hamburgerToggleSlice.reducer;
export const { toggleMenu } = hamburgerToggleSlice.actions;
