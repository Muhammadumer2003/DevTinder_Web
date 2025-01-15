import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./Login"
import Connections from "./Connections"
import Profile from "./Profile"
import Body from "./Body"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/connections" element={<Connections/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
