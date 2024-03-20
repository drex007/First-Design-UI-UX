import React from 'react'
import { Hourglass } from 'react-loader-spinner'

const PendingTaskLoader = () => {
  return (
    <Hourglass
    height="30"
    width="30"

    color={"white"}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
/>
  )
}

export default PendingTaskLoader