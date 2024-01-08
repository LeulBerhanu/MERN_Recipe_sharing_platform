import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./features/auth/authUserSlice";

export const store = configureStore({
  reducer: {
    user: authUserReducer,
  },
});
