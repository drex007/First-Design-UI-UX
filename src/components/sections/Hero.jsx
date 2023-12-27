import React from 'react'
import nft from '../../assets/nft.svg'
import Button from '../buttons/Button'

const Hero = () => {
  return (
    <div className=' mt-32 py-8 flex justify-between'>
      <div>
        <div className='text-[40px] w-2/3 text-white font-bold'>
          Discover and collect rate
          <p>Nfts</p>
          <p className='text-[12px] font-light'>The  most secure marketplace for buying and
            selling of unique crypto nfts.</p>
        </div>
        <div className='my-4 flex space-x-4'>
          <Button
            text={"BUY NFT"}
            bg={'primary-button'} 
          />
          <Button
            text={"SELL NFT"}
            border= {"white"}
          />
        </div>
      </div>
      {/* Image div */}
      <div>
        <img src={nft} alt="" />
      </div>

    </div>
  )
}

export default Hero