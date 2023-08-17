import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "js-cookie";

const token = Cookie.get("token");
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: ({ token }) => ({
        url: "/contact",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["Contact"],
    }),
    getContact: builder.query({
      query: ({id}) => ({
        url: `/contact/${id}`,
    }),
      providesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        body: id,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: ({ contact, token }) => ({
        url: `/contact`,
        method: "POST",
        body: contact,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ contactResult, token }) => ({
        url: `/contact/${contactResult.id}`,
        method: "PATCH",
        body: contactResult,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useGetContactsQuery, useGetContactQuery , useDeleteContactMutation, useCreateContactMutation, useUpdateContactMutation } = contactApi;
