import logo from './logo.svg';
import React, { useState } from 'react'; 
import { Route,Routes } from 'react-router-dom';
import EmpDelete from './components/EmpDelete';
import EmpPost from './components/EmpPost';
import EmpUpdate from './components/EmpUpdate';
import Empget from './components/Empget';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
    <div>
    <BrowserRouter>

      <Routes>
         <Route  path='/' element={<Home/>}/>
        <Route path="/get" element={<Empget/>} />
        <Route path="/update" element={<EmpUpdate/>}/>
        <Route path="/delete" element={<EmpDelete/>} />
        <Route path="/post" element={<EmpPost/>} />
      
    </Routes>
    </BrowserRouter>

    </div>
}

export default App;


