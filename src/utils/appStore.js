import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import ConnectionsSlice from "./Connecitons"
import PendingRequests from "./PendingRequests";


const store= configureStore({
    reducer:{
        user: userSlice,
        feed:feedSlice,
        connections:ConnectionsSlice,
        PendingRequest: PendingRequests
    }
});

export default store;