import React from 'react'
import analytic from '../../assets/analytics.svg'
import Button from '../buttons/Button'

const Analytics = () => {
  return (
    <div>
      <div>
        <p className='text-white flex justify-center'>ANALYTICS</p>
        <div className='flex items-center space-x-8'>
          <div>
            <img src={analytic} alt="" className='' />

          </div>
          <div>
            <p className='text-white text-[40px] font-bold'>Built-In Analytics To Track your Nfts.</p>
            <p className='text-white/70 w-2/3 font-light'>Use our built in analytical dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
            <p className=' my-16'></p>
            <Button

              text={"VIEW OUR PRICING"}
              bg={"primary-button"}
            />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Analytics