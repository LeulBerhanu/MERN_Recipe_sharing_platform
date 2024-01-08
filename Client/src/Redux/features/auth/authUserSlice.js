import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("redux action", action);

      state.user = action.payload;
      console.log("state", JSON.stringify(state));
      console.log("set");
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authUserSlice.actions;

export default authUserSlice.reducer;
