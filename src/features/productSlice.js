import { createSlice } from "@reduxjs/toolkit";
import api from "../api/productApi";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    productsName: [],
    status: "idle",
    error: "",
  },
  reducers: {
    productsLoaded: (state, action) => {
      state.productsName = action.payload;
    },
    categoriesLoaded: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { productsLoaded, categoriesLoaded } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      let productApi = new api(
        "https://private-4639ce-ecommerce56.apiary-mock.com/home"
      );
      let response = await productApi.fetchProducts();
      dispatch(productsLoaded(response.data.products));
      dispatch(categoriesLoaded(response.data.categories));
    } catch (err) {}
  };
};
