import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slices/products'
import { productsApi } from './apis/productsApi'
import { userApi } from './apis/userApi'

export const store = configureStore({
  reducer: {
    product: productSlice.reducer ,

    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productsApi.middleware, userApi.middleware )
})
