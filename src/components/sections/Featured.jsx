import React from 'react'
import Button from '../buttons/Button'
import image from '../../assets/profile.svg'
import image2 from '../../assets/points.svg'
import copy from '../../assets/copy.svg'

const Featured = () => {
  return (
    <div className='mt-4 py-8'>
      <div className='rounded-sm bg-black/20 py-8 px-16 flex justify-center'>
        <h1 className='text-white font-bold font-irish text-[30px]'>Dashboard</h1>



      </div>

      <div className='lg:flex  justify-between mt-10 lg:space-x-10  space-y-5'>
        <div className='flex flex-col border border-solid lg:w-1/2 p-10 rounded-lg justify-center mt-5'>
          <img src={image2} alt="" className='lg:w-[150px] w-[80px] mx-auto ' />
          <h1 className='text-white text-[20px] font-irish my-2 text-center tracking-widest' >Points Earned</h1>
          <h1 className='text-white text-[20px] font-irish my-2 text-center tracking-wider' >80,000,000 KRP</h1>


        </div>

        <div className='flex flex-col border border-solid lg:w-1/2 p-10 rounded-lg justify-center'>
          <div className='flex justify-center'>
            <img src={image} alt="" srcset="" className='rounded-full lg:w-[150px] w-[80px]' />
          </div>


          <p className='text-white text-[20px] text-center my-4 font-irish'>Referral link</p>
          <div className='flex lg:p-8  border border-solid text-center py-3 items-center justify-between p-2 space-x-3'>
            <p className=' text-[10px] text-white font-poppins lg:text-[15px]'>https://www.nairaland.com/</p>
            
            <img src={copy} alt="" srcset="" className='rounded-full lg:w-[50px] w-[30px] cursor-pointer' />
          </div>




        </div>

      </div>

    </div>
  )
}

export default Featured 