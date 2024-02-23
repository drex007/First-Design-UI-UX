import React from 'react'
// import axios from 'axios'
import { data } from 'autoprefixer'

const Header = () => {

  // const webhook = async () => {
  //   data = await axios.post('https://e1fc-105-112-116-158.ngrok-free.app/auth/google/callback')
  //   print(data, "DATA")
  // }


  return (
    <div className='text-white pt-8 flex justify-between'>
      <div className='text-[20px] font-bold'>
        <p>KRYPTO</p>
      </div>
      <div className='hidden text-[15px] font-poppins lg:flex space-x-16'>
        {/* <p className=''>about</p> */}
        {/* <p className=''>pricing</p>
        <p className=''>contact</p>
        <p className=''>buy nfts</p> */}
      </div>
    </div>
  )
}

export default Header