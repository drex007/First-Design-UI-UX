import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Header from './Header'
import Hero from './Hero'
import Featured from './Featured';
import Analytics from './Analytics';
import Getstarted from './Getstarted'
import { AppContext } from '../../context';




const Landing = () => {
  const {getTasks } = useContext(AppContext)

  useEffect(() => {
    getTasks()
   
  }, [])
  
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