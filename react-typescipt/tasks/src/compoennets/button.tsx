import React from 'react'

const Button = (props : {label:string ; onclick:void; disabled:boolean}) => {
  return (
    <>
        <button onClick={props.onclick} disabled={props.disabled}  >click me </button>
    </>
  )
}

export default Button
