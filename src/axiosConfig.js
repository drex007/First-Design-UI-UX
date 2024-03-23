import axios from 'axios'



const instance = axios.create({
   
    headers: {
     
            "ngrok-skip-browser-warning": true
          

        // Authorization: `Bearer${USERFROMLS.access}`
    },
})

export const AxiosConfig =  instance