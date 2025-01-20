import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
    name:'feed',
    initialState:[],
    reducers:{
        addFeed: (state, action) => {
            // Extract the serializable data
            // eslint-disable-next-line no-unused-vars
           
         
                return action.payload
        },
        removeFeed:(state,action)=>{
            const newArray= state.filter( (e)=> (e._id!=action.payload));
            return newArray;
        }
    }
});

export const {addFeed, removeFeed} =feedSlice.actions;

export default feedSlice.reducer;