import React from 'react'
import haaland from '../../assets/haaland.svg'

const Testimonial = () => {
  return (
    <div>
      <p className='flex justify-center text-white my-8'>TESTIMONIAL</p>
      <div className='flex  flex-col justify-center'>
        <p className='text-white font-bold text-[35px]  mx-auto'>Read What Others</p>
        <p className='text-white font-bold text-[35px]  mx-auto'> Have To Say</p>
      </div>
      <div className='flex justify-between  space-x-16 mt-10'>
        <div className='py-8 relative w-1/3'>
          <img src={haaland} alt="" className='absolute top-0 right-0  left-0 mx-auto  rounded-3xl w-[100px] h-[100px]  z-10' />
          <div className=''>
           
            
            <div className='py-10 px-8 rounded-3xl bg-primary-card z-0 mt-8'>
              <p className='py-4 flex justify-center text-white font-bold'>Oliver Giroud</p>
              <p className='text-[8px] text-white/70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>

          </div>
        </div>
        <div className='py-8 relative w-1/3'>
          <img src={haaland} alt="" className='absolute top-0 right-0  left-0 mx-auto  rounded-3xl w-[100px] h-[100px]  z-10' />
          <div className=''>


            <div className='py-10 px-8 rounded-3xl bg-primary-card z-0 mt-8'>
              <p className='py-4 flex justify-center text-white font-bold'>Oliver Giroud</p>
              <p className='text-[8px] text-white/70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>

          </div>
        </div>
        <div className='py-8 relative w-1/3'>
          <img src={haaland} alt="" className='absolute top-0 right-0  left-0 mx-auto  rounded-3xl w-[100px] h-[100px]  z-10' />
          <div className=''>


            <div className='py-10 px-8 rounded-3xl bg-primary-card z-0 mt-8'>
              <p className='py-4 flex justify-center text-white font-bold'>Oliver Giroud</p>
              <p className='text-[8px] text-white/70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial