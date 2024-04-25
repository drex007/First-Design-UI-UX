import React, { useEffect } from 'react'
import Button from '../buttons/Button'
import image from '../../assets/account.svg'
import image2 from '../../assets/reward.svg'
import copy from '../../assets/copy.svg'
import { AppContext } from '../../context'
import { useContext } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast'


const Featured = () => {
  const loggedInUser = localStorage.getItem("monkeyfi-loggedIn")
  const { account, getUserAccount } = useContext(AppContext)
 
  useEffect(() => {
    const data = { x_id: JSON.parse(loggedInUser)?.x_id }
    getUserAccount(data)

  }, [])

  return (
    <div className='mt-4 py-8 font-poppins'>
      <div className='rounded-sm bg-black/20 py-8 px-16 flex justify-center'>
        <h1 className='text-white font-bold font-poppins text-[30px]'>Dashboard</h1>



      </div>

      <div className='lg:flex  justify-between mt-10 lg:space-x-10  space-y-5'>
        <div className='flex flex-col border border-solid lg:w-1/2 p-10 rounded-lg justify-center mt-5'>
          <img src={image2} alt="" className='lg:w-[150px] w-[80px] mx-auto  ' />
          <h1 className='text-white text-[20px] font-poppins my-2 text-center tracking-widest' >Points Earned</h1>
          <div className='flex justify-between px-10'>
            <h1 className='text-white text-[20px] font-poppins my-2 text-center tracking-wider' >Social Points: {account?.points ?? 0} </h1>
            <h1 className='text-white text-[20px] font-poppins my-2 text-center tracking-wider' >Bot Points: {account?.bot_point ?? 0} </h1>
          </div>
        </div>

        <div className='flex flex-col border border-solid lg:w-1/2 p-10 rounded-lg justify-center'>
          <div className='flex justify-center'>
            <img src={image} alt="" srcset="" className='rounded-full lg:w-[150px] w-[80px]' />
          </div>


          <p className='text-white text-[20px] text-center my-4 font-poppins'>Referral Code</p>
          <div className='flex lg:p-3  border border-solid text-center  items-center justify-between p-2 space-x-3 rounded-2xl'>
            <p className=' text-[10px] text-white font-poppins lg:text-[15px]'>{account?.referral_code ?? 'N/A'}</p>
            <CopyToClipboard text={account?.referral_code ?? 'N/A'} onCopy={() => toast.success('Referral code copied')}>
              <img src={copy} alt="" srcset="" className='rounded-full lg:w-[20px] w-[20px] cursor-pointer' />

            </CopyToClipboard>

          </div>




        </div>

      </div>

    </div>
  )
}

export default Featured 