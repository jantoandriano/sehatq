import { createSlice } from "@reduxjs/toolkit";
import firebase from "../config/firbase";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: "",
  },
  reducers: {
    loginFacebook: (state, action) => {
      state.access_token = action.payload;
    },
    loginGmail: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const { loginFacebook, loginGmail } = authSlice.actions;

export default authSlice.reducer;

export const handleLoginFacebook = () => {
  return async (dispatch, _) => {
    try {
      var provider = new firebase.auth.FacebookAuthProvider();
      let response = await firebase.auth().signInWithPopup(provider);

      dispatch(loginFacebook(response.credential.accessToken));

      localStorage.setItem("access_token", response.credential.accessToken);

      window.location.href = "/beranda";
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleLoginGmail = () => {
  return async (dispatch, _) => {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      let response = await firebase.auth().signInWithPopup(provider);

      dispatch(loginGmail(response.credential.accessToken));

      localStorage.setItem("access_token", response.credential.accessToken);

      window.location.href = "/beranda";
    } catch (error) {
      console.log(error);
    }
  };
};
