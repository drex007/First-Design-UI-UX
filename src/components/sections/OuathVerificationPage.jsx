import React from 'react'
import axios from 'axios'
import { AppContext } from '../../context'
import { useContext, useEffect, useState } from 'react'

import ButtonLoaderOne from '../buttons/ButtonLoaderOne'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const OauthVerificationPage = () => {
    const { getTwitterOauth, connectTwitterLoadingState, TwitterDetailsLoadingState, getUserTwitterDetails } = useContext(AppContext)

    const localStorageTwitter = localStorage.getItem("monkey-fi")

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
        console.log(data);
        if (data) {
            getUserTwitterDetails(data)

        }

    }, [])




    return (
        <div className=' flex bg-primary lg:px-20 px-4 sm:w-full h-screen py-10 items-center'>
            <div className='lg:w-1/2 border border-solid rounded-md border-white mx-auto '>
                <div className='flex justify-center my-4'>
                    <p className='text-white font-irish text-[30px]'> SIGN UP</p>
                </div>
                <div className='flex justify-between border border-white  p-2 m-4 rounded-md'>
                    <div className='flex items-center'> {localStorageTwitter ? <p className=' text-[20px] text-white pl-4'>@{JSON.parse(localStorageTwitter)?.screen_name}</p> : ""}</div>
                    {TwitterDetailsLoadingState ?
                        <ButtonLoaderOne />
                        :
                        <div> 
                            {localStorageTwitter? <FaCheck className='bg-green-400 p-3 rounded-3xl' size={50}  color='white' />:
                            <IoCloseSharp className='bg-red-400 p-3 rounded-3xl' size={50}  color='white'  />
                            }


                        </div>
                        

                    }


                </div>
                <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
                    <p></p>
                    <button className='p-4 bg-primary-button rounded-md text-[10px] text-white font-poppins w-[100px]'>
                        Telegram
                    </button>

                </div>
                <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
                    <input type="text" className='w-full  border-none bg-transparent font-poppins py-3 outline-none text-white' placeholder='Refferal code (Optional)' />

                </div>
                <div className='p-4'>
                    <button className='w-full  p-4 bg-primary-button rounded-md text-[15px] text-white font-poppins'>
                        Sign Up
                    </button>

                </div>


            </div>


        </div>
    )
}

export default OauthVerificationPage