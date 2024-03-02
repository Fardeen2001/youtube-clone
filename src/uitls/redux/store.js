import { configureStore } from "@reduxjs/toolkit";
import hamburgerToggle from "./reducers/hamburgerToggle";
import searchSlice from "./reducers/searchSlice";

const store = configureStore({
  reducer: {
    hamburgerToggle: hamburgerToggle,
    search:searchSlice
  },
});
export default store;
