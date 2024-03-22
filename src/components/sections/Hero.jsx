import React, {useContext, useEffect} from 'react'
import nft from '../../assets/nft.svg'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'


const Hero = () => {
  const {getXLoginOauth, currentUser, setCurrentUser} = useContext(AppContext)
  const loggedInUser = localStorage.getItem("monkeyfi-loggedIn")




  return (
    <div className='mt-10 py-8 lg:flex lg:justify-between sm:grid'>
      <div>
        <div className='lg:w-4/6 w-full lg:text-[80px] text-[40px]  text-white font-bold'>
          Discover, Interact and Get Rewarded

          <p className='text-[15px] font-light mt-8'>Your Favourite Gamified Social Launchpad on the Solana Blockchain. Get in Early!</p>
        </div>
        {loggedInUser? <div className='my-3'>
          <button  className='py-2 px-12 text-white font-poppins border bg-primary-button cursor-pointer font-semibold'>@{JSON.parse(loggedInUser)?.x_username}</button>

        </div>:
        
        <div className='mt-10 flex space-x-4'>
          <button  onClick ={()=>getXLoginOauth()} className='py-2 px-12 text-white font-poppins border bg-primary-button cursor-pointer font-semibold'>Login</button>

          <Link to={'/signup'}>
            <button className='py-2 px-12 text-white font-poppins border bg-primary cursor-pointer font-semibold'>Create Account</button>
          </Link>
        </div>
        }
      </div>
      {/* Image div */}
      <div>
        <img src={nft} alt="" />
      </div>

    </div>
  )
}

export default Hero