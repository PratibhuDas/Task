import React from 'react'
import {useNavigate} from 'react-router-dom';
function Dashboard({logoutx}) {
    
    const navigate=useNavigate();
    function logout(){
        //const navigate=useNavigate();
        logoutx()
        navigate("auth")
    }
  return (
    <div>
        Dashboard
        <button onClick={logout}>Logout Started!</button>
        </div>
  )
}

export default Dashboard