import { createSlice } from "@reduxjs/toolkit";

export const academicSlice = createSlice({
  name: 'academics',
  initialState: [],
  reducers: {
    addAcademic: (state, action) => {
      if (action.payload) {
        state.push(action.payload);
      }
    }
  }
});

export const { addAcademic } = academicSlice.actions;
export default academicSlice.reducer;