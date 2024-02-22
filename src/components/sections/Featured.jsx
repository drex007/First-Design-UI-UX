import React from 'react'
import Button from '../buttons/Button'
import image from '../../assets/profile.svg'
import image2 from '../../assets/points.svg'

const Featured = () => {
  return (
    <div className='mt-4 py-8'>
      <div className='rounded-sm bg-black/20 py-8 px-16 flex justify-center'>
        <h1 className='text-white font-bold font-irish text-[30px]'>Dashboard</h1>



      </div>

      <div className='flex justify-between mt-10 space-x-10'>
        <div className='flex flex-col border border-solid w-1/2 p-10 rounded-lg justify-center'>
          <img src={image2} alt=""  className='w-[200px]'/>
          <h1 className='text-white text-[20px] font-irish my-2 text-center tracking-widest' >Points Gained</h1>
          <h1 className='text-white text-[30px] font-irish my-2 text-center tracking-wider' >80,000 KRP</h1>


        </div>

        <div className='border border-solid w-1/2 p-10 rounded-lg font-irish'>
          <div className='flex justify-center'>
            <img src={image} alt="" srcset="" className='rounded-full w-[200px]' />
          </div>

          
          <p className='text-white text-[20px] text-center my-4'>Referral link</p>
          <div className='flex p-8  border border-solid text-center rounded-full py-3 items-center justify-between'>
            <p className='text-white font-poppins text-[10px]'>https://www.nairaland.com/</p>
            <Button
              text={"Copy link"}
              border={"white"}
              bg={'primary-button'} 
            />
          </div>




        </div>

      </div>

    </div>
  )
}

export default Featured 