import React from 'react'

const Button = ({ bg, border, text, width }) => {
  return (
    <button type="button" className={`${bg ? 'bg-primary-button' : ''}  text-[10px] rounded-full p-2 px-8 text-white font-bold ${border ? "border-white border-2" : ""}`}><p>{text}</p></button>
  )
}

export default Button