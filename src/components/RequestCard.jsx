/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";


const RequestCard = ({firstName,lastName,age,gender,id,btl,setBTL}) => {
    const status="accepted";
    const statusIn="rejected";
    
    console.log(id);

    
    
    const handleClick=async()=>{
      
       try {
         const stat= await axios.post("http://localhost/api/user/request/review/"+status+"/"+id,{},{withCredentials:true});
         console.log(stat);
         setBTL(false);
       } catch (error) {
        console.log(error);
        
       }
    }
    const handleClick1=async()=>{
      
       try {
         const sta1t= await axios.post("http://localhost/api/user/request/review/"+statusIn+"/"+id,{},{withCredentials:true});
         console.log(sta1t);
         setBTL(false);
       } catch (error) {
        console.log(error);
        
       }
    }
  return (
    <div className="card card-side bg-base-300 shadow-xl mt-5" >
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    {age && gender && <p>{age} , {gender} </p>}
    <div className="card-actions justify-end">
      <button className="btn btn-primary"
      onClick={()=>handleClick()}>Accept</button>
      <button className="btn btn-primary"
      onClick={()=>handleClick1()}>Reject</button>
    </div>
  </div>
</div>
  )
}

export default RequestCard
