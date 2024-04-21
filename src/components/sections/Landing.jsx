import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Header from './Header'
import Hero from './Hero'
import Featured from './Featured';
import Analytics from './Analytics';
import Getstarted from './Getstarted'
import { AppContext } from '../../context';




const Landing = () => {
  const { login, currentUser, account, getUserAccount, getTasks } = useContext(AppContext)

  useEffect(() => {
    getTasks()

  }, [])
  


  const loggedInUser = localStorage.getItem("monkeyfi-loggedIn")

  const getOauthDetails = () => {
    const url = window.location.href;
    // Create a URLSearchParams object with the query parameters
    const params = new URLSearchParams(new URL(url).search);
    // Get the values of oauth_token and oauth_verifier
    const oauthToken = params.get("oauth_token");
    const oauthVerifier = params.get("oauth_verifier");
    return { oauth_token: oauthToken, oauth_verifier: oauthVerifier }
  }


  useEffect(() => {
    const data = getOauthDetails()
    if (data) {
      login(data)
    }




  }, [])

  useEffect(() => {

  }, [currentUser])

  useEffect(() => {
    const data = { x_id: JSON.parse(loggedInUser)?.x_id }
    getUserAccount(data)

  }, [])



  return (
    <div className='min-h-svh bg-primary lg:px-20 px-4 sm:w-full '>
      <Header />
      <Hero />
      {account && Object.keys(account).length !== 0 && <Featured />}
      {account && Object.keys(account).length !== 0 &&  <Analytics />}

      <Getstarted />
    </div>
  )
}

export default Landing