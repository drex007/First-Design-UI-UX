import React from 'react'

const Header = () => {
  return (
    <div className='text-white pt-8 flex justify-between'>
      <div className='text-[20px] font-bold'>
        <p>KRYPTO</p>
      </div>
      <div className='text-[15px] font-poppins flex space-x-16'>
        <p className=''>about</p>
        <p className=''>pricing</p>
        <p className=''>contact</p>
        <p className=''>buy nfts</p>
      </div>
    </div>
  )
}

export default Header