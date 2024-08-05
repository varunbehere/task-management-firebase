import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard';
import Typography from '@mui/material/Typography'
import { LoginContext, useLoginContext } from './Context/LoginContext';

function App() {
  const [registered, setRegistered] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const login =()=>{

  }

  const logout =()=>{

  }

  return (
    <>
    <LoginContext.Provider value = {{registered,authenticated, login,logout,setRegistered, setAuthenticated}}>
    { authenticated ? <Dashboard/> : (registered ? <Login/> : <Register/>) }
    {/* <Typography variant="h1" color="white">App</Typography> */}
    </LoginContext.Provider>
    </>
  )
}

export default App
