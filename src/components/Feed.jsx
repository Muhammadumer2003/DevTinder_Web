/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "./Card"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";



const Feed = () => {
  const dispatch=useDispatch();
  const selc=useSelector(store=>store.feed);


  const fetchUser=async()=>{

    const users=await axios.get('http://localhost:3000/user/feed',{withCredentials:true});
    console.log(users);
    dispatch(addFeed(users?.data));

  }

  const userprop=selc?.data;

  


  useEffect(()=>{
    fetchUser();
  },[])


 

  return userprop.length>0 ? (
    <div className="flex justify-center my-14 gap-3">
        <Card  firstName={userprop[0]?.firstName} lastName={userprop[0]?.lastName} age={userprop[0]?.age} gender={userprop[0]?.gender}/>
      
    </div>
  ): (
    <div ><h1 className="text-center text-3xl font-semibold my-8" >No users to show.</h1></div>
  )
}

export default Feed
