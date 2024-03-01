import React from "react";
import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  rewardPoints: 12,
};

// actions
export const increment = createAction("reward/increment");

const rewardReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.rewardPoints++;
  });
});

export default rewardReducer;
