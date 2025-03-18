import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  username: string | null;
  token: string | null;
  isLoggedIn: boolean;
  avatar: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  token: null,
  isLoggedIn: false,
  avatar: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<UserState, 'isLoggedIn'>>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.avatar = action.payload.avatar;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.id = null;
      state.username = null;
      state.token = null;
      state.avatar = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer; 