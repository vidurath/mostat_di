import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import About from './pages/about';
import Tips from './pages/tips';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Stats from './pages/stats';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>  
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/signup' element={<Signup/>}/>  
        <Route path='/login' element={<Login/>}/>  
        <Route path='/' element={<Home/>}/>  
      </Routes>
    </BrowserRouter>
);
