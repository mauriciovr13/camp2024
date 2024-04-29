import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  isLoading: boolean;
  error: boolean;
};

const initialState: InitialState = {
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, _: PayloadAction<{username: string; password: string}>) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
    },
    loginFailure: state => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {login, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;
