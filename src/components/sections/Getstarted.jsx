import React from 'react'
import tg from '../../assets/tg.svg'
import tw from '../../assets/tw.png'

const Getstarted = () => {
  return (
    <div className='py-8'>
      <div className='bg-primary-button/20 rounded-2xl'>
        <div className='py-2'>
          <p className='flex justify-center font-bold text-white'>Are You Ready ?</p>
        </div>
        <div className='py-2 w-1/2 flex-col mx-auto'>
          <p className='flex justify-center font-bold lg:text-[30px] text-white'>Be Part Of Our</p>
          <p className='flex justify-center font-bold lg:text-[30px] text-white'>Community</p>
        </div>
        <div className='py-2 flex flex-col justify-center space-x-1'>
          <div className='flex justify-center space-x-3'>
            <img src={tg} alt="" className='w-[20px] cursor-pointer' />
            <img src={tw} alt="" className='w-[20px] cursor-pointer' />
          </div>
          <div className='flex justify-center my-2'>
            <p className='lg:w-1/2 bg-black rounded-lg px-10 py-2 text-white flex justify-center'>Send a message</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Getstarted