import React from 'react'
import axios from 'axios'

const Signup = () => {

  const connectTwitter = async () => {
    try {
      console.log('called');

      const req = await axios.get("https://jsonplaceholder.typicode.com/todos/1", {})

      if (req.status === 200) {
        console.log(req.data, 'DAta');
        // window.open()

      }

    } catch (error) {
      console.log(error, 'ERRPR');

    }


  }
  return (
    <div className=' bg-primary lg:px-20 px-4 sm:w-full h-screen py-10'>
      <div className='lg:w-1/2 border border-solid rounded-md border-white mx-auto '>
        <div className='flex justify-center my-4'>
          <p className='text-white font-irish text-[30px]'> SIGN UP</p>
        </div>
        <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
          <p></p>
          <button
            onClick={() => connectTwitter()}
            className='p-4 bg-primary-button rounded-md text-[10px] text-white font-poppins'>
            Twitter
          </button>

        </div>
        <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
          <p></p>
          <button className='p-4 bg-primary-button rounded-md text-[10px] text-white font-poppins'>
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