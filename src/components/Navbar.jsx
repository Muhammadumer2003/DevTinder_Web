import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { removeUser } from "../utils/userSlice";
import axios from "axios";


const Navbar = () => {
  const selc=useSelector(store=>store.user);
  console.log(selc);
  const navigate=useNavigate();
  const dispatch =useDispatch();


  const logoutUser=async()=>{
    try {
     
  
      await axios.post("/api/user/logout",{},{withCredentials:true});
  
      dispatch(removeUser());
      navigate("/login")
  
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const data= selc?.data ? "/" :"/login";
  
  return (
    <div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to={data} className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
    {selc?.data && <p>Welcome : {selc?.data?.firstName}</p>}
    </div>
    {selc?.data && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://avatars.githubusercontent.com/u/151808307?v=4" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to={"/connections"}>Connecitons</Link></li>
        <li><Link to={"/pending-req"}>Pending Requests</Link></li>
        <li><a  onClick={logoutUser}>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
  )
}

export default Navbar
