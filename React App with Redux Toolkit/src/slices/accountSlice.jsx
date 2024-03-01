import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  salary: 1,
};

export const getUserByDB = createAsyncThunk(
  "account/getUserByDB",
  async (userID, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/employees/${userID}`
    );
    return data.salary;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getUserByDB.fulfilled, (state, action) => {
        state.salary = action.payload;
        state.pending = false;
      })
      .addCase(getUserByDB.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getUserByDB.pending, (state, action) => {
        state.pending = true;
      });
  },
});
export const { increment, decrement, incrementByAmount } = acountSlice.actions;
export default acountSlice.reducer;
