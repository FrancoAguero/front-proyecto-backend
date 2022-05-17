import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080/api/users`
  }),

  endpoints: (builder) => ({
    postUserRegister: builder.mutation({
      query: (body) => ({ 
        url: "/register",
        method: "POST",
        body
      })
    })
  })
});


export const { usePostUserRegisterMutation } = userApi;

