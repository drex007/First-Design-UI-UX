import React from 'react'
import tg from '../../assets/tg.svg'
import tw from '../../assets/tw.png'

const Getstarted = () => {
  return (
    <div className='py-4 '>
      <div className='rounded-2xl py-4 border-2 bg-gradient-to-b from-black/20 from-50%  to-transparent'>
        <div className='py-2'>
          <p className='flex justify-center font-bold text-white'>Are You Ready ?</p>
        </div>
        <div className='py-2 w-1/2 flex-col mx-auto'>
          <p className='flex justify-center font-bold lg:text-[30px] text-white'>Be Part Of Our</p>
          <p className='flex justify-center font-bold lg:text-[30px] text-white'>Community</p>
        </div>
        <div className='flex justify-center my-4'>
          <div className='mt-6 flex flex-col justify-center space-x-1'>
            <div className='flex justify-center space-x-3'>
              <div className='p-1 border-2 rounded-lg'>
               <a href="https://t.me/KruxAI"> <img src={tg} alt="" className='w-[20px] cursor-pointer ' /></a>
              </div>
              <div className='p-1 border-2 rounded-lg'>
               <a href="https://twitter.com/KruxAI_XYZ"> <img src={tw} alt="" className='w-[20px] cursor-pointer' /></a>
              </div>
            </div>
          </div>
          {/* <p className='lg:w-1/2 bg-black rounded-lg px-10 py-2 text-white flex justify-center cursor-pointer font-poppins'>Apply for listing</p> */}
        </div>


      </div>
    </div>
  )
}

export default Getstarted