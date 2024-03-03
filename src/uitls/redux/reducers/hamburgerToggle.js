import { createSlice } from "@reduxjs/toolkit";

const hamburgerToggleSlice = createSlice({
  name: "hamburgerToggle",
  initialState: {
    isMenuOpen: false,
    allMenu: false,
    replyMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.allMenu = true;
    },
    toggleReplyMenu: (state) => {
      state.replyMenu = !state.replyMenu;
    },
  },
});
export default hamburgerToggleSlice.reducer;
export const { toggleMenu, closeMenu, toggleReplyMenu } =
  hamburgerToggleSlice.actions;
