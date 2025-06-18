import Home from './components/Home'
import Register from './components/Register'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import {UserContext} from './context/Context'

function App() {

  const [user, setuser] = useState();
  return (
    <>
      <UserContext.Provider value={{user,setuser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </>
  )
}

export default App
