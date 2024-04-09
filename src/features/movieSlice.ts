// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { moviesType } from "../components/movie-list/MovieList";

interface QueryTypes {
  Search: moviesType;
  Response: string;
  totalResults: string;
  Error: string;
}

interface movieDetailType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [{ Source: string; Value: string }];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovieBy: builder.query<QueryTypes, string>({
      query: (queryParams) => `?apikey=a719ea34${queryParams}`,
    }),
    getMovieByImdbID: builder.query<movieDetailType, string>({
      query: (imdbID) => `?apikey=a719ea34&i=${imdbID}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByQuery, useGetMovieByImdbIDQuery } = movieApi;
