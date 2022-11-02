import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  password: null,
  loggedIn: false,
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, email, password, loggedIn } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.loggedIn = loggedIn;
    },
    logout: (state, action) => {
      const { name, email, password, loggedIn } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.loggedIn = loggedIn;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
