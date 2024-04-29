import React, { useEffect, useState } from 'react'
import { AppContext } from '../../context'
import { useContext } from 'react'
import PendingTaskLoader from '../buttons/PendingTask'
import ButtonLoaderOne from '../buttons/ButtonLoaderOne'
import toast from 'react-hot-toast'

const Analytics = () => {

  const { getUserAccount, getTasks, tasks, addAccountToTask, redeemReferralCode, redeemLoadingState, account, connectTelegramBot, updateTelegram, setCurrentTelegramUser, updateOneTimeTask, reloadTask } = useContext(AppContext)
  const loggedInUser = localStorage.getItem("monkeyfi-loggedIn")

  const localStorageTelegram = localStorage.getItem("monkeyfi-telegram")
  const [reload, setReload] = useState(false)


  const [formData, setFormData] = useState({
    x_id: '',
    referee_code: ''
  })


  const taskLinkButton = async (link) => {
    window.open(link)
  }

  const handleOneTimeTask = async (data) => {
    const res = await updateOneTimeTask(data)
  }

  const getTelegramDetails = () => {
    const url = window.location.href;
    // Create a URLSearchParams object with the query parameters
    const params = new URLSearchParams(new URL(url).search);
    const tg_id = params.get("tg_id");
    const tg_username = params.get("username");
    if (tg_id && tg_username) {
      //Update Users tg
      if (!account?.tg_id) {
        const data = {
          tg_id: tg_id,
          tg_username: tg_username,
          x_id: account?.x_id,
        }
        updateTelegram(data)

      }

      return { tg_id: tg_id, tg_username: tg_username }
    }
  }


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, x_id: JSON.parse(loggedInUser)?.x_id })

  }



  useEffect(() => {
    getTasks()

  }, [reload])



  useEffect(() => {
    const data = getTelegramDetails()
    if (data) {
      localStorage.setItem("monkeyfi-telegram", JSON.stringify(data))
      setCurrentTelegramUser(data)
    }

  }, [account])

  useEffect(() => {
    const data = { x_id: JSON.parse(loggedInUser)?.x_id }
    getUserAccount(data)

  }, [reloadTask])


  return (
    <div>
      <div className='text-white py-4 flex justify-center font-poppins text-[20px]'>One Time Tasks</div>
      {!account?.referee || !account?.tg_id ?

        <div>
          <div
            className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl border-yellow-500'>
            <div className='text-white  font-Montserrat'>
              <p className='tracking-wider my-2'>Reedem referral code</p>
              <div className='flex justify-between'>
                <input type="text" name="referee_code" id="" placeholder='Enter referee code' className='bg-transparent outline-none rounded-md py-2 px-2  w-1/2 font-poppins font-light' onChange={(e) => handleChange(e)} />
                {redeemLoadingState ?
                  <ButtonLoaderOne />
                  :
                  <button

                    onClick={() => redeemReferralCode(formData)}
                    className='bg-gradient-to-r from-yellow-500 to-red-600 border-2 py-2 px-4 text-[15px] rounded-md'>Redeem</button>
                }
              </div>
            </div>

          </div>

          {!account?.tg_id ? <div
            className='border border-solid p-3 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl border-yellow-500' onClick={() => connectTelegramBot()}>
            <div className='text-white  font-Montserrat' >
              <p className='tracking-wider my-2'>Connect Telegram</p>
            </div>

          </div> :
            " "
          }

        </div>

        : ""

      }
      <div className='text-white '>

        {!account?.twitter_task && <div
          onClick={ () => {
            taskLinkButton("https://x.com/kruxai_xyz")
             handleOneTimeTask({ x_id: account?.x_id, task: "twitter_task" })
            

            

          }}
          className='border border-solid p-5 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl text-[13px] border-yellow-500'>
          <div className='text-white flex justify-between font-Montserrat'>
            <p className='tracking-wider'>Follow KruxAI on X</p>
            <p></p>
          </div>

          <div className='text-white flex justify-between font-Montserrat'>
            <p className='tracking-wider'></p>
            <p className='tracking-wider'></p>
          </div>

        </div>}
        {!account?.telegram_task && <div
          onClick={ () => {
            if (account?.tg_id === null || account?.tg_id === "") return toast.error("Connect your telegram")
            taskLinkButton("https://t.me/KruxAI")
            handleOneTimeTask({ x_id: account?.x_id, task: "telegram_group" })
              

            


          }}
          className='border border-solid p-5 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl text-[13px] border-yellow-500 '>
          <div className='text-white flex justify-between font-Montserrat'>
            <p className='tracking-wider'>Join our telegram group</p>
            <p></p>
          </div>

          <div className='text-white flex justify-between font-Montserrat'>
            <p className='tracking-wider'></p>
            <p className='tracking-wider'></p>
          </div>

        </div>}
        {!account?.telegram_channel_task && <div
          onClick={ () => {
            if (account?.tg_id === null || account?.tg_id === "") return toast.error("Connect your telegram")
            taskLinkButton("https://t.me/KruxAI_Channel")
            handleOneTimeTask({ x_id: account?.x_id, task: "telegram_channel_task" })
          
            

            


          }}
          className='border border-solid p-5 my-8 cursor-pointer rounded-tr-2xl rounded-bl-2xl text-[13px] border-yellow-500'>
          <div className='text-white flex justify-between font-Montserrat'>
            <p className='tracking-wider'>Join our telegram channel</p>
            <p></p>
          </div>

          <div className='text-white flex justify-between font-Montserrat'>
            <p className='tracking-wider'></p>
            <p className='tracking-wider'></p>
          </div>

        </div>}
      </div>

      <div className='rounded-sm  py-4   '>
        <p className='text-white flex justify-center font-poppins text-[20px] py-4'>Daily Tasks</p>
      </div>
      <div className='lg:text-[15px] text-[12px]'>

        {tasks?.map((e, i) => (
          <div key={i}>
            {e?.account.includes(JSON.parse(loggedInUser)?.id) ? "" :

              <div
                key={i}
                onClick={() => {
                  const data = { task_id: e?.id, x_id: JSON.parse(loggedInUser)?.x_id }
                  taskLinkButton(e?.task_link)
                  addAccountToTask(data)
                  setReload(true)

                }}

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
            }

          </div>
        ))}

      </div>

      <div className='rounded-sm  py-4 px-16 my-8 '>
        <p className='flex text-white justify-center font-poppins text-[20px] items-center'>Pending Tasks  <div className='ml-4'><PendingTaskLoader /></div> </p>
      </div>
      <div className='lg:text-[15px] text-[12px]'>

        {tasks?.map((e, i) => (
          <div key={i}>
            {e?.account.includes(JSON.parse(loggedInUser)?.id) && new Date(e?.end_date) >= new Date() ?

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

              </div> :
              " "

            }
          </div>
        ))}

      </div>



    </div>
  )
}

export default Analytics