import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ initial state should be plain and serializable
const initialState = {
  product: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.product = action.payload; // ✅ plain object/array gets stored
    },
    deleteProducts: (state, action)=>{
        const ind = action.payload
        console.log(ind);
        console.log(state.product[ind])
        // state.product.product.splice(action.payload,1)
        state.product.splice(ind, 1);

      }
  },
});

export const { getProducts,deleteProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

// ✅ Async thunk function outside the slice logic
export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch(getProducts(response.data));
};
