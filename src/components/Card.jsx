/* eslint-disable react/prop-types */

import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";


const Card = ({id,firstName, lastName,age,gender}) => {
  const dispatch=useDispatch();

  const handleClick=async(status,id)=>{
    try {
      await axios.post("http://localhost/api/user/request/"+status+"/"+id,{},{withCredentials:true});
      dispatch(removeFeed(id));
    } catch (error) {
      console.log(error);
      
    }

  }
    
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
    <figure>
      <img
        src="https://avatars.githubusercontent.com/u/151808307?v=4"
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <div className='flex  flex-col items-center gap-4'>
        <h2 className="card-title">Name:  {firstName} {lastName}</h2>
      <h3>Age: {age}</h3>
      <h3>Gender: {gender}</h3>
        </div>
     
      <div className="card-actions justify-center gap-5 mt-4">
        <button className="btn btn-primary"
        onClick={()=>handleClick('notinterested',id)}>Ignore</button>
        <button className="btn btn-secondary"
         onClick={()=>handleClick('interested',id)}>Interested</button>
      </div>
    </div>
  </div>
  )
}



export default Card
