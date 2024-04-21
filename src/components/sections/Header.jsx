import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {



  return (
    <div className='text-white pt-8 flex justify-between'>
      <div className='text-[20px] font-bold'>
       <Link to={'/'}> <img src={logo} alt=""  className='w-[120px]'/></Link>
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