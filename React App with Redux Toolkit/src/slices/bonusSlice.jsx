import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};

//actions
const incrementPointsBySalary = createAction("account/incrementByAmount");

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
  extraReducers: (builder) => {
    builder.addCase(incrementPointsBySalary, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

export const { increment, decrement } = bonusSlice.actions;
export default bonusSlice.reducer;
