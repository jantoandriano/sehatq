import { createSlice } from "@reduxjs/toolkit";
import api from "../api/productApi";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    categories: [],
    productsName: [],
    status: "idle",
    error: "",
  },
  reducers: {},
});


export default cartSlice.reducer;

