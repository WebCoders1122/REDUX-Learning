import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem, updateItem, deleteItem } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("cart/fetchItems", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addAsync = createAsyncThunk("cart/addItems", async (item) => {
  const { id, brand, thumbnail, title, price } = item;
  const response = await addItem({
    id,
    brand,
    thumbnail,
    title,
    price,
    quantity: 1,
  });
  return response.data;
});

export const deleteAsync = createAsyncThunk("cart/deleteItem", async (id) => {
  const response = await deleteItem(id);
  return id;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const delIndex = state.items.findIndex(
          (item) => item.id == action.payload
        );
        state.items.splice(delIndex, 1);
      });
  },
});
// export const {} = cartSlice.actions
export default cartSlice.reducer;
