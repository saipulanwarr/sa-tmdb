import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      const newArr = state.value.filter((item) => item.id !== action.payload);
      state.value = newArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = favoriteSlice.actions;

export default favoriteSlice.reducer;
