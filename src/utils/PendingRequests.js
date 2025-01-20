import { createSlice } from "@reduxjs/toolkit";

const PendingRequest=createSlice({
    name: 'PendingRequest',
    initialState:0,
    reducers:{
        addPendingRequest:  (state, action) => {
            // Extract the serializable data
           return action.payload;
        },
        removePendingRequest:()=>{
            return null;
        }
    }
});

export const {addPendingRequest, removePendingRequest} = PendingRequest.actions;

export default PendingRequest.reducer;