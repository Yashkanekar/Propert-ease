import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

//The createSlice function from the @reduxjs/toolkit library is a utility that automatically generates a reducer function and action creators based on the initial state and the provided reducer logic.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // the state which these reducer functions recieve is the initialstate which we provide as the second property of this object
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions; // toolkit automatically creates actions for us

export default userSlice.reducer; // userSlice.reducer has created a reducer
