import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {



  return (
    <div className='text-white pt-8 flex justify-between'>
      <div className='text-[20px] font-bold'>
       <Link to={'/'}> <p className='cursor-pointer'>KRYPTO</p></Link>
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