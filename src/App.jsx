import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import Connections from "./components/Connections"
import Profile from "./components/Profile"
import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/appStore"
import Feed from "./components/Feed"

function App() {


  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/connections" element={<Connections/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
    </Provider>
  )
}

export default App
