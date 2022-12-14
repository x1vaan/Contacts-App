import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing/landing';
import Register from './Register/Register';
import Login from './Login/Login';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Addcontact from './addContact/addContact';
import ProtectedRoutes from './ProtectedRoutes';
import OtherRoutes from './otherRoutes/otherRoutes';
import EditContact from './editContact/editContact';
import {useEffect} from 'react'

function App() {
  const hours = 12
  let now = new Date().getTime()
  let loginTime = window.localStorage.getItem('loginTime')

  useEffect(()=>{
    if(loginTime === null){

    }else {
      if(now - Number(loginTime) > hours*60*60*1000){
        window.localStorage.clear()
      }
    }
  },[])
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route element={<ProtectedRoutes/>}>
         <Route path='/home' element={<> <Navbar/> <Home/> </>}/> 
         <Route path='/addContact' element={<Addcontact/>}/>
         <Route path='/edit/:id' element={<EditContact/>}/>
      </Route>
      
    <Route path='*' element={<OtherRoutes/>} />
     </Routes>
    </div>
  );
}

export default App;
