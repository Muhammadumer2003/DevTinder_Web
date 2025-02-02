import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { CreateSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';

const Chat=()=>{
  const { targetUserId } = useParams();
  const selc=useSelector(store=>store.user);
  const userId=selc?.data?._id;
  const firstName=selc?.data?.firstName;
  console.log(targetUserId)
  const [messages,setMessages]=useState([]);
  const [newMessages,setnewMessages]=useState("");

  useEffect(() => {

    const conn=CreateSocketConnection();
    conn.emit("joinchat",{userId,targetUserId});


    conn.on("ReceivedMessages",({firstName,text})=>{
      setMessages((messages)=>[...messages,{firstName,text}])

    })

    return ()=>{
      conn.disconnect();
    }
    
  }, [userId,targetUserId]); 


 const SendMessage=()=>{
  const socket=CreateSocketConnection();
  
  socket.emit("sendMessage",{
    firstName:firstName,
    userId,
    targetUserId,
    text: newMessages
  })
 setnewMessages("")

 } 



  return(

    <div className="w-full flex items-center justify-center mt-8">
    <div className="w-1/2 border  h-[70vh]">

     <div className="flex-1 overflow-y-scroll h-[95%]">
      {/* messages */}
    {  messages?.map((msg,index)=>{
      return(
       <> <div className="chat chat-start">
  <div className="chat-header">
    {msg?.firstName}
    <time className="text-xs opacity-50">2 hours ago</time>
  </div>
  <div className="chat-bubble">{msg?.text}</div>
  <div className="chat-footer opacity-50">Seen</div>
</div>

</>
      )
    })}

     </div>
     <div  className="p-2 border-t flex items-center justify-center gap-2 ">
      <input type="text" 
      className="w-[80%]"
      value={newMessages}
      onChange={(e)=>setnewMessages(e.target.value)}
      />
      <button onClick={()=>SendMessage()}>Submit</button>

     </div>

    </div>
    </div>
  )

}

export default Chat