import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./Login"
import Connections from "./Connections"
import Profile from "./Profile"
import Body from "./Body"
import { Provider } from "react-redux"
import store from "./utils/appStore"

function App() {


  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/connections" element={<Connections/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
    </Provider>
  )
}

export default App
