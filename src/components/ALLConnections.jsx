/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import axios from "axios";
import { addConnections } from "../utils/Connecitons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import RequestCard from "./RequestCard";


const ALLConnections = () => {
    // eslint-disable-next-line no-unused-vars
    const dispatch=useDispatch();
    // eslint-disable-next-line no-unused-vars
    const selector=useSelector(store=>store.connections);
    // eslint-disable-next-line no-unused-vars
    const fetchConnections=async()=>{
        try {
            const connections= await axios.get("http://localhost/api/user/getallconnections",{withCredentials:true});
            console.log(connections);
            dispatch(addConnections(connections?.data?.data));


            
        } catch (error) {
            console.log(error.message);
            
        }
    }

    useEffect(()=>{
        fetchConnections();
    },[])
  return (
   <div  className="flex flex-col items-center scroll">
    <h1 className="text-4xl mt-5 font-extrabold">ALL Connections</h1>
    <div className="w-1/3 mt-5 ">

    {
        selector && selector.map((row)=>{
            const {firstName,lastName,age,gender}=row;
              return (<div className="card card-side bg-base-300 shadow-xl mt-5" >
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2> 
    {age && gender && <p>{age} , {gender} </p>}
   
  </div>
</div>)
        })
    }

        
       
       
    </div>
    </div>
  )
}

export default ALLConnections
