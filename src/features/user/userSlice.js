import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;