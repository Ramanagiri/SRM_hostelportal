import {BrowserRouter, Route,Routes  } from 'react-router-dom'

//pages
import Forgot from './pages/authentication/forgot'
import Login from './pages/authentication/login'
import Signup from './pages/authentication/signup'
import Bookingrep from "./pages/dashboard/bookingrep"
import Report from "./pages/dashboard/masterrep"

function App () {
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgotpassword" element={<Forgot/>} />
            <Route path="/bookingrep" element={<Bookingrep/>} />
            <Route path="/report" element={<Report/>} />
          </Routes>
        </BrowserRouter>  
  )
}

export default App;