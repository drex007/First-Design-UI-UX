import React, { useState, useEffect } from "react";
import axios from "axios";


export const AppContext = React.createContext();


const backendUrl = import.meta.env.VITE_BACKEND_URL
const frontendUrl = import.meta.env.VITE_FRONTEND_URL

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [oauth, setOauth] = useState({});
  const [loginOauth, setLoginOauth] = useState({})
  const [connectTwitterLoadingState, setConnectTwitterLoadingState] = useState(false)
  const [TwitterDetailsLoadingState, setGetTwitterDetailsLoadingState] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const login = async () => {

    try {
      const account = await axios.get(`${backendUrl}/account/login`)
      setLoginOauth(account.data)
      window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${loginOauth?.oauth_token}&oauth_token_secret=${loginOauth?.oauth_token_secret}&oauth_callback_confirmed=true`)

    } catch (error) {
    }

  }

  const getUser = async (data) => {
    try {
      const req = await axios.post(`${backendUrl}/account/user`, data)
      setCurrentUser(req.data)
      localStorage.setItem("monkey-loggedIn", JSON.stringify(req.data))
    
    } catch (error) {
      
    }
  }

  const getTasks = async () => {
    try {
      const task = await axios.get(`${backendUrl}/task/all`)
      setTasks(task.data)

    } catch (error) {
    }

  }

  const getTwitterOauth = async () => {
    setConnectTwitterLoadingState(true)
    try {
      const oauthReq = await axios.get(`${backendUrl}/account/x-oauth`)
      setOauth(oauthReq.data)
      setConnectTwitterLoadingState(false)
      window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${oauth?.oauth_token}&oauth_token_secret=${oauth?.oauth_token_secret}&oauth_callback_confirmed=true`)

    } catch (error) {
      setConnectTwitterLoadingState(false)

    }

  }


  const getUserTwitterDetails = async (data) => {
    setGetTwitterDetailsLoadingState(true)
    try {
      const oauthReq = await axios.post(`${backendUrl}/account/get-x-details`, data)
      localStorage.setItem('monkey-fi', JSON.stringify(oauthReq.data))
      setGetTwitterDetailsLoadingState(false)


    } catch (error) {
      setGetTwitterDetailsLoadingState(false)

    }

  }



  return (
    <>
      <AppContext.Provider value={{

        tasks,
        setTasks,
        getTasks,
        getTwitterOauth,
        connectTwitterLoadingState,
        setConnectTwitterLoadingState,
        TwitterDetailsLoadingState,
        setGetTwitterDetailsLoadingState,
        getUserTwitterDetails,
        login,
        getUser,
        currentUser,
        setCurrentUser

      }} >
        {children}
      </AppContext.Provider>
    </>
  )




}   