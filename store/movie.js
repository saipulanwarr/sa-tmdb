import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl, apiKey } from "../constants";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUpComingMovies: builder.query({
      query: () => `upcoming?api_key=${apiKey}`,
    }),
    getPopularMovies: builder.query({
      query: () => `popular?api_key=${apiKey}`,
    }),
    getNowPlayingMovies: builder.query({
      query: () => `now_playing?api_key=${apiKey}`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `/${id}?api_key=${apiKey}`,
    }),
  }),
});

export const {
  useGetUpComingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMovieDetailsQuery,
} = movieApi;
