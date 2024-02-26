import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};

const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
    decrement: (state) => {
      state.points -= 1;
    },
  },
});

export const { increment, decrement } = bonusSlice.actions;
export default bonusSlice.reducer;
