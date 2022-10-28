import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'e93d979335msh4f8787366b82fa0p14fa1cjsn1f2066a2593d');
            
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
            getSongDetails: builder.query({ query: (songid) => `/tracks/details?track_id=${songid}` }),
            getSongRelated: builder.query({ query: (songid) => `/tracks/related?track_id=${songid}` }),
            getArtistDetails: builder.query({ query: (artistid) => `/artists/details?artist_id=${artistid}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_typeSONGS_ARTISTS&query=${searchTerm} `}),
        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;