/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import Card from "./Card"
import { useEffect, useState } from "react";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";


const Profile = () => {

  const sele=useSelector(store=>store.user);
  console.log(sele);

  const user=sele;

  const [firstName,setfirstName]=useState(user?.data?.firstName)
  const [lastName,setlastName]=useState(user?.data?.lastName)
  const [age,setAge]=useState(user?.data?.age)
  const [gender,setGender]=useState(user?.data?.gender)

  const [Apicall,setApiCall]=useState(false);
 


  const dispatch= useDispatch();


  const fetchUser=async()=>{

    const users=await axios.patch('http://localhost:3000/user/profile/edit',{
      firstName,
      lastName,
      age
    },{withCredentials:true});
    console.log(users);
    dispatch(addFeed(users?.data));
    setApiCall(true);
    setTimeout(() => {
      setApiCall(false);
    }, 3000);
    
    
  

  }

  const userprop=sele?.data;


  // useEffect(()=>{
  //   fetchUser();
  // },[])

  return (
    <div className=" flex justify-center my-6 gap-10">

{Apicall && <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>}

<div className="flex justify-center my-14 w-96">
        <div className="card bg-base-300 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title mx-[40%]">Update Profile</h2>
     {/* input */}
     <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">First Name</span>
    
  </div>
  <input type="text" 
  value={firstName}
 
  placeholder="Type here"
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setfirstName(e.target.value)}
    />

</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Last Name</span>
    
  </div>
  <input type="text"
  value={lastName}
  onChange={(e)=>setlastName(e.target.value)}

  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  />

</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Age</span>
   
  </div>
  <input type="text"
   value={age}
   onChange={(e)=>setAge(e.target.value)}

  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  />

</label>


<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Gender</span>
    
  </div>
  <input type="text"
   value={gender}
   onChange={(e)=>setGender(e.target.value)}
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  />

</label>


{/* end of inputs */}



      <div className="card-actions justify-center mt-4">
        <button className="btn btn-primary"

        onClick={()=>fetchUser()}
       >Update</button>
      </div>
    </div>
</div>
      
    </div>


    <Card  firstName={firstName} lastName={lastName} age={age} gender={gender}/>
   
        
      
    </div>
  )
}

export default Profile
