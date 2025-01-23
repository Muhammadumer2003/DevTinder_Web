import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPendingRequest } from '../utils/PendingRequests'
import RequestCard from './RequestCard'

const PendingRequests = () => {
    const dispatch = useDispatch();
    const selector = useSelector(store => store.PendingRequest);
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(null);
    const [btl, setBtl] = useState(true);
    

    const fetchPendingRequests = async () => {
       try {
         const response = await axios.get("/api/user/getPendingRequests", {withCredentials: true});
         const sanitizedData = response?.data?.data?.pendingRequests.map((request) => ({
            _id: request?._id,
            sender: request?.sender,
            receiver: request?.receiver,
            status: request?.status,
            createdAt: request?.createdAt,
            updatedAt: request?.updatedAt
        }));
        console.log(sanitizedData);

        setData(sanitizedData); // Update local state
        dispatch(addPendingRequest(sanitizedData)); // Dispatch only cleaned data
        
         
       } catch (error) {
        console.log(error);
       }
    }

    useEffect(() => {
        fetchPendingRequests();
    }, []);

    return selector.length>0 ?(
        <div  className="flex flex-col items-center scroll">
        <h1 className="text-4xl mt-5 font-extrabold">ALL Connections</h1>
        <div className="w-1/3 mt-5 ">
       


        {
             selector.map((row)=>{
                const reqId=row._id;
                console.log(reqId);
                const {firstName,lastName,_id}=row.sender;
               
                return  btl && <RequestCard firstName={firstName} lastName={lastName} age={null} gender={null} key={_id} id={reqId} btl={btl} setBtl={setBtl}/>
            })
        }

            
           
           
        </div>
        </div>
    ):<div>
        <h1>War gya</h1>
    </div>
}

export default PendingRequests
