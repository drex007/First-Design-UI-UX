import React from 'react'

const Button = ({ bg, border, text, width, height }) => {
  return (
    <button type="button" className={`${bg ? 'bg-primary-button' : ''}  lg:text-[10px]  text-[10px]  rounded-md p-2 px-8 text-white font-bold ${border ? "border-white border-2" : ""} ${width ? `w-${width}`: 'w-[200px]'} ${height ? `h-${height}`:'h-[40px]'}`}><p>{text}</p></button>
  )
}

export default Button