import React from 'react'
import axios from 'axios'
import { AppContext } from '../../context'
import { useContext, useEffect, useState } from 'react'

import ButtonLoaderOne from '../buttons/ButtonLoaderOne'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'


const OauthVerificationPage = () => {
    const { TwitterDetailsLoadingState, getUserTwitterDetails, connectTelegramBot,
        setCurrentTelegramUser, telegramLoadingState, signUp, signUpLoadingState } = useContext(AppContext)
    const navigate = useNavigate()

    const localStorageTwitter = localStorage.getItem("monkeyfi-twitter")
    const localStorageTelegram = localStorage.getItem("monkeyfi-telegram")


    const getOauthDetails = () => {
        const url = window.location.href;
        // Create a URLSearchParams object with the query parameters
        const params = new URLSearchParams(new URL(url).search);
        const oauthToken = params.get("oauth_token");
        const oauthVerifier = params.get("oauth_verifier");
        return { oauth_token: oauthToken, oauth_verifier: oauthVerifier }
    }

    const getTelegramDetails = () => {
        const url = window.location.href;
        // Create a URLSearchParams object with the query parameters
        const params = new URLSearchParams(new URL(url).search);
        const tg_id = params.get("tg_id");
        const tg_username = params.get("username");
        if (tg_id && tg_username) {
            return { tg_id: tg_id, tg_username: tg_username }
        }
    }

    const [formData, setformData] = useState({
        tg_username: '',
        tg_id: '',
        x_username: '',
        x_id: '',
        referee: ''
    })



    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })

    }

    const handleSignup = async (formData)=>{
        const req = await signUp(formData)
        if(req === true){
            navigate('/')
        }
    }
    useEffect(() => {
        setformData({
            ...formData,
            tg_id: JSON.parse(localStorageTelegram)?.tg_id,
            tg_username: JSON.parse(localStorageTelegram)?.tg_username,
            x_id: JSON.parse(localStorageTwitter)?.user_id,
            x_username: JSON.parse(localStorageTwitter)?.screen_name,

        })


    }, [localStorageTwitter, localStorageTelegram])


    useEffect(() => {
        const data = getOauthDetails()
        if (data) {
            getUserTwitterDetails(data)

        }

    }, [])


    useEffect(() => {
        const data = getTelegramDetails()
        if (data) {
            localStorage.setItem("monkeyfi-telegram", JSON.stringify(data))
            setCurrentTelegramUser(data)
        }

    }, [])




    return (
        <div className=' flex bg-primary lg:px-20 px-4 sm:w-full h-screen py-10 items-center'>
            <div className='lg:w-1/2 border border-solid rounded-md border-white mx-auto '>
                <div className='flex justify-center my-4'>
                    <p className='text-white font-irish text-[30px]'> SIGN UP</p>
                </div>
                <div className='flex justify-between border border-white  p-2 m-4 rounded-md'>
                    <div className='flex items-center'> {localStorageTwitter ? <p className=' text-[15px] text-white pl-4'>@{JSON.parse(localStorageTwitter)?.screen_name}</p> : ""}</div>
                    {TwitterDetailsLoadingState ?
                        <ButtonLoaderOne />
                        :
                        <div>
                            {localStorageTwitter ? <FaCheck className='bg-green-400 p-3 rounded-3xl' size={40} color='white' /> :
                                <IoCloseSharp className='bg-red-400 p-3 rounded-3xl' size={50} color='white' />
                            }


                        </div>
                    }


                </div>
                <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
                    <div className='flex items-center'> {localStorageTelegram ? <p className=' text-[15px] text-white pl-4'>@{JSON.parse(localStorageTelegram)?.tg_username}</p> : ""}</div>
                    {localStorageTelegram ? <FaCheck className='bg-green-400 p-3 rounded-3xl' size={40} color='white' /> :
                        <div>
                            {telegramLoadingState ? <ButtonLoaderOne /> :

                                <button
                                    onClick={() => connectTelegramBot()}
                                    className='p-4 bg-primary-button rounded-md text-[10px] text-white font-poppins w-[100px]'>
                                    Telegram
                                </button>
                            }
                        </div>

                    }

                </div>
                <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
                    <input type="text" name='referee' className='w-full  border-none bg-transparent font-poppins py-2 outline-none text-white px-4' placeholder='Refferal code (Optional) ' onChange={(e) => handleChange(e)} />

                </div>
                <div className='p-4'>

                    {signUpLoadingState ?

                        <button

                            className='w-full flex justify-center p-4 bg-primary rounded-md text-[15px] text-white font-poppins border'>
                            <ButtonLoaderOne />
                        </button>
                        :
                        <button
                            onClick={() => handleSignup(formData)}
                            className='w-full  p-4 bg-primary-button rounded-md text-[15px] text-white font-poppins'>
                            Sign Up
                        </button>

                    }

                </div>


            </div>


        </div>
    )
}

export default OauthVerificationPage