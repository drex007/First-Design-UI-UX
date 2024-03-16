import React from 'react'
import analytic from '../../assets/analytics.svg'
import Button from '../buttons/Button'
import { AppContext } from '../../context'
import { useContext } from 'react'

const Analytics = () => {
  const {tasks, setTasks} = useContext(AppContext)
  return (
    <div>
      <div className='rounded-sm bg-black/20 py-8 px-16  '>
        <p className='text-white flex justify-center font-irish text-[30px]'>Daily Tasks</p>
      </div>
      <div className='lg:text-[15px] text-[12px]'>

        <div >
          <div className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl'>
            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>Retweet Tweet</p>
              <p></p>
            </div>

            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>End date</p>
              <p className='tracking-wider'>2024-09-19</p>
            </div>

          </div>


        </div>
        <div>
          <div className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl'>
            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>Follow @Krypton on twitter</p>
              <p></p>
            </div>

            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>End date</p>
              <p className='tracking-wider'>2024-09-19</p>
            </div>

          </div>


        </div>
        <div>
          <div className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl'>
            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>Like this tweet</p>
              <p></p>
            </div>

            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>End date</p>
              <p className='tracking-wider'>2024-09-19</p>
            </div>

          </div>


        </div>
      </div>


    </div>
  )
}

export default Analytics