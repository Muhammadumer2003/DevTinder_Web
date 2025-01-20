import { createSlice } from "@reduxjs/toolkit";

const ConnectionsSlice=createSlice({
    name:'connections',
    initialState:null,
    reducers:{
        addConnections:(state,action)=>{
            return action.payload;
        },
        removeConnections:(state,action)=>{
            return state.filter(e=>e._id!==action.payload);
        }

    }
});


export const {addConnections,removeConnections}= ConnectionsSlice.actions;

export default ConnectionsSlice.reducer;
