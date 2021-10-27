import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react" 


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '83eb4702d0mshb48910027c4d2e1p1e0c5djsn4c9af7c3f84a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats';
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }), // it takes object 
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:()=> "/coins"
        })
    }),
})


// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '83eb4702d0mshb48910027c4d2e1p1e0c5djsn4c9af7c3f84a'
//     }
//   };