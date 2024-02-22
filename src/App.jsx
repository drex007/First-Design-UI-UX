import { useState } from 'react'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Featured from './components/sections/Featured'
import Analytics from './components/sections/Analytics'
import Testimonial from './components/sections/Testimonial'
import Getstarted from './components/sections/Getstarted'
import Footer from './components/sections/Footer'

function App() {


  return (
    <>
      <div className=' bg-primary px-60' >
        <Header />
        <Hero />
        <Featured />
        <Analytics />
        {/* <Testimonial /> */}
        <Getstarted />
        {/* <Footer /> */}
       


      </div>
    </>
  )
}

export default App
