import React from 'react'
import { AppContext } from '../../context'
import { useContext, useState, useEffect } from 'react'
import ButtonLoaderOne from '../buttons/ButtonLoaderOne'
import { data } from 'autoprefixer'



const Signup = () => {
  const TelegramBotLink = import.meta.env.VITE_TELEGRAM_BOT_LINK
  const { getTwitterOauth, connectTwitterLoadingState, connectTelegramBot, signUp } = useContext(AppContext)
   const [formData, setformData] = useState({
    tg_username: '',
    tg_id: '',
    x_username: '',
    x_id:'',
    referee: ''
   })

  const localStorageTwitter = localStorage.getItem("monkeyfi-twitter")
  const localStorageTelegram = localStorage.getItem("monkeyfi-telegram")

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
    
}

useEffect(() => {
  setformData({ ...formData, 
    tg_id: JSON.parse(localStorageTelegram)?.tg_id,
    tg_username: JSON.parse(localStorageTelegram)?.tg_username,
    x_id: JSON.parse(localStorageTwitter)?.user_id,
    x_username: JSON.parse(localStorageTwitter)?.screen_name,
  
  })

  
}, [localStorageTwitter])



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
          <button
            onClick={() => connectTelegramBot()}
            className='p-4 bg-primary-button rounded-md text-[10px] text-white font-poppins w-[100px]'>
            Telegram
          </button>

        </div>
        <div className='border border-white  flex justify-between p-2 m-4 rounded-md'>
          <input type="text" className='w-full  border-none bg-transparent font-poppins py-3 outline-none text-white' placeholder='Refferal code (Optional)' onChange={(e)=> handleChange(e)} />

        </div>
        <div className='p-4'>
          <button
          onClick={()=> signUp(formData)}

            className='w-full  p-4 bg-primary-button rounded-md text-[15px] text-white font-poppins'>
            Sign Up
          </button>

        </div>


      </div>


    </div>
  )
}

export default Signup