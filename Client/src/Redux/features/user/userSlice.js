import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
