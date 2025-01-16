/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useDispatch } from "react-redux"
import axios from "axios";
import { addUser } from "../utils/userSlice";

import { useEffect } from "react";

const Body = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();

  // const sele=useSelector(store=>store.user);
  const fetchUsers=async()=>{
    
   try {
    
     const user=await axios.get("http://localhost:3000/user/profile/view",{withCredentials:true});
     console.log(user);
     dispatch(addUser(user));
   } catch (error) {
    if(error.status==401){
      navigate("/login");

    }
    console.log(error.message);
    
   }

  }


  useEffect(()=>{


      fetchUsers();

  
    
    
    

  },[])
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
      
    </div>
  )
}

export default Body
