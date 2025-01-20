import { createSlice } from "@reduxjs/toolkit";

const PendingRequest=createSlice({
    name: 'PendingRequest',
    initialState:0,
    reducers:{
        addPendingRequest:  (state, action) => {
            // Extract the serializable data
           return action.payload;
        },
        removePendingRequest:(state,action)=>{
            return state.filter(e=>e._id!==action.payload);
        }
    }
});

export const {addPendingRequest, removePendingRequest} = PendingRequest.actions;

export default PendingRequest.reducer;