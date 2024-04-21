import React, { useContext, useEffect } from 'react'
import nft from '../../assets/nft.svg'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'


const Hero = () => {
  const { getXLoginOauth, currentUser, setCurrentUser, setAccount, logout } = useContext(AppContext)
  const loggedInUser = localStorage.getItem("monkeyfi-loggedIn")
  




  return (
    <div className=' bg-dragon w-full bg-center lg:bg-40% flex justify-center py-20 bg-no-repeat bg-70%'>
      <div>
        <div className='justify-center w-full lg:text-[80px] text-[40px]  text-white font-bold'>
          Learn, Interact and Get Earn

          <p className='flex text-[18px] font-light mt-8 justify-center'>Discover mindblowing projects, join the gaming and AI revolution and get rewarded.</p>
        </div>
        {loggedInUser ? <div className='mt-10 flex justify-center space-x-4'>
          <button className='py-2 px-12 text-white font-poppins border bg-gradient-to-r from-yellow-500 to-red-600 cursor-pointer rounded-md'>@{JSON.parse(loggedInUser)?.x_username}</button>
          <button className='py-2 px-12 text-white font-poppins border bg-gradient-to-r from-yellow-500 to-red-600 cursor-pointer rounded-md' onClick={() => logout()}>Log out</button>

        </div> :

          <div className='mt-10 flex space-x-4 justify-center'>
            <button onClick={() => getXLoginOauth()} className='py-2 px-12 text-white font-poppins border bg-gradient-to-r from-yellow-500 to-red-600 cursor-pointer rounded-md'>Login with X</button>
          </div>
        }
      </div>

    </div>
  )
}

export default Hero