import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [{
      id: 1
    }]
  },
  reducers: {
    increment: (state) => {
      state.products = []
    }
  }
});


export const { increment } = productSlice.actions;
