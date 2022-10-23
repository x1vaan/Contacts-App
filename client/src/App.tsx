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

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<> <Navbar/> <Home/> </>}/>
      <Route path='/addContact' element={<Addcontact/>}/>
     </Routes>
    </div>
  );
}

export default App;
