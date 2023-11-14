import { createSlice } from "@reduxjs/toolkit";

const userStatusSlice = createSlice({
  name: "userStatus",
  initialState: {
    isLoggedIn:
      typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : null,
    userName:
      typeof window !== "undefined" ? localStorage.getItem("userName") : null,
    users: [],
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = "true";
      state.userName = action.payload.split("@")[0];
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", action.payload.split("@")[0]);
    },
    logout(state) {
      state.isLoggedIn = "false";
      state.userName = "";
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("userName", "");
    },
    signup(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const userStatusActions = userStatusSlice.actions;
export default userStatusSlice;
