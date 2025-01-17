import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName,setFName]=useState("Muhammad Umer");
  const [lastName,setLName]=useState("Abbasi");
  const[password,setPassword]=useState("123456");

  const dispatch= useDispatch();

  const navigate=useNavigate();

  const handleSubmit=async()=>{
    console.log("click");
 
    try {
      const res= await axios.post('http://localhost:3000/user/login',{
        firstName,
        lastName,
        password
  
        },{withCredentials:true});
        console.log(res);
        dispatch(addUser(res));
        navigate('/feed');
    } catch (error) {
      console.error(error);
      
    }

 

}
  return (
    <div className="flex justify-center my-14">
        <div className="card bg-base-300 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title mx-[40%]">Login</h2>
     {/* input */}
     <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">First Name</span>
    
  </div>
  <input type="text" 
  value={firstName}
  placeholder="Type here"
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setFName(e.target.value)} />

</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Last Name</span>
    
  </div>
  <input type="text"
  value={lastName}  
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  onChange={(e)=>setLName(e.target.value)}/>

</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
    
  </div>
  <input type="password"
  value={password} 
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  onChange={e=>setPassword(e.target.value)}/>

</label>


{/* end of inputs */}



      <div className="card-actions justify-center mt-4">
        <button className="btn btn-primary"
        onClick={handleSubmit}>Login</button>
      </div>
    </div>
</div>
      
    </div>
  )
}

export default Login
