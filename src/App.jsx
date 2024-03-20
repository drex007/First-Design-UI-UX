import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/sections/Landing';
import Signup from './components/sections/Signup';
import OauthVerificationPage from './components/sections/OuathVerificationPage';
import LoggedIn from './components/sections/LoggedIn';


function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth/twitter" element={<OauthVerificationPage />} />
        <Route path="/logged-in" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
