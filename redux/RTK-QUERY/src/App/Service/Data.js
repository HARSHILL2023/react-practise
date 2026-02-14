import {createApi,fetchbaseQuery} from '@reduxjs/toolkit/query/react'

createApi({
    reducerPath : "products",
    baseQuery:fetchbaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints : (builder) => ({
        get 
    })
})