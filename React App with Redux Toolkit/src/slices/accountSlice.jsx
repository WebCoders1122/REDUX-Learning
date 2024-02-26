import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salary: 1,
};

const acountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.salary += 1;
    },
    decrement: (state) => {
      state.salary -= 1;
    },
    incrementByAmount: (state, action) => {
      state.salary += action.payload;
    },
  },
});
console.log(acountSlice);
export const { increment, decrement, incrementByAmount } = acountSlice.actions;
export default acountSlice.reducer;
