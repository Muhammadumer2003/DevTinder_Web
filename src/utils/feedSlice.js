import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
    name:'feed',
    initialState:[],
    reducers:{
        addFeed: (state, action) => {
            // Extract the serializable data
            // eslint-disable-next-line no-unused-vars
            const { data, headers } = action.payload;
            return {
                ...state,
                data,
                headers: {
                    // contentLength: headers['content-length'], // Example of extracting specific header
                    // contentType: headers['content-type'],
                },
            };
        },
        removeFeed:()=>{
            return null
        }
    }
});

export const {addFeed, removeFeed} =feedSlice.actions;

export default feedSlice.reducer;