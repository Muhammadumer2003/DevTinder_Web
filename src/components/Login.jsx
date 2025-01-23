import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName,setFName]=useState("Muhammad Umer");
  const [lastName,setLName]=useState("Abbasi");
  const[password,setPassword]=useState("123456");
  const[age,setAge]=useState('21');
  const[gender,setGender]=useState("Male");


  const [signup , setSignup]=useState(false);

  const dispatch= useDispatch();

  const navigate=useNavigate();
  const [errFleg,setErrFlag]=useState(false);
  const [err,setErr]=useState("");

  const handleSubmit = async () => {
    console.log("click");
    try {
      const res = await axios.post('http://localhost:3000/user/login', {
        firstName,
        lastName,
        password
      }, { withCredentials: true });
      console.log(res);
      setErrFlag(false);
      dispatch(addUser(res));
      navigate('/feed');
    } catch (error) {
      console.error(error);
      setErrFlag(true);
      setErr(error?.response?.data?.message);
    }
  }

  const handleSubmit1 = async () => {
    try {
      const res = await axios.post('http://localhost/api/user/signup', {
        firstName,
        lastName,
        password,
        age,
        gender
      }, { withCredentials: true });
      console.log(res);
      setErrFlag(false);
      setSignup(!signup);
    } catch (error) {
      console.error(error);
      setErrFlag(true);
      setErr(error?.response?.data?.message);
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
{signup && <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Age</span>
    
  </div>
  <input type="text"
  value={age}  
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  onChange={(e)=>setAge(e.target.value)}/>

</label>}
{signup&&<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Gender</span>
    
  </div>
  <input type="text"
  value={gender}  
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  onChange={(e)=>setGender(e.target.value)}/>

</label>}


{/* end of inputs */}
    <h3 className="text-red-500">{errFleg ? err :""}</h3>
    

    <p>{signup ? " Have an account." : "Not have an account."} <span onClick={()=>setSignup(!signup)}>{signup ? "Login" : "Signup"}</span></p>

      <div className="card-actions justify-center mt-4">
        <button className="btn btn-primary"
        onClick={signup ? handleSubmit1 : handleSubmit}>{signup? "Signup": "Login"}</button>
      </div>
    </div>
</div>
      
    </div>
  )
}

export default Login
