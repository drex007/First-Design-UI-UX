import React from 'react'
import nft from '../../assets/nft.svg'
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Hero = () => {
 
  return (
    <div className='mt-10 py-8 lg:flex lg:justify-between sm:grid'>
      <div>
        <div className='lg:w-4/6 w-full lg:text-[80px] text-[40px]  text-white font-bold'>
          Discover, Interact and Get Rewarded

          <p className='text-[15px] font-light mt-8'>Your Favourite Gamified Social Launchpad on the Solana Blockchain. Get in Early!</p>
        </div>
        <div className='mt-10 flex space-x-4'>
          <Button

            text={"Login"}
            bg={'primary-button'}
          />
          <Link to={'/signup'}>    <Button
            text={"Sign up"}
            border={"white"}
          />
          </Link>
        </div>
      </div>
      {/* Image div */}
      <div>
        <img src={nft} alt="" />
      </div>

    </div>
  )
}

export default Hero