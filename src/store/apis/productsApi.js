import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos"
    //baseUrl: `${process.env.REACT_BACKEND_URL}/api/products`
  }),

  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: () => '/'
    })

  })
});


export const { useGetAllProductsQuery } = productsApi;

