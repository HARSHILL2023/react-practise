import React from 'react'

export const Cart = () => {
    const array =["apple","dsa","html"]

  return (
    <>
    <h1>cart items</h1>
    <ul>
      {array.map((i)=>(
        <li key={Math.random()}>{i}</li>
      ))}  
    </ul>
    
    
    
    </>
  )
}

