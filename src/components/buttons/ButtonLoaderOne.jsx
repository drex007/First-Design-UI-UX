import React, { useContext, CSSProperties } from 'react'
import { DNA } from 'react-loader-spinner'



const ButtonLoaderOne = () => {
    return (


        <DNA
            height="50"
            width="50"


            color={"white"}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
        />




    )
}

export default ButtonLoaderOne