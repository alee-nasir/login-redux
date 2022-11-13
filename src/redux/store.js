import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/Userslice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
