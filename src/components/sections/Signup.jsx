import React from 'react'
import axios from 'axios'
import { AppContext } from '../../context'
import { useContext } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import ButtonLoaderOne from '../buttons/ButtonLoaderOne'


const Signup = () => {
  const { getTwitterOauth, connectTwitterLoadingState, setConnectTwitterLoadingState } = useContext(AppContext)



  return (
    <div className=' flex bg-primary lg:px-20 px-4 sm:w-full h-screen py-10 items-center'>
      <div className='lg:w-1/2 border border-solid rounded-md border-white mx-auto '>
        <div className='flex justify-center my-4'>
          <p className='text-white font-irish text-[30px]'> SIGN UP</p>
        </div>
        <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
          <p></p>
          {connectTwitterLoadingState ?
            <ButtonLoaderOne />

            :
            <button
              onClick={() => getTwitterOauth()}
              className='p-4 bg-primary-button rounded-md text-[10px] text-white font-poppins w-[100px]'>
              Twitter
            </button>

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

export default Signup