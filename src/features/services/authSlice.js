import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export const authSlice = createSlice({
     name: "auth",
     initialState: { user: null, token: null },
     reducers: {
          addUser: (state, { payload }) => {
               state.user = payload.user;
               state.token = payload.token;
               Cookie.set("user", JSON.stringify(state.user), {expires: 10});
               Cookie.set("token", state.token, {expires: 10});
          },
          removeUser: (state) => {
               state.user = null;
               state.token = null;
               Cookie.remove("user");
               Cookie.remove("token");
          }
     }
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;