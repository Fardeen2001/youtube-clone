import { configureStore } from "@reduxjs/toolkit";
import hamburgerToggle from "./reducers/hamburgerToggle";

const store = configureStore({
  reducer: {
    hamburgerToggle: hamburgerToggle,
  },
});
export default store;
