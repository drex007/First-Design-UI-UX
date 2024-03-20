import React, { useEffect, useState } from 'react'
import analytic from '../../assets/analytics.svg'
import Button from '../buttons/Button'
import { AppContext } from '../../context'
import { useContext } from 'react'
import PendingTaskLoader from '../buttons/PendingTask'

const Analytics = () => {
  const { getTasks, tasks } = useContext(AppContext)

  const taskLinkButton = async (link) => {
    window.open(link)

  }



  useEffect(() => {
    getTasks()

  }, [])


  return (
    <div>
      <div className='rounded-sm bg-black/20 py-8 px-16  '>
        <p className='text-white flex justify-center font-irish text-[30px]'>Daily Tasks</p>
      </div>
      <div className='lg:text-[15px] text-[12px]'>

        {tasks?.map((e, i) => (
          <div
            key={i}
            onClick={() => taskLinkButton(e?.task_link)}

            className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl'>
            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>{e?.task_title}</p>
              <p></p>
            </div>

            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>End date</p>
              <p className='tracking-wider'>{e?.end_date}</p>
            </div>

          </div>
        ))}

      </div>

      <div className='rounded-sm bg-black/20 py-8 px-16  '>
        <p className='flex text-white justify-center font-irish text-[30px] items-center'>Pending Tasks  <div className='ml-4'><PendingTaskLoader /></div> </p>
      </div>
      <div className='lg:text-[15px] text-[12px]'>

        {tasks?.map((e, i) => (
          <div
            key={i}
          

            className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl'>
            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>{e?.task_title}</p>
              <p></p>
            </div>

            <div className='text-white flex justify-between font-Montserrat'>
              <p className='tracking-wider'>End date</p>
              <p className='tracking-wider'>{e?.end_date}</p>
            </div>

          </div>
        ))}

      </div>



    </div>
  )
}

export default Analytics