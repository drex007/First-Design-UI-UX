import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { AxiosConfig } from "./axiosConfig";

export const AppContext = React.createContext();


const backendUrl = import.meta.env.VITE_BACKEND_URL
// const frontendUrl = import.meta.env.VITE_FRONTEND_URL
const TelegramBotLink = import.meta.env.VITE_TELEGRAM_BOT_LINK

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [oauth, setOauth] = useState({});
  const [loginOauth, setLoginOauth] = useState({})
  const [connectTwitterLoadingState, setConnectTwitterLoadingState] = useState(false)
  const [TwitterDetailsLoadingState, setGetTwitterDetailsLoadingState] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [currentTelegramUser, setCurrentTelegramUser] = useState({})
  const [telegramLoadingState, setTelegramLoadingState] = useState(false)
  const [signUpLoadingState, setSignUpLoadingState] = useState(false)
  const [account, setAccount] = useState(null)
  const [redeemLoadingState, setRedeemLoadingState] = useState(false)

  //For getting users request token on Login
  const getXLoginOauth = async () => {

    try {
      const account = await AxiosConfig.get(`${backendUrl}/account/login-x-oauth`)
      setLoginOauth(account.data)
      window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${loginOauth?.oauth_token}&oauth_token_secret=${loginOauth?.oauth_token_secret}&oauth_callback_confirmed=true`)

    } catch (error) {
    }

  }
  //For getting user account from backend after giving acccess to twitter on login, paylod {oauth_token and oauth_verifier}
  const login = async (data) => {
    try {
      const req = await AxiosConfig.post(`${backendUrl}/account/login`, data)
      setCurrentUser(req.data)
      setAccount(req.data)
      localStorage.setItem("monkeyfi-loggedIn", JSON.stringify(req.data))

    } catch (error) {

    }
  }
  //For getting tasks available
  const getTasks = async () => {
    try {
      const task = await AxiosConfig.get(`${backendUrl}/task/all`)
      setTasks(task.data)

    } catch (error) {
    }

  }
  //For getting user request token when trying to connect account on sign up
  const getTwitterOauth = async () => {
    setConnectTwitterLoadingState(true)
    try {

      const oauthReq = await AxiosConfig.get(`${backendUrl}/account/x-oauth`)
      if (oauthReq.status === 200 && oauthReq.data !== undefined) {

        setOauth(oauthReq.data)

        setConnectTwitterLoadingState(false)
        window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${oauth?.oauth_token}&oauth_token_secret=${oauth?.oauth_token_secret}&oauth_callback_confirmed=true`)
        // window.open("https://www.facebook.com")
      }

    } catch (error) {
      setConnectTwitterLoadingState(false)

    }

  }

  // For getting user twitter details on connecting twitter account
  const getUserTwitterDetails = async (data) => {
    setGetTwitterDetailsLoadingState(true)
    try {
      const oauthReq = await AxiosConfig.post(`${backendUrl}/account/get-x-details`, data)
      localStorage.setItem('monkeyfi-twitter', JSON.stringify(oauthReq.data))
      setGetTwitterDetailsLoadingState(false)


    } catch (error) {
      setGetTwitterDetailsLoadingState(false)

    }

  }
  //For redirecting user to twitter bot page
  const connectTelegramBot = async () => {
    setTelegramLoadingState(true)
    try {
      window.open(TelegramBotLink)
      setCurrentTelegramUser(false)

    } catch (error) {
      setCurrentTelegramUser(false)

    }
  }

  //For completing user sign up after connecting twitter and telegram account 
  const signUp = async (data) => {
    setSignUpLoadingState(true)
    try {
      if (!data?.x_id || data?.x_id === '') return toast.error("Please connect twitter")
      if (!data?.tg_id || data?.tg_id === '') return toast.error("Please connect twitter")
      const req = await AxiosConfig.post(`${backendUrl}/account/signup`, data)
      if (req.status == 200) {
        toast.success("Signup successful")
        setSignUpLoadingState(false)
        return true
      }

    } catch (error) {
      setSignUpLoadingState(false)
      toast.error("Signup failed, try again")
      return false

    }

  }

  //For adding each account to task once yhe link is clicked 
  const addAccountToTask = async (data) => {
    try {
      const req = await AxiosConfig.post(`${backendUrl}/task/add-account`, data)
      if (req.status === 200) {
        const task = await AxiosConfig.get(`${backendUrl}/task/all`)
        console.log(task.data, 'TASK');
        setTasks(task.data)

      }

    } catch (error) {

    }

  }

  const getUserAccount = async (data) => {
    try {
      const req = await AxiosConfig.post(`${backendUrl}/account/user`, data)
      setAccount(req.data)

    } catch (error) {

    }

  }

  const redeemReferralCode = async (data) => {
    try {
      if (!data?.referee_code || data?.referee_code === '') return toast.error('Enter referee code')
      setRedeemLoadingState(true)
      const req = await AxiosConfig.post(`${backendUrl}/account/redeem-code`, data)
      if (req.status == 200) {
        setAccount(req.data)
        setRedeemLoadingState(false)
        toast.success('Code redeem')

      }

    } catch (error) {
      setRedeemLoadingState(false)
      toast.error(error?.response?.data ?? "Error occured, try again")

    }

  }

  const updateTelegram = async (data) => {
    try {

      const req = await AxiosConfig.post(`${backendUrl}/account/update-telegram`, data)

    } catch (error) {
    }

  }

  const logout = () => {
    localStorage.clear()
    setAccount(null)
    return toast.success("Logout successful")
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
        getXLoginOauth,
        login,
        currentUser,
        setCurrentUser,
        connectTelegramBot,
        currentTelegramUser,
        setCurrentTelegramUser,
        telegramLoadingState,
        setTelegramLoadingState,
        signUp,
        signUpLoadingState,
        setSignUpLoadingState,
        addAccountToTask,
        account,
        getUserAccount,
        redeemLoadingState,
        redeemReferralCode,
        updateTelegram,
        logout

      }} >
        {children}
      </AppContext.Provider>
    </>
  )




}   