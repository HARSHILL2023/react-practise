import React from 'react'

const Suprise = () => {
    const arry=["harshil"];

  return (
    <>
    
    <h1>{arry}</h1> 
    <input type="text" onChange={arry.push((e)=>e.target.value)}/>
    <h1>{arry}</h1>


    </>
  )
}

export default Suprise