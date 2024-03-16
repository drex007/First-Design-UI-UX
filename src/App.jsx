import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/sections/Landing';
import Signup from './components/sections/Signup';


function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
