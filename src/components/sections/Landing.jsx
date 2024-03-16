import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Featured from './Featured';
import Analytics from './Analytics';
import Getstarted from './Getstarted'



const Landing = () => {
  return (
    <div  className=' bg-primary lg:px-20 px-4 sm:w-full'>
      <Header />
      <Hero />
      <Featured />
      <Analytics />

      <Getstarted />
    </div>
  )
}

export default Landing