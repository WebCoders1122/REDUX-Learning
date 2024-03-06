import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// account api imports
import { addUser, deleteUser, getUsers, updateUser } from "./accountAPI";

const initialState = {
  employees: [],
  pending: false,
};

export const getAsync = createAsyncThunk("account/getUser", async () => {
  const response = await getUsers();
  return response.data;
});
export const addAsync = createAsyncThunk("account/addUser", async (user) => {
  const response = await addUser(user);
  return response.data;
});

export const deleteAsync = createAsyncThunk(
  "account/deleteUser",

  async (id) => {
    const response = await deleteUser(id);
    return id;
  }
);

export const updateAsync = createAsyncThunk(
  "account/updateUser",
  async (change) => {
    const response = await updateUser(change.id, {
      name: change.name,
      salary: change.salary,
    });
    return response.data;
  }
);

const acountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.employees.salary += 1;
    // },
    // decrement: (state) => {
    //   state.employees.salary -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.employees.salary += action.payload;
    // },
    // decrementByAmout: (state, action) => {
    //   if (action.payload > state.employees.salary) {
    //     return alert(
    //       "Please Enter amout which is less than or equal to Salary"
    //     );
    //   } else {
    //     state.employees.salary -= action.payload;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsync.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.pending = false;
      })
      .addCase(getAsync.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getAsync.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        console.log("add");

        state.employees.push(action.payload);
        state.pending = false;
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.pending = false;
        const delIndex = state.employees.findIndex(
          (employee) => employee.id == action.payload
        );
        state.employees.splice(delIndex, 1);
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        console.log("update");
        state.pending = false;
        const updateIndex = state.employees.findIndex(
          (employee) => employee.id == action.payload.id
        );
        state.employees.splice(updateIndex, 1, action.payload);
      });
  },
});
// export const { increment, decrement, incrementByAmount, decrementByAmout } =
// acountSlice.actions;
export default acountSlice.reducer;
