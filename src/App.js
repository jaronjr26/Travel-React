import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

const App = () => {
  
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/sign-up' element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default App
