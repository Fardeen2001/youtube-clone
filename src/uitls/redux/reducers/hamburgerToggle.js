import { createSlice } from "@reduxjs/toolkit";

const hamburgerToggleSlice = createSlice({
  name: "hamburgerToggle",
  initialState: {
    isMenuOpen: false,
    allMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.allMenu = true;
    },
  },
});
export default hamburgerToggleSlice.reducer;
export const { toggleMenu, closeMenu } = hamburgerToggleSlice.actions;
