
import './App.css';
import React, { useState } from 'react';
import {Navigate, Route,Routes} from 'react-router-dom';
import Auth from './component/Auth';
import Dashboard from './component/Dashboard';
function App() {
  const [user,setUser]=useState(false);
  return (
    <div className="App">
     App Component
     <Routes>
         {!user &&<Route path="/auth" element={<Auth auth={()=>setUser(true)}/>}/>}
         {user &&<Route path="/dashboard" element={<Dashboard logoutx={()=>setUser(false)}/>}/>}
         <Route path="*" element={<Navigate to={user?'dashboard':'auth'}/>}/>
     </Routes>
    </div>
  );
}

export default App;
