import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./components/Login"

import Profile from "./components/Profile"
import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/appStore"
import Feed from "./components/Feed"
import ALLConnections from "./components/ALLConnections"
import PendingRequests from "./components/PendingRequests"
import Chat from "./components/Chat"

function App() {


  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/login" element={<Login/>}/>
      
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/connections" element={<ALLConnections/>}/>
        <Route path="/pending-req" element={<PendingRequests/>}/>
        <Route path="/chat/:targetUserId" element={<Chat/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
    </Provider>
  )
}

export default App
