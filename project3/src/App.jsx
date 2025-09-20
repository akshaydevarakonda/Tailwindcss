import Signup from "./Signup"
import NavBar from "./NavBar"
import Signin from "./SignIn"
import HomePage from "./HomePage"
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
  <Routes>
    <Route path="/signup"  element={<Signup />}/>
    <Route path="/signin"  element={<Signin />}/>
    <Route path="/"  element={<HomePage />}/>
  </Routes>
  )
}

export default App
