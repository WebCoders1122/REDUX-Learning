import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `employees`,
      providesTags: ["employees"],
    }),
    addAccount: builder.mutation({
      query: ({ id, salary }) => ({
        url: "employees",
        method: "POST",
        body: {
          id,
          salary: salary,
        },
      }),
      invalidatesTags: ["employees"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employees"],
    }),
    updateAccount: builder.mutation({
      query: ({ id, salary }) => ({
        url: `employees/${id}`,
        method: "PATCH",
        body: {
          salary: salary,
        },
      }),
      invalidatesTags: ["employees"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;

// baseUrl = static url of your app or web
// endpoits = post, get, update requests etc

// query is used to read the data
// mutation is used write, update and delete data
